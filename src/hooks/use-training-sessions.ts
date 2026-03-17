import { useState, useEffect } from 'react';

export interface TrainingSession {
  id: string;
  courseSlug: string;
  courseName: string;
  startDate: string;
  endDate: string;
  maxParticipants: number;
  location: string;
  status: string;
  price: number | null;
  spotsRemaining: number;
}

export function useTrainingSessions(courseSlug?: string) {
  const [sessions, setSessions] = useState<TrainingSession[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!courseSlug) {
      setSessions([]);
      setLoading(false);
      return;
    }

    const fetchSessions = async () => {
      try {
        setLoading(true);
        const res = await fetch(`/api/training-sessions?course=${encodeURIComponent(courseSlug)}`);
        if (!res.ok) throw new Error('Failed to fetch sessions');
        const data = await res.json();
        setSessions(data.sessions || []);
      } catch (err) {
        console.error('Error fetching sessions:', err);
        setError(err instanceof Error ? err.message : 'Unknown error');
        setSessions([]);
      } finally {
        setLoading(false);
      }
    };

    fetchSessions();
  }, [courseSlug]);

  const refetch = () => {
    if (!courseSlug) return;
    setLoading(true);
    fetch(`/api/training-sessions?course=${encodeURIComponent(courseSlug)}`)
      .then(res => res.json())
      .then(data => setSessions(data.sessions || []))
      .catch(() => setSessions([]))
      .finally(() => setLoading(false));
  };

  return { sessions, loading, error, refetch };
}
