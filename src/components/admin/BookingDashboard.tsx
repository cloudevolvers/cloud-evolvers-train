import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import {
  CalendarBlank,
  Users,
  Envelope,
  Database,
  CheckCircle,
  WarningCircle,
  XCircle,
} from '@phosphor-icons/react';

interface Session {
  id: string;
  courseSlug: string;
  courseName: string;
  startDate: string;
  endDate: string;
  location: string;
  maxParticipants: number;
  status: string;
  confirmed_count: number;
  waitlisted_count: number;
}

interface Enrollment {
  id: string;
  status: string;
  contact?: { name: string; email: string; company?: string };
  session?: { courseName: string; startDate: string; endDate: string };
}

interface Contact {
  id: string;
  name: string;
  email: string;
  company?: string;
  source?: string;
  enrollment_count: number;
  created_at: string;
}

interface Creds { apiKey: string; adminPassword: string; }

function apiFetch(path: string, creds: Creds, options: RequestInit = {}) {
  return fetch(path, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': creds.apiKey,
      'x-admin-password': creds.adminPassword,
      ...((options.headers as Record<string, string>) || {}),
    },
  });
}

// --- Sessions Tab ---
function SessionsTab({ creds, sessions, onRefresh }: { creds: Creds; sessions: Session[]; onRefresh: () => void }) {
  const [form, setForm] = useState({ courseSlug: '', courseName: '', startDate: '', endDate: '', location: '', maxParticipants: '15' });
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');

  const handleCreate = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setError('');
    try {
      const res = await apiFetch('/api/admin/training-sessions', creds, {
        method: 'POST',
        body: JSON.stringify({ ...form, maxParticipants: parseInt(form.maxParticipants) || 15 }),
      });
      if (!res.ok) throw new Error(await res.text());
      setForm({ courseSlug: '', courseName: '', startDate: '', endDate: '', location: '', maxParticipants: '15' });
      onRefresh();
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Failed to create session');
    } finally {
      setSaving(false);
    }
  };

  const handleCancel = async (id: string) => {
    try {
      await apiFetch(`/api/admin/training-sessions/${id}`, creds, {
        method: 'PUT',
        body: JSON.stringify({ status: 'cancelled' }),
      });
      onRefresh();
    } catch {
      // silently fail — UI reflects unchanged state
    }
  };

  const statusBadge = (s: Session) => {
    if (s.status === 'cancelled') return <Badge className="bg-red-100 text-red-700 border-red-200">Cancelled</Badge>;
    if (s.confirmed_count >= s.maxParticipants) return <Badge className="bg-amber-100 text-amber-700 border-amber-200">Full</Badge>;
    return <Badge className="bg-green-100 text-green-700 border-green-200">Open</Badge>;
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-base flex items-center gap-2">
            <CalendarBlank className="h-4 w-4" />New Session
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleCreate} className="grid grid-cols-2 md:grid-cols-3 gap-3">
            <Input placeholder="Course slug" value={form.courseSlug} onChange={e => setForm(p => ({ ...p, courseSlug: e.target.value }))} required />
            <Input placeholder="Course name" value={form.courseName} onChange={e => setForm(p => ({ ...p, courseName: e.target.value }))} required />
            <Input placeholder="Location" value={form.location} onChange={e => setForm(p => ({ ...p, location: e.target.value }))} required />
            <Input type="date" value={form.startDate} onChange={e => setForm(p => ({ ...p, startDate: e.target.value }))} required />
            <Input type="date" value={form.endDate} onChange={e => setForm(p => ({ ...p, endDate: e.target.value }))} required />
            <Input type="number" placeholder="Max participants (15)" value={form.maxParticipants} onChange={e => setForm(p => ({ ...p, maxParticipants: e.target.value }))} min="1" />
            <div className="col-span-2 md:col-span-3 flex items-center gap-3">
              <Button type="submit" disabled={saving} size="sm">{saving ? 'Creating...' : 'Create Session'}</Button>
              {error && <span className="text-sm text-red-600">{error}</span>}
            </div>
          </form>
        </CardContent>
      </Card>

      <Card>
        <CardHeader><CardTitle className="text-base">Sessions ({sessions.length})</CardTitle></CardHeader>
        <CardContent>
          <table className="w-full text-sm">
            <thead><tr className="border-b text-muted-foreground">
              <th className="text-left py-2 pr-4">Course</th><th className="text-left py-2 pr-4">Dates</th>
              <th className="text-left py-2 pr-4">Location</th><th className="text-left py-2 pr-4">Enrolled</th>
              <th className="text-left py-2 pr-4">Status</th><th className="py-2" />
            </tr></thead>
            <tbody>
              {sessions.map(s => (
                <tr key={s.id} className="border-b hover:bg-muted/30">
                  <td className="py-2 pr-4 font-medium">{s.courseName}</td>
                  <td className="py-2 pr-4 whitespace-nowrap">{s.startDate} — {s.endDate}</td>
                  <td className="py-2 pr-4">{s.location}</td>
                  <td className="py-2 pr-4">{s.confirmed_count}/{s.maxParticipants}{s.waitlisted_count > 0 && <span className="text-amber-600 ml-1">+{s.waitlisted_count}wl</span>}</td>
                  <td className="py-2 pr-4">{statusBadge(s)}</td>
                  <td className="py-2">{s.status !== 'cancelled' && (
                    <Button size="sm" variant="ghost" className="text-red-600 hover:text-red-700 h-7 px-2" onClick={() => handleCancel(s.id)}>
                      <XCircle className="h-3.5 w-3.5 mr-1" />Cancel
                    </Button>
                  )}</td>
                </tr>
              ))}
              {sessions.length === 0 && <tr><td colSpan={6} className="py-6 text-center text-muted-foreground">No sessions found.</td></tr>}
            </tbody>
          </table>
        </CardContent>
      </Card>
    </div>
  );
}

// --- Enrollments Tab ---
function EnrollmentsTab({ creds, sessions }: { creds: Creds; sessions: Session[] }) {
  const [selectedSession, setSelectedSession] = useState('');
  const [enrollments, setEnrollments] = useState<Enrollment[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!selectedSession) return;
    setLoading(true);
    apiFetch(`/api/admin/enrollments?session=${selectedSession}`, creds)
      .then(r => r.json())
      .then(d => setEnrollments(d.enrollments || []))
      .catch(() => setEnrollments([]))
      .finally(() => setLoading(false));
  }, [selectedSession]);

  const handleStatus = async (id: string, status: string) => {
    await apiFetch(`/api/admin/enrollments/${id}`, creds, { method: 'PATCH', body: JSON.stringify({ status }) });
    setEnrollments(prev => prev.map(e => e.id === id ? { ...e, status } : e));
  };

  const statusBadge = (status: string) => {
    if (status === 'confirmed') return <Badge className="bg-green-100 text-green-700 border-green-200">Confirmed</Badge>;
    if (status === 'waitlisted') return <Badge className="bg-amber-100 text-amber-700 border-amber-200">Waitlisted</Badge>;
    return <Badge className="bg-red-100 text-red-700 border-red-200">Cancelled</Badge>;
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-base flex items-center gap-2">
          <Users className="h-4 w-4" />Enrollments
        </CardTitle>
        <div className="w-72 mt-2">
          <Select onValueChange={setSelectedSession} value={selectedSession}>
            <SelectTrigger><SelectValue placeholder="Filter by session..." /></SelectTrigger>
            <SelectContent>
              {sessions.map(s => <SelectItem key={s.id} value={s.id}>{s.courseName} ({s.startDate})</SelectItem>)}
            </SelectContent>
          </Select>
        </div>
      </CardHeader>
      <CardContent>
        {loading ? <p className="text-sm text-muted-foreground py-4">Loading...</p> : (
          <table className="w-full text-sm">
            <thead><tr className="border-b text-muted-foreground">
              <th className="text-left py-2 pr-4">Name</th><th className="text-left py-2 pr-4">Email</th>
              <th className="text-left py-2 pr-4">Company</th><th className="text-left py-2 pr-4">Course</th>
              <th className="text-left py-2 pr-4">Dates</th><th className="text-left py-2 pr-4">Status</th>
              <th className="py-2">Change</th>
            </tr></thead>
            <tbody>
              {enrollments.map(e => (
                <tr key={e.id} className="border-b hover:bg-muted/30">
                  <td className="py-2 pr-4">{e.contact?.name ?? '—'}</td>
                  <td className="py-2 pr-4">{e.contact?.email ?? '—'}</td>
                  <td className="py-2 pr-4">{e.contact?.company ?? '—'}</td>
                  <td className="py-2 pr-4">{e.session?.courseName ?? '—'}</td>
                  <td className="py-2 pr-4 whitespace-nowrap">{e.session ? `${e.session.startDate} — ${e.session.endDate}` : '—'}</td>
                  <td className="py-2 pr-4">{statusBadge(e.status)}</td>
                  <td className="py-2">
                    <Select onValueChange={v => handleStatus(e.id, v)} value={e.status}>
                      <SelectTrigger className="h-7 w-32 text-xs"><SelectValue /></SelectTrigger>
                      <SelectContent>
                        <SelectItem value="confirmed">Confirmed</SelectItem>
                        <SelectItem value="waitlisted">Waitlisted</SelectItem>
                        <SelectItem value="cancelled">Cancelled</SelectItem>
                      </SelectContent>
                    </Select>
                  </td>
                </tr>
              ))}
              {enrollments.length === 0 && !loading && <tr><td colSpan={7} className="py-6 text-center text-muted-foreground">
                {selectedSession ? 'No enrollments for this session.' : 'Select a session to view enrollments.'}
              </td></tr>}
            </tbody>
          </table>
        )}
      </CardContent>
    </Card>
  );
}

// --- Contacts Tab ---
function ContactsTab({ creds }: { creds: Creds }) {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    apiFetch('/api/admin/contacts', creds)
      .then(r => r.json())
      .then(d => setContacts(d.contacts || []))
      .catch(() => setContacts([]))
      .finally(() => setLoading(false));
  }, []);

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-base flex items-center gap-2">
          <Envelope className="h-4 w-4" />Contacts ({contacts.length})
        </CardTitle>
      </CardHeader>
      <CardContent>
        {loading ? <p className="text-sm text-muted-foreground py-4">Loading...</p> : (
          <table className="w-full text-sm">
            <thead><tr className="border-b text-muted-foreground">
              <th className="text-left py-2 pr-4">Name</th><th className="text-left py-2 pr-4">Email</th>
              <th className="text-left py-2 pr-4">Company</th><th className="text-left py-2 pr-4">Source</th>
              <th className="text-left py-2 pr-4">Enrollments</th><th className="text-left py-2">Created</th>
            </tr></thead>
            <tbody>
              {contacts.map(c => (
                <tr key={c.id} className="border-b hover:bg-muted/30">
                  <td className="py-2 pr-4 font-medium">{c.name}</td>
                  <td className="py-2 pr-4">{c.email}</td>
                  <td className="py-2 pr-4">{c.company ?? '—'}</td>
                  <td className="py-2 pr-4">{c.source ?? '—'}</td>
                  <td className="py-2 pr-4">{c.enrollment_count}</td>
                  <td className="py-2">{new Date(c.created_at).toLocaleDateString()}</td>
                </tr>
              ))}
              {contacts.length === 0 && <tr><td colSpan={6} className="py-6 text-center text-muted-foreground">No contacts found.</td></tr>}
            </tbody>
          </table>
        )}
      </CardContent>
    </Card>
  );
}

// --- Main Dashboard ---
export default function BookingDashboard() {
  const [apiKey, setApiKey] = useState('');
  const [adminPassword, setAdminPassword] = useState('');
  const [creds, setCreds] = useState<Creds | null>(null);
  const [connecting, setConnecting] = useState(false);
  const [authError, setAuthError] = useState('');
  const [sessions, setSessions] = useState<Session[]>([]);
  const [loadingSessions, setLoadingSessions] = useState(false);

  const fetchSessions = async (c: Creds) => {
    setLoadingSessions(true);
    try {
      const res = await apiFetch('/api/admin/training-sessions', c);
      const data = await res.json();
      setSessions(data.sessions || []);
    } catch {
      setSessions([]);
    } finally {
      setLoadingSessions(false);
    }
  };

  const handleConnect = async (e: React.FormEvent) => {
    e.preventDefault();
    setConnecting(true);
    setAuthError('');
    try {
      const res = await apiFetch('/api/admin/training-sessions', { apiKey, adminPassword });
      if (res.status === 401) {
        setAuthError('Invalid credentials. Check your API key and admin password.');
        return;
      }
      if (!res.ok) {
        setAuthError('Connection failed. Please try again.');
        return;
      }
      const c: Creds = { apiKey, adminPassword };
      const data = await res.json();
      setSessions(data.sessions || []);
      setCreds(c);
    } catch {
      setAuthError('Unable to reach the API. Check your connection.');
    } finally {
      setConnecting(false);
    }
  };

  if (!creds) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-900/20 to-indigo-900/20 flex items-center justify-center">
        <Card className="w-full max-w-md mx-4">
          <CardHeader className="text-center">
            <CardTitle className="flex items-center justify-center gap-2 text-2xl">
              <Database className="h-6 w-6 text-primary" />
              Booking Admin
            </CardTitle>
            <p className="text-muted-foreground text-sm">Enter your credentials to access the booking dashboard</p>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleConnect} className="space-y-3">
              <Input placeholder="API Key" value={apiKey} onChange={e => setApiKey(e.target.value)} required autoFocus />
              <Input type="password" placeholder="Admin Password" value={adminPassword} onChange={e => setAdminPassword(e.target.value)} required />
              <Button type="submit" className="w-full" disabled={connecting || !apiKey || !adminPassword}>
                {connecting ? 'Connecting...' : 'Connect'}
              </Button>
              {authError && (
                <div className="flex items-center gap-2 p-3 bg-red-50 border border-red-200 rounded-md text-red-700 text-sm">
                  <WarningCircle className="h-4 w-4 shrink-0" />{authError}
                </div>
              )}
            </form>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900/20 to-indigo-900/20">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold flex items-center gap-3">
              <Database className="h-7 w-7 text-primary" />Booking Dashboard
            </h1>
            <p className="text-muted-foreground text-sm mt-1">Manage training sessions, enrollments, and contacts</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5 text-sm text-green-600">
              <CheckCircle className="h-4 w-4" />Connected
            </div>
            <Button variant="outline" size="sm" onClick={() => fetchSessions(creds)} disabled={loadingSessions}>
              {loadingSessions ? 'Refreshing...' : 'Refresh'}
            </Button>
            <Button variant="ghost" size="sm" onClick={() => setCreds(null)}>Disconnect</Button>
          </div>
        </div>

        <Tabs defaultValue="sessions">
          <TabsList className="mb-6">
            <TabsTrigger value="sessions" className="flex items-center gap-1.5">
              <CalendarBlank className="h-4 w-4" />Sessions
            </TabsTrigger>
            <TabsTrigger value="enrollments" className="flex items-center gap-1.5">
              <Users className="h-4 w-4" />Enrollments
            </TabsTrigger>
            <TabsTrigger value="contacts" className="flex items-center gap-1.5">
              <Envelope className="h-4 w-4" />Contacts
            </TabsTrigger>
          </TabsList>
          <TabsContent value="sessions">
            <SessionsTab creds={creds} sessions={sessions} onRefresh={() => fetchSessions(creds)} />
          </TabsContent>
          <TabsContent value="enrollments">
            <EnrollmentsTab creds={creds} sessions={sessions} />
          </TabsContent>
          <TabsContent value="contacts">
            <ContactsTab creds={creds} />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
