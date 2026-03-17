import { Calendar, MapPin, UsersThree } from '@phosphor-icons/react';
import type { TrainingSession } from '@/hooks/use-training-sessions';
import { Link } from 'react-router-dom';

interface SessionPickerProps {
  sessions: TrainingSession[];
  loading: boolean;
  selectedSessionId: string | null;
  onSelect: (sessionId: string) => void;
}

function formatDateRange(start: string, end: string): string {
  const s = new Date(start + 'T00:00:00');
  const e = new Date(end + 'T00:00:00');
  const opts: Intl.DateTimeFormatOptions = { month: 'short', day: 'numeric' };
  return `${s.toLocaleDateString('en-US', opts)} — ${e.toLocaleDateString('en-US', { ...opts, year: 'numeric' })}`;
}

export default function SessionPicker({ sessions, loading, selectedSessionId, onSelect }: SessionPickerProps) {
  if (loading) {
    return (
      <div className="animate-pulse space-y-3">
        <div className="h-20 bg-muted rounded-xl" />
        <div className="h-20 bg-muted rounded-xl" />
      </div>
    );
  }

  if (sessions.length === 0) {
    return (
      <div className="border-2 border-dashed border-border rounded-xl p-6 text-center">
        <Calendar className="h-8 w-8 text-muted-foreground mx-auto mb-3" />
        <p className="text-muted-foreground font-medium mb-2">No upcoming dates scheduled</p>
        <p className="text-sm text-muted-foreground mb-4">
          Contact us to request available training dates.
        </p>
        <Link
          to="/contact"
          className="text-sm font-semibold text-emerald-600 hover:text-emerald-700 dark:text-emerald-400 dark:hover:text-emerald-300"
        >
          Get in touch &rarr;
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      <label className="flex items-center gap-2 text-sm font-semibold text-foreground">
        <Calendar className="h-4 w-4 text-foreground/70" weight="regular" />
        Select a Training Date
        <span className="text-red-500">*</span>
      </label>
      {sessions.map((session) => {
        const isSelected = selectedSessionId === session.id;
        const isFull = session.spotsRemaining <= 0;
        return (
          <button
            key={session.id}
            type="button"
            onClick={() => onSelect(session.id)}
            className={`w-full text-left p-4 rounded-xl border-2 transition-all cursor-pointer ${
              isSelected
                ? 'border-emerald-500 bg-emerald-500/5 ring-2 ring-emerald-500/20'
                : 'border-border hover:border-foreground/30'
            }`}
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="font-semibold text-foreground">
                  {formatDateRange(session.startDate, session.endDate)}
                </p>
                <div className="flex items-center gap-3 mt-1 text-sm text-muted-foreground">
                  <span className="inline-flex items-center gap-1">
                    <MapPin className="h-3.5 w-3.5" />
                    {session.location}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <UsersThree className="h-3.5 w-3.5" />
                    {isFull ? 'Full' : `${session.spotsRemaining}/${session.maxParticipants} spots left`}
                  </span>
                </div>
              </div>
              {isSelected && (
                <div className="w-5 h-5 bg-emerald-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              )}
            </div>
            {isFull && (
              <p className="mt-2 text-xs text-amber-600 dark:text-amber-400 font-medium">
                Session full — selecting this will add you to the waitlist
              </p>
            )}
          </button>
        );
      })}
    </div>
  );
}
