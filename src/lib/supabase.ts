/**
 * Supabase Client Configuration & Integration for Freshshonola Multiventures
 */

const rawUrl = import.meta.env.VITE_SUPABASE_URL || 'https://qbokzgdiaanzqerjmxyv.supabase.co';
export const SUPABASE_URL = rawUrl.replace(/\/rest\/v1\/?$/, '').replace(/\/$/, '');
export const SUPABASE_ANON_KEY =
  import.meta.env.VITE_SUPABASE_ANON_KEY ||
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFib2t6Z2RpYWFuenFlcmpteHl2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTI0NDE3NzEsImV4cCI6MjEwODAxNzc3MX0.GndtdijfviH3nSy120J3cW7IJK7ErlWCBA9s-Evq6B4';

export const isSupabaseConfigured = Boolean(SUPABASE_URL && SUPABASE_ANON_KEY);

export interface CustomerEnquiryPayload {
  fullName: string;
  phoneNumber?: string;
  serviceTitle: string;
  serviceSlug?: string;
  location?: string;
  details?: string;
  customFields?: Record<string, string>;
  whatsappPrefillText?: string;
}

/**
 * Logs customer enquiries directly into Supabase 'customer_enquiries' table
 * via Supabase PostgREST API using the anonymous key.
 * Respects RLS insert policy.
 */
export async function logEnquiryToSupabase(payload: CustomerEnquiryPayload): Promise<{
  success: boolean;
  error?: string;
}> {
  if (!isSupabaseConfigured) {
    return { success: false, error: 'Supabase credentials not configured' };
  }

  try {
    const response = await fetch(`${SUPABASE_URL}/rest/v1/customer_enquiries`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        apikey: SUPABASE_ANON_KEY,
        Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
        Prefer: 'return=minimal'
      },
      body: JSON.stringify({
        full_name: payload.fullName,
        phone_number: payload.phoneNumber?.trim() || null,
        service_title: payload.serviceTitle,
        service_slug: payload.serviceSlug || null,
        location: payload.location?.trim() || null,
        enquiry_details: payload.details?.trim() || null,
        custom_fields: payload.customFields || {},
        whatsapp_prefill_text: payload.whatsappPrefillText || null,
        status: 'new'
      })
    });

    if (!response.ok) {
      const errText = await response.text();
      console.warn('Supabase enquiry recording warning:', response.status, errText);
      return { success: false, error: errText };
    }

    return { success: true };
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Network error';
    console.warn('Supabase network dispatch error:', message);
    return { success: false, error: message };
  }
}

/**
 * Health check to verify connection to Supabase database.
 */
export async function testSupabaseConnection(): Promise<{
  connected: boolean;
  tableReady: boolean;
  message: string;
}> {
  if (!isSupabaseConfigured) {
    return {
      connected: false,
      tableReady: false,
      message: 'Supabase credentials are not configured.'
    };
  }

  try {
    // 1. Verify API Key and Project connectivity
    const rootRes = await fetch(`${SUPABASE_URL}/rest/v1/`, {
      method: 'GET',
      headers: {
        apikey: SUPABASE_ANON_KEY,
        Authorization: `Bearer ${SUPABASE_ANON_KEY}`
      }
    });

    if (!rootRes.ok) {
      return {
        connected: false,
        tableReady: false,
        message: `Connection failed with status ${rootRes.status}. Check project URL & anon key.`
      };
    }

    // 2. Check if customer_enquiries table is provisioned
    const tableRes = await fetch(`${SUPABASE_URL}/rest/v1/customer_enquiries?select=count`, {
      method: 'HEAD',
      headers: {
        apikey: SUPABASE_ANON_KEY,
        Authorization: `Bearer ${SUPABASE_ANON_KEY}`
      }
    });

    if (tableRes.ok) {
      return {
        connected: true,
        tableReady: true,
        message: 'Successfully connected to Supabase and customer_enquiries table is active!'
      };
    } else {
      return {
        connected: true,
        tableReady: false,
        message: 'Connected to Supabase project. Table "customer_enquiries" is pending creation (run supabase/schema.sql in SQL Editor).'
      };
    }
  } catch (err: unknown) {
    const errorMsg = err instanceof Error ? err.message : 'Network error';
    return {
      connected: false,
      tableReady: false,
      message: `Network error connecting to Supabase: ${errorMsg}`
    };
  }
}

