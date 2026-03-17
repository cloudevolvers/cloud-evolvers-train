export interface ContactRow {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  phone: string | null;
  company: string | null;
  source: string;
  created_at: string;
  updated_at: string;
}

export interface TrainingSessionRow {
  id: string;
  course_slug: string;
  course_name: string;
  start_date: string;
  end_date: string;
  max_participants: number;
  location: string;
  status: string;
  price: number | null;
  created_at: string;
  updated_at: string;
}

export interface EnrollmentRow {
  id: string;
  contact_id: string;
  session_id: string;
  status: string;
  dietary_requirements: string | null;
  notes: string | null;
  created_at: string;
  updated_at: string;
}

export interface BookingEnv {
  PRICING_DB: D1Database;
  FORM_API_KEY: string;
  ADMIN_PASSWORD: string;
  EMAIL_TENANT_ID: string;
  EMAIL_CLIENT_ID: string;
  EMAIL_CLIENT_SECRET: string;
  EMAIL_SENDER_ADDRESS: string;
}
