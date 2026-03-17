-- migrations/0003-seed-fundamentals-sessions.sql
-- Seed September 2026 fundamentals training sessions: AZ-900, AI-900, SC-900

INSERT OR IGNORE INTO training_sessions (id, course_slug, course_name, start_date, end_date, max_participants, location, status, price)
VALUES
  ('sess-az900-sep2026', 'azure-fundamentals', 'Azure Fundamentals (AZ-900)', '2026-09-08', '2026-09-09', 15, 'Amsterdam', 'open', 99500),
  ('sess-ai900-sep2026', 'azure-ai-fundamentals', 'Azure AI Fundamentals (AI-900)', '2026-09-10', '2026-09-11', 15, 'Amsterdam', 'open', 99500),
  ('sess-sc900-sep2026', 'security-compliance-identity-fundamentals', 'Security, Compliance & Identity Fundamentals (SC-900)', '2026-09-29', '2026-09-30', 15, 'Amsterdam', 'open', 99500);
