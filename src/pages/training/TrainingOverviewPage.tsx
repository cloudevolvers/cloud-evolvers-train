import React, { useState, useMemo, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Funnel, Calendar } from '@phosphor-icons/react';
import { Link } from 'react-router-dom';
import { getAllTrainings } from '@/components/training/content/index';
import { useTranslations } from '@/hooks/use-translations';
import { BackgroundIcons } from '@/components/BackgroundIcons';
import {
  TrainingStats,
  TrainingFilters,
  TrainingCard,
  type CombinedTraining,
  type FilterState
} from '@/components/training/overview';
import { DotPattern } from "@/components/ui/dot-pattern";
import { SEO, PAGE_SEO } from '@/components/SEO';

const TrainingOverviewPage: React.FC = () => {
  const [filterState, setFilterState] = useState<FilterState>({
    searchTerm: '',
    selectedCategory: 'all',
    selectedLevel: 'all',
    featuredOnly: false,
    certificationOnly: false,
    sortBy: 'title'
  });

  const [allTrainings, setAllTrainings] = useState<CombinedTraining[]>([]);
  const { t } = useTranslations();

  // Helper function for translated course content
  const getTranslatedCourse = (training: CombinedTraining) => {
    // Training content is already in the correct language from getAllTrainings()
    return {
      title: training.title,
      description: training.description
    };
  };

  // Load all trainings
  useEffect(() => {
    const loadAllTrainings = async () => {
      try {
        const componentTrainings = getAllTrainings();
        const convertedTrainings: CombinedTraining[] = componentTrainings.map(training => ({
          ...training,
          isJsonBased: false,
        }));
        setAllTrainings(convertedTrainings);
      } catch (error) {
        console.error('❌ Error loading trainings:', error);
        setAllTrainings([]);
      }
    };
    loadAllTrainings();
  }, []);

  // Filter and sort trainings
  const filteredTrainings = useMemo(() => {
    let filtered = allTrainings.filter(training => {
      const searchMatch = !filterState.searchTerm ||
        training.title.toLowerCase().includes(filterState.searchTerm.toLowerCase()) ||
        training.description.toLowerCase().includes(filterState.searchTerm.toLowerCase()) ||
        training.tags?.some(tag => tag.toLowerCase().includes(filterState.searchTerm.toLowerCase()));

      const categoryMatch = filterState.selectedCategory === 'all' || training.category === filterState.selectedCategory;
      const levelMatch = filterState.selectedLevel === 'all' || training.level === filterState.selectedLevel;
      const featuredMatch = !filterState.featuredOnly || training.featured;
      const certificationMatch = !filterState.certificationOnly || training.certification?.available;

      return searchMatch && categoryMatch && levelMatch && featuredMatch && certificationMatch;
    });

    // Sort
    filtered.sort((a, b) => {
      if (filterState.sortBy === 'level') {
        const levelOrder = { 'Beginner': 1, 'Intermediate': 2, 'Advanced': 3, 'Expert': 4 };
        return (levelOrder[a.level] || 0) - (levelOrder[b.level] || 0);
      } else if (filterState.sortBy === 'duration') {
        const daysA = a.duration?.days || 0;
        const daysB = b.duration?.days || 0;
        return daysA - daysB;
      }
      return a.title.localeCompare(b.title);
    });

    return filtered;
  }, [allTrainings, filterState]);

  // Category statistics
  const categoryStats = useMemo(() => {
    const stats: Record<string, number> = {};
    allTrainings.forEach(training => {
      stats[training.category] = (stats[training.category] || 0) + 1;
    });
    return stats;
  }, [allTrainings]);

  // Format duration helper
  const formatDuration = (duration: { days: number; hours: number }) => {
    const days = duration?.days || 0;
    const hours = duration?.hours || 0;
    return days > 0 ? `${days} ${days === 1 ? 'day' : 'days'}` : `${hours} hours`;
  };

  // Clear all filters
  const clearFilters = () => {
    setFilterState({
      searchTerm: '',
      selectedCategory: 'all',
      selectedLevel: 'all',
      featuredOnly: false,
      certificationOnly: false,
      sortBy: 'title'
    });
  };


  return (
    <div className="min-h-screen pt-28 md:pt-32 pb-12 bg-background relative overflow-hidden">
      <SEO {...PAGE_SEO.training} />
      {/* Background matching home page */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <DotPattern className="opacity-15 text-primary/20" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-transparent to-background z-0" />
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-500/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 pb-2 bg-gradient-to-r from-blue-600 via-sky-600 to-cyan-600 bg-clip-text text-transparent">
            {t?.training?.overview?.title || 'Azure & Microsoft Training Courses'}
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            {t?.training?.overview?.subtitle || 'Comprehensive training programs designed by Microsoft Certified Trainers'}
          </p>
        </motion.div>

        {/* Stats */}
        <TrainingStats allTrainings={allTrainings} categoryStats={categoryStats} t={t} />

        {/* Filters */}
        <TrainingFilters
          filterState={filterState}
          setSearchTerm={(value) => setFilterState(prev => ({ ...prev, searchTerm: value }))}
          setSelectedCategory={(value) => setFilterState(prev => ({ ...prev, selectedCategory: value }))}
          setSelectedLevel={(value) => setFilterState(prev => ({ ...prev, selectedLevel: value }))}
          setFeaturedOnly={(value) => setFilterState(prev => ({ ...prev, featuredOnly: value }))}
          setCertificationOnly={(value) => setFilterState(prev => ({ ...prev, certificationOnly: value }))}
          setSortBy={(value) => setFilterState(prev => ({ ...prev, sortBy: value }))}
          allTrainings={allTrainings}
          categoryStats={categoryStats}
          clearFilters={clearFilters}
          t={t}
        />

        {/* Results Header */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex items-center justify-between mb-6"
        >
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Funnel size={16} />
            <span>Showing {filteredTrainings.length} of {allTrainings.length} courses{filterState.searchTerm && ` for "${filterState.searchTerm}"`}</span>
          </div>
        </motion.div>

        {/* Course Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mb-12"
        >
          {filteredTrainings.map((training, index) => (
            <TrainingCard
              key={training.slug}
              training={training}
              index={index}
              getTranslatedCourse={getTranslatedCourse}
              formatDuration={formatDuration}
              t={t}
            />
          ))}
        </motion.div>

        {/* No Results */}
        {filteredTrainings.length === 0 && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-20">
            <div className="max-w-md mx-auto">
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-blue-100 to-sky-100 dark:from-blue-900/30 dark:to-sky-900/30 rounded-2xl flex items-center justify-center">
                <Funnel size={40} className="text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-2xl font-semibold mb-3 text-foreground">No courses found</h3>
              <p className="text-muted-foreground mb-6">
                Try adjusting your search terms or filters to find the training courses you are looking for.
              </p>
              <Button onClick={clearFilters} variant="outline" size="lg">
                Clear All Filters
              </Button>
            </div>
          </motion.div>
        )}

        {/* CTA Section */}
        {filteredTrainings.length > 0 && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="mt-16">
            <Card className="bg-gradient-to-r from-blue-600 via-sky-600 to-cyan-800 border-0 shadow-xl">
              <CardContent className="p-8 text-center text-white">
                <h2 className="text-3xl font-bold mb-4">Ready to Start Your Learning Journey?</h2>
                <p className="text-white/90 mb-6 max-w-2xl mx-auto">
                  Join thousands of professionals who have advanced their careers with our comprehensive training programs.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/contact">
                    <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-white/90">
                      <Calendar className="mr-2 h-5 w-5" />
                      Schedule Consultation
                    </Button>
                  </Link>
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                    Browse All Courses
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default TrainingOverviewPage;
