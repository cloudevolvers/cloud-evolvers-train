-- migrations/0002-seed-sessions.sql
-- Seed September 2026 training sessions for AZ-104 and AZ-305

INSERT OR IGNORE INTO training_sessions (id, course_slug, course_name, start_date, end_date, max_participants, location, status, price)
VALUES
  ('sess-az104-sep2026', 'azure-administrator', 'Azure Administrator Associate (AZ-104)', '2026-09-15', '2026-09-17', 15, 'Amsterdam', 'open', 179500),
  ('sess-az305-sep2026', 'azure-solutions-architect', 'Azure Solutions Architect Expert (AZ-305)', '2026-09-22', '2026-09-25', 15, 'Amsterdam', 'open', 179500);
