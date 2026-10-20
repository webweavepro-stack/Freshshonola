-- =====================================================================
-- FRESHSHONOLA MULTIVENTURES — SUPABASE DATABASE SCHEMA
-- PostgreSQL / Supabase SQL Migration Script
-- =====================================================================

-- 1. Enable UUID Extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- ---------------------------------------------------------------------
-- 2. ENUM TYPES
-- ---------------------------------------------------------------------
DO $$ BEGIN
  CREATE TYPE enquiry_status AS ENUM ('new', 'contacted', 'in_progress', 'completed', 'cancelled');
EXCEPTION
  WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
  CREATE TYPE service_category AS ENUM (
    'identity_documentation',
    'printing_office',
    'energy_solar',
    'corporate_legal',
    'fintech_pos'
  );
EXCEPTION
  WHEN duplicate_object THEN null;
END $$;

-- ---------------------------------------------------------------------
-- 3. SERVICES TABLE
-- ---------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.services (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  slug TEXT UNIQUE NOT NULL,
  title TEXT NOT NULL,
  category service_category NOT NULL,
  category_tag TEXT NOT NULL,
  short_description TEXT NOT NULL,
  full_description TEXT NOT NULL,
  cta_label TEXT NOT NULL,
  default_whatsapp_message TEXT NOT NULL,
  hero_image_url TEXT,
  potential_offerings JSONB DEFAULT '[]'::jsonb,
  is_active BOOLEAN DEFAULT true,
  display_order INT DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- ---------------------------------------------------------------------
-- 4. SERVICE REQUIREMENTS TABLE
-- ---------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.service_requirements (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  service_slug TEXT REFERENCES public.services(slug) ON DELETE CASCADE,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  is_mandatory BOOLEAN DEFAULT false,
  display_order INT DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- ---------------------------------------------------------------------
-- 5. SERVICE FAQS TABLE
-- ---------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.service_faqs (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  service_slug TEXT REFERENCES public.services(slug) ON DELETE CASCADE,
  question TEXT NOT NULL,
  answer TEXT NOT NULL,
  display_order INT DEFAULT 0,
  is_published BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- ---------------------------------------------------------------------
-- 6. CUSTOMER ENQUIRIES TABLE
-- ---------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.customer_enquiries (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  full_name TEXT NOT NULL,
  phone_number TEXT,
  service_slug TEXT REFERENCES public.services(slug) ON DELETE SET NULL,
  service_title TEXT NOT NULL,
  location TEXT,
  enquiry_details TEXT,
  custom_fields JSONB DEFAULT '{}'::jsonb,
  whatsapp_prefill_text TEXT,
  status enquiry_status DEFAULT 'new',
  internal_notes TEXT,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- ---------------------------------------------------------------------
-- 7. BUSINESS SETTINGS / METADATA TABLE
-- ---------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.business_settings (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  key TEXT UNIQUE NOT NULL,
  value JSONB NOT NULL,
  description TEXT,
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- ---------------------------------------------------------------------
-- 8. ROW LEVEL SECURITY (RLS) POLICIES
-- ---------------------------------------------------------------------

-- Enable RLS on all tables
ALTER TABLE public.services ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.service_requirements ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.service_faqs ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.customer_enquiries ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.business_settings ENABLE ROW LEVEL SECURITY;

-- SERVICES: Anyone can read active services; Authenticated staff can write
CREATE POLICY "Public can view active services"
  ON public.services
  FOR SELECT
  USING (is_active = true);

CREATE POLICY "Authenticated users can manage services"
  ON public.services
  FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- SERVICE REQUIREMENTS: Anyone can read; Authenticated staff can manage
CREATE POLICY "Public can view service requirements"
  ON public.service_requirements
  FOR SELECT
  USING (true);

CREATE POLICY "Authenticated users can manage service requirements"
  ON public.service_requirements
  FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- SERVICE FAQS: Anyone can read published FAQs; Authenticated staff can manage
CREATE POLICY "Public can view published FAQs"
  ON public.service_faqs
  FOR SELECT
  USING (is_published = true);

CREATE POLICY "Authenticated users can manage FAQs"
  ON public.service_faqs
  FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- CUSTOMER ENQUIRIES:
-- 1. Public can insert new enquiries (lead capture from website)
-- 2. Public CANNOT read or update enquiries (privacy protection!)
-- 3. Authenticated team members can read and update all enquiries
CREATE POLICY "Public can insert enquiries"
  ON public.customer_enquiries
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can view and update enquiries"
  ON public.customer_enquiries
  FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Authenticated users can update enquiry statuses"
  ON public.customer_enquiries
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- BUSINESS SETTINGS: Anyone can read; Authenticated staff can modify
CREATE POLICY "Public can read business settings"
  ON public.business_settings
  FOR SELECT
  USING (true);

CREATE POLICY "Authenticated users can update business settings"
  ON public.business_settings
  FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- ---------------------------------------------------------------------
-- 9. SEED INITIAL DATA (THE FIVE CORE SERVICES & SETTINGS)
-- ---------------------------------------------------------------------

INSERT INTO public.services (slug, title, category, category_tag, short_description, full_description, cta_label, default_whatsapp_message, display_order)
VALUES
  (
    'nin-services',
    'NIN Services',
    'identity_documentation',
    'Identity & Documentation',
    'Guidance and authorized assistance for National Identification Number enquiries, registration support, and updates.',
    'Providing clear information and enquiry support for the NIN-related services that Freshshonola Multiventures is authorized and equipped to offer.',
    'ENQUIRE ABOUT NIN SERVICES',
    'Hello Freshshonola Multiventures. I would like to enquire about your NIN services. Please send me the requirements, applicable fees, and next steps.',
    1
  ),
  (
    'computer-printing',
    'Computer and General Printing',
    'printing_office',
    'Business & Office Support',
    'Professional document typing, black-and-white & colour printing, photocopying, scanning, and laminating.',
    'Comprehensive document preparation and high-quality printing services tailored for students, professionals, business owners, and corporate teams.',
    'GET PRINTING ASSISTANCE',
    'Hello Freshshonola Multiventures. I need assistance with computer and general printing. Service required: Document Printing. Number of copies: 1. Please let me know the requirements and price.',
    2
  ),
  (
    'solar-installation-maintenance',
    'Solar Installation and Maintenance',
    'energy_solar',
    'Energy & Power Systems',
    'Custom residential and commercial solar installations, hybrid inverters, battery setups, and system maintenance.',
    'Providing reliable, clean, alternative power systems engineered for Nigerian homes, shops, and offices.',
    'REQUEST A SOLAR CONSULTATION',
    'Hello Freshshonola Multiventures. I am interested in your solar installation and maintenance services. Location: Nigeria. Service required: New Solar Installation. Please advise me on the requirements and next steps.',
    3
  ),
  (
    'cac-registration',
    'CAC Registration',
    'corporate_legal',
    'Corporate & Legal Documentation',
    'Guidance and professional facilitation for Corporate Affairs Commission business name and company registrations.',
    'Assisting Nigerian entrepreneurs and business owners through the Corporate Affairs Commission (CAC) registration process.',
    'START CAC REGISTRATION ENQUIRY',
    'Hello Freshshonola Multiventures. I would like to enquire about CAC registration. Registration type: Business Name Registration. Proposed business name: Not yet submitted. Please provide the requirements and next steps.',
    4
  ),
  (
    'moniepoint-pos',
    'Moniepoint POS Agent Services',
    'fintech_pos',
    'Fintech & Agency Banking',
    'Support for Moniepoint POS terminal onboarding, merchant enquiries, and agent support.',
    'Facilitating reliable merchant solutions and agency banking for Nigerian retailers, shop owners, and agents.',
    'ENQUIRE ABOUT MONIEPOINT POS',
    'Hello Freshshonola Multiventures. I would like to enquire about your Moniepoint POS agent services. Service required: POS Terminal Application. Business location: Nigeria. Please explain the current requirements and application process.',
    5
  )
ON CONFLICT (slug) DO NOTHING;

-- Seed Business Settings
INSERT INTO public.business_settings (key, value, description)
VALUES
  ('contact_info', '{"whatsapp_number": "+2347068465334", "display_number": "+234 706 846 5334", "country": "Nigeria", "operating_hours": "Monday - Saturday: 8:00 AM - 6:00 PM WAT"}'::jsonb, 'Official contact channels and hours'),
  ('announcements', '{"active": false, "message": ""}'::jsonb, 'Site-wide announcement banner')
ON CONFLICT (key) DO NOTHING;

-- ---------------------------------------------------------------------
-- 10. HELPER TRIGGERS FOR UPDATED_AT TIMESTAMP (Non-destructive)
-- ---------------------------------------------------------------------
CREATE OR REPLACE FUNCTION public.handle_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_trigger WHERE tgname = 'set_updated_at_services'
  ) THEN
    CREATE TRIGGER set_updated_at_services
      BEFORE UPDATE ON public.services
      FOR EACH ROW EXECUTE PROCEDURE public.handle_updated_at();
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM pg_trigger WHERE tgname = 'set_updated_at_enquiries'
  ) THEN
    CREATE TRIGGER set_updated_at_enquiries
      BEFORE UPDATE ON public.customer_enquiries
      FOR EACH ROW EXECUTE PROCEDURE public.handle_updated_at();
  END IF;
END $$;
