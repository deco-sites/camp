import { createClient, SupabaseClient } from "supabase";

/*
import {
  SUPABASE_LIVE_ANON_KEY,
  SUPABASE_LIVE_ENDPOINT,
} from "$live/supabase.ts";
*/

const SUPABASE_LIVE_ENDPOINT = "https://ozksgdmyrqcxcwhnbepg.supabase.co";
const SUPABASE_LIVE_ANON_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im96a3NnZG15cnFjeGN3aG5iZXBnIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTY3MjM3NDYsImV4cCI6MTk3MjI5OTc0Nn0.HMdsG6NZlq6dvYFCK1_tuJh38TmsqLeN8H4OktTHt_M";

let client: SupabaseClient;

export interface Database {
  public: {
    Tables: {
      events: {
        Row: {
          _timestamp: string | null;
          api_key: string | null;
          doc_encoding: string | null;
          doc_host: string | null;
        };
      };
    };
  };
}

export function getSupabaseClient(accessToken?: string) {
  if (!client) {
    client = createClient<Database>(
      SUPABASE_LIVE_ENDPOINT,
      accessToken || SUPABASE_LIVE_ANON_KEY,
    );
  }

  return client;
}
