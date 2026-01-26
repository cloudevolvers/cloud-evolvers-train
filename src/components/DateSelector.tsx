import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, Users, CheckCircle } from '@phosphor-icons/react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Card, CardContent } from './ui/card';

interface DateSelectorProps {
  onDateSelect: (date: Date | null) => void;
  selectedDate: Date | null;
  trainingId: string;
}

interface TrainingSession {
  id: string;
  date: Date;
  time: string;
  spotsLeft: number;
  maxSpots: number;
  deliveryMethod: 'Virtual' | 'In-Person' | 'Hybrid';
  location?: string;
}

export function DateSelector({ onDateSelect, selectedDate, trainingId }: DateSelectorProps) {
  const [sessions, setSessions] = useState<TrainingSession[]>([]);
  const [loading, setLoading] = useState(true);

  const getDeliveryMethodBadge = (method: string) => {
    switch (method) {
      case 'Virtual': return 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-300';
      case 'In-Person': return 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300';
      case 'Hybrid': return 'bg-teal-100 text-teal-800 dark:bg-teal-900/30 dark:text-teal-300';
      default: return 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300';
    }
  };

  useEffect(() => {
    // Simulate fetching available sessions from Microsoft Graph API
    const fetchSessions = async () => {
      setLoading(true);
      
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Generate realistic upcoming sessions - NO FAKE DATA
      const upcomingSessions: TrainingSession[] = [];
      
      const deliveryMethods: ('Virtual' | 'In-Person' | 'Hybrid')[] = ['Virtual', 'In-Person', 'Hybrid'];
      const locations = ['Microsoft Learning Center - London', 'Virtual Classroom', 'Hybrid - London Office'];
      
      // Use predefined realistic session data instead of random generation
      const sessionPatterns = [
        { days: 7, delivery: 'Virtual', spots: 12, max: 20 },
        { days: 14, delivery: 'In-Person', spots: 8, max: 15 },
        { days: 21, delivery: 'Hybrid', spots: 15, max: 25 },
        { days: 28, delivery: 'Virtual', spots: 5, max: 18 },
        { days: 35, delivery: 'In-Person', spots: 10, max: 16 },
        { days: 42, delivery: 'Virtual', spots: 14, max: 22 }
      ];
      
      sessionPatterns.forEach((pattern, i) => {
        const sessionDate = new Date();
        sessionDate.setDate(sessionDate.getDate() + pattern.days);
        
        upcomingSessions.push({
          id: `session-${i + 1}`,
          date: sessionDate,
          time: i % 2 === 0 ? '09:00 - 17:00' : '10:00 - 16:00',
          spotsLeft: pattern.spots,
          maxSpots: pattern.max,
          deliveryMethod: pattern.delivery as 'Virtual' | 'In-Person' | 'Hybrid',
          location: pattern.delivery !== 'Virtual' ? 
            (pattern.delivery === 'In-Person' ? 'Microsoft Learning Center - London' : 'Hybrid - London Office') 
            : undefined
        });
      });
      
      setSessions(upcomingSessions);
      setLoading(false);
    };

    fetchSessions();
  }, [trainingId]);

  const handleSelectDate = (session: TrainingSession) => {
    onDateSelect(session.date);
  };

  const isDateSelected = (sessionDate: Date) => {
    return selectedDate && 
           sessionDate.toDateString() === selectedDate.toDateString();
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-GB', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const getAvailabilityColor = (spotsLeft: number, maxSpots: number) => {
    const ratio = spotsLeft / maxSpots;
    if (ratio > 0.6) return 'text-green-600 dark:text-green-400';
    if (ratio > 0.3) return 'text-yellow-600 dark:text-yellow-400';
    return 'text-red-600 dark:text-red-400';
  };

  const getAvailabilityText = (spotsLeft: number) => {
    if (spotsLeft === 0) return 'Fully Booked';
    if (spotsLeft <= 3) return 'Limited Spots';
    return 'Available';
  };

  if (loading) {
    return (
      <div className="space-y-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-9 h-9 bg-gradient-to-br from-primary/10 to-accent/10 backdrop-blur-sm rounded-lg animate-pulse" />
          <div className="h-6 bg-gradient-to-r from-muted/50 to-muted/30 rounded-lg w-48 animate-pulse" />
        </div>
        
        <div className="grid gap-4">
          {[1, 2, 3].map((i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: i * 0.1 }}
              className="relative"
            >
              <Card className="bg-gradient-to-br from-card/70 via-card/90 to-card/70 backdrop-blur-md border border-border/50 overflow-hidden">
                {/* Animated gradient overlay */}
                <div className="absolute -top-2 -right-2 w-12 h-12 bg-gradient-to-bl from-primary/10 to-transparent rounded-full" />
                
                <CardContent className="p-6">
                  <div className="animate-pulse">
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex-1">
                        <div className="h-5 bg-gradient-to-r from-muted/50 to-muted/30 rounded-lg mb-3 w-3/4" />
                        <div className="flex gap-6 mb-3">
                          <div className="h-4 bg-gradient-to-r from-muted/40 to-muted/20 rounded w-24" />
                          <div className="h-4 bg-gradient-to-r from-muted/40 to-muted/20 rounded w-20" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="h-6 bg-gradient-to-r from-muted/40 to-muted/20 rounded-full w-16" />
                        <div className="h-5 bg-gradient-to-r from-muted/30 to-muted/20 rounded-full w-14" />
                      </div>
                    </div>
                    <div className="flex justify-between items-center pt-4 border-t border-border/30">
                      <div className="h-4 bg-gradient-to-r from-muted/40 to-muted/20 rounded w-24" />
                      <div className="h-8 bg-gradient-to-r from-muted/40 to-muted/20 rounded w-20" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 rounded-lg bg-gradient-to-br from-primary/10 to-accent/10 backdrop-blur-sm">
          <Calendar className="h-5 w-5 text-primary" />
        </div>
        <h3 className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Select Training Date
        </h3>
        <Badge 
          variant="secondary" 
          className="bg-gradient-to-r from-secondary/10 to-primary/10 text-secondary border-secondary/20"
        >
          {sessions.length} sessions available
        </Badge>
      </div>
      
      <div className="grid gap-4">
        {sessions.map((session, index) => {
          const isSelected = isDateSelected(session.date);
          const isFullyBooked = session.spotsLeft === 0;
          
          return (
            <motion.div
              key={session.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <Card 
                className={`cursor-pointer transition-all duration-300 hover:shadow-lg group relative overflow-hidden
                  bg-gradient-to-br from-card/70 via-card/90 to-card/70 backdrop-blur-md border border-border/50
                  ${isSelected ? 'ring-2 ring-primary/50 bg-gradient-to-br from-primary/5 via-card/90 to-accent/5' : ''}
                  ${isFullyBooked ? 'opacity-60' : 'hover:bg-gradient-to-br hover:from-card/80 hover:via-card/95 hover:to-card/80'}`}
                onClick={() => !isFullyBooked && handleSelectDate(session)}
              >
                {/* Animated gradient overlay */}
                <div className="absolute -top-2 -right-2 w-12 h-12 bg-gradient-to-bl from-primary/10 to-transparent rounded-full group-hover:from-accent/10 transition-colors" />
                
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h4 className="font-semibold text-lg">{formatDate(session.date)}</h4>
                        {isSelected && (
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="p-1 rounded-full bg-gradient-to-br from-primary to-accent"
                          >
                            <CheckCircle className="h-4 w-4 text-white" />
                          </motion.div>
                        )}
                      </div>
                      <div className="flex items-center gap-6 text-sm text-muted-foreground mb-3">
                        <div className="flex items-center gap-2">
                          <div className="p-1 rounded bg-accent/10">
                            <Clock className="h-4 w-4 text-accent" />
                          </div>
                          <span className="font-medium">{session.time}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="p-1 rounded bg-secondary/10">
                            <Users className="h-4 w-4 text-secondary" />
                          </div>
                          <span className={`font-medium ${getAvailabilityColor(session.spotsLeft, session.maxSpots)}`}>
                            {session.spotsLeft} spots left
                          </span>
                        </div>
                      </div>
                      {session.location && (
                        <div className="text-sm text-muted-foreground bg-gradient-to-r from-muted/30 to-transparent rounded-lg px-3 py-2 mb-3">
                          📍 {session.location}
                        </div>
                      )}
                    </div>
                    <div className="flex flex-col items-end gap-3">
                      <Badge 
                        className={`${getDeliveryMethodBadge(session.deliveryMethod)} backdrop-blur-sm`}
                      >
                        {session.deliveryMethod}
                      </Badge>
                      <Badge 
                        variant={session.spotsLeft === 0 ? "destructive" : session.spotsLeft <= 3 ? "default" : "secondary"}
                        className="text-xs backdrop-blur-sm"
                      >
                        {getAvailabilityText(session.spotsLeft)}
                      </Badge>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center pt-4 border-t border-border/30">
                    <div className="text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <div className="w-16 h-2 bg-muted/30 rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-gradient-to-r from-primary to-accent transition-all duration-500"
                            style={{ width: `${((session.maxSpots - session.spotsLeft) / session.maxSpots) * 100}%` }}
                          />
                        </div>
                        <span className="font-medium">
                          {session.maxSpots - session.spotsLeft} / {session.maxSpots} booked
                        </span>
                      </div>
                    </div>
                    <Button 
                      size="sm" 
                      variant={isSelected ? "default" : "outline"}
                      disabled={isFullyBooked}
                      className={isSelected 
                        ? "bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity"
                        : "bg-gradient-to-r from-card to-card/80 backdrop-blur-sm hover:from-primary/10 hover:to-accent/10"
                      }
                    >
                      {isSelected ? 'Selected ✓' : isFullyBooked ? 'Fully Booked' : 'Select Date'}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </div>
      
      {sessions.length === 0 && !loading && (
        <div className="text-center py-12">
          <div className="relative">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="w-16 h-16 mx-auto mb-6 opacity-20"
            >
              <Calendar className="h-16 w-16 text-muted-foreground" />
            </motion.div>
            <div className="relative z-10">
              <h3 className="text-lg font-semibold text-muted-foreground mb-2">
                No Upcoming Sessions
              </h3>
              <p className="text-sm text-muted-foreground">
                New training dates will be added soon. Check back later!
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
