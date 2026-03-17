-- migrations/0001-booking-tables.sql
-- Training Booking System tables for cloud-evolvers-pricing D1 database

CREATE TABLE IF NOT EXISTS contacts (
  id TEXT PRIMARY KEY,
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  email TEXT NOT NULL UNIQUE,
  phone TEXT,
  company TEXT,
  source TEXT NOT NULL DEFAULT 'website_booking',
  created_at TEXT NOT NULL DEFAULT (datetime('now')),
  updated_at TEXT NOT NULL DEFAULT (datetime('now'))
);

CREATE TABLE IF NOT EXISTS training_sessions (
  id TEXT PRIMARY KEY,
  course_slug TEXT NOT NULL,
  course_name TEXT NOT NULL,
  start_date TEXT NOT NULL,
  end_date TEXT NOT NULL,
  max_participants INTEGER NOT NULL DEFAULT 15,
  location TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'open',
  price INTEGER,
  created_at TEXT NOT NULL DEFAULT (datetime('now')),
  updated_at TEXT NOT NULL DEFAULT (datetime('now'))
);

CREATE TABLE IF NOT EXISTS enrollments (
  id TEXT PRIMARY KEY,
  contact_id TEXT NOT NULL REFERENCES contacts(id),
  session_id TEXT NOT NULL REFERENCES training_sessions(id),
  status TEXT NOT NULL DEFAULT 'confirmed',
  dietary_requirements TEXT,
  notes TEXT,
  created_at TEXT NOT NULL DEFAULT (datetime('now')),
  updated_at TEXT NOT NULL DEFAULT (datetime('now')),
  UNIQUE(contact_id, session_id)
);

CREATE INDEX IF NOT EXISTS idx_contacts_email ON contacts(email);
CREATE INDEX IF NOT EXISTS idx_training_sessions_course ON training_sessions(course_slug);
CREATE INDEX IF NOT EXISTS idx_training_sessions_status ON training_sessions(status);
CREATE INDEX IF NOT EXISTS idx_enrollments_session ON enrollments(session_id);
CREATE INDEX IF NOT EXISTS idx_enrollments_contact ON enrollments(contact_id);

-- Auto-update updated_at on modifications
CREATE TRIGGER IF NOT EXISTS trg_contacts_updated_at
  AFTER UPDATE ON contacts
  BEGIN UPDATE contacts SET updated_at = datetime('now') WHERE id = NEW.id; END;

CREATE TRIGGER IF NOT EXISTS trg_training_sessions_updated_at
  AFTER UPDATE ON training_sessions
  BEGIN UPDATE training_sessions SET updated_at = datetime('now') WHERE id = NEW.id; END;

CREATE TRIGGER IF NOT EXISTS trg_enrollments_updated_at
  AFTER UPDATE ON enrollments
  BEGIN UPDATE enrollments SET updated_at = datetime('now') WHERE id = NEW.id; END;
