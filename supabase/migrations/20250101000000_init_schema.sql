-- Supabase / PostgreSQL Schema Migration for Asma Parnianfard Website
-- Tables: admin_profiles, enquiries, enquiry_attachments, portfolio_items, blog_posts, testimonials, services, site_settings

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- 1. Admin Profiles
CREATE TABLE IF NOT EXISTS admin_profiles (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  full_name TEXT NOT NULL DEFAULT 'Asma Parnianfard',
  email TEXT NOT NULL UNIQUE,
  role TEXT NOT NULL DEFAULT 'admin',
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- 2. Enquiries (Quotes and General inquiries)
CREATE TABLE IF NOT EXISTS enquiries (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  tracking_id TEXT NOT NULL UNIQUE,
  type TEXT NOT NULL CHECK (type IN ('quote', 'general')),
  full_name TEXT NOT NULL,
  email TEXT NOT NULL,
  organization TEXT,
  service TEXT NOT NULL,
  source_language TEXT DEFAULT 'English',
  target_language TEXT DEFAULT 'Persian',
  document_type TEXT,
  word_count INTEGER DEFAULT 0,
  deadline DATE,
  urgency TEXT DEFAULT 'standard' CHECK (urgency IN ('standard', 'urgent', 'enterprise')),
  message TEXT NOT NULL,
  consent BOOLEAN NOT NULL DEFAULT true,
  status TEXT NOT NULL DEFAULT 'New' CHECK (status IN ('New', 'In Review', 'Quoted', 'Accepted', 'Completed', 'Closed')),
  internal_notes TEXT,
  quoted_amount NUMERIC(10, 2),
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- 3. Enquiry Attachments (Stored in Private Storage)
CREATE TABLE IF NOT EXISTS enquiry_attachments (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  enquiry_id UUID REFERENCES enquiries(id) ON DELETE CASCADE,
  storage_path TEXT NOT NULL,
  original_filename TEXT NOT NULL,
  file_size_bytes BIGINT NOT NULL,
  mime_type TEXT NOT NULL,
  uploaded_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- 4. Portfolio Items
CREATE TABLE IF NOT EXISTS portfolio_items (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  slug TEXT NOT NULL UNIQUE,
  title TEXT NOT NULL,
  title_fa TEXT NOT NULL,
  category TEXT NOT NULL,
  category_label TEXT NOT NULL,
  description TEXT NOT NULL,
  description_fa TEXT NOT NULL,
  client_industry TEXT NOT NULL,
  source_sample TEXT NOT NULL,
  target_sample TEXT NOT NULL,
  terminology_notes JSONB DEFAULT '[]'::jsonb,
  turnaround_days TEXT,
  word_count_approx INTEGER,
  image_url TEXT,
  featured BOOLEAN DEFAULT false,
  published BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- 5. Blog Posts
CREATE TABLE IF NOT EXISTS blog_posts (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  slug TEXT NOT NULL UNIQUE,
  title TEXT NOT NULL,
  title_fa TEXT NOT NULL,
  category TEXT NOT NULL,
  excerpt TEXT NOT NULL,
  excerpt_fa TEXT NOT NULL,
  content TEXT NOT NULL,
  content_fa TEXT NOT NULL,
  read_time TEXT DEFAULT '5 min read',
  cover_image TEXT,
  tags TEXT[] DEFAULT '{}',
  published BOOLEAN DEFAULT true,
  published_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- 6. Services Content
CREATE TABLE IF NOT EXISTS services (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  slug TEXT NOT NULL UNIQUE,
  name TEXT NOT NULL,
  name_fa TEXT NOT NULL,
  category TEXT NOT NULL,
  short_description TEXT NOT NULL,
  full_description TEXT NOT NULL,
  core_documents TEXT[],
  client_benefits TEXT[],
  standard_rate_note TEXT,
  published BOOLEAN DEFAULT true
);

-- 7. Site Settings
CREATE TABLE IF NOT EXISTS site_settings (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  contact_email TEXT NOT NULL DEFAULT 'contact@asmaparnianfard.com',
  linkedin_url TEXT NOT NULL DEFAULT 'https://www.linkedin.com/in/asma-parnianfard-a11b69433',
  location TEXT NOT NULL DEFAULT 'Mashhad, Razavi Khorasan, Iran',
  working_hours TEXT NOT NULL,
  turnaround_rate_standard TEXT NOT NULL,
  turnaround_rate_urgent TEXT NOT NULL,
  daily_capacity_words INTEGER DEFAULT 2500,
  nda_guarantee_active BOOLEAN DEFAULT true,
  quote_response_time_hours INTEGER DEFAULT 4,
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Enable Row Level Security (RLS)
ALTER TABLE admin_profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE enquiries ENABLE ROW LEVEL SECURITY;
ALTER TABLE enquiry_attachments ENABLE ROW LEVEL SECURITY;
ALTER TABLE portfolio_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE services ENABLE ROW LEVEL SECURITY;
ALTER TABLE site_settings ENABLE ROW LEVEL SECURITY;

-- Public can insert enquiries and view published items
CREATE POLICY "Public can insert enquiries" ON enquiries FOR INSERT WITH CHECK (true);
CREATE POLICY "Public can view published portfolio" ON portfolio_items FOR SELECT USING (published = true);
CREATE POLICY "Public can view published blog" ON blog_posts FOR SELECT USING (published = true);
CREATE POLICY "Public can view published services" ON services FOR SELECT USING (published = true);
CREATE POLICY "Public can view site settings" ON site_settings FOR SELECT USING (true);

-- Admins have full access
CREATE POLICY "Admins full access enquiries" ON enquiries TO authenticated USING (true) WITH CHECK (true);
CREATE POLICY "Admins full access attachments" ON enquiry_attachments TO authenticated USING (true) WITH CHECK (true);
CREATE POLICY "Admins full access portfolio" ON portfolio_items TO authenticated USING (true) WITH CHECK (true);
CREATE POLICY "Admins full access blog" ON blog_posts TO authenticated USING (true) WITH CHECK (true);
