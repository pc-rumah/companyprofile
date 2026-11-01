/**
 * Server-only data fetchers for The Company content.
 * This file must only be imported from Server Components or API Routes.
 */
import { createClient } from "@/lib/supabase/server";
import type { CompanyImage, CompanyVideo } from "./the-company";
import { SEED_IMAGES, SEED_VIDEOS } from "./the-company";

export async function getTheCompanyImages(): Promise<CompanyImage[]> {
  try {
    const supabase = await createClient();
    const { data, error } = await supabase
      .from("the_company_images")
      .select("*")
      .order("slot");

    if (error) {
      console.error("Error fetching company images:", error.message);
      return SEED_IMAGES as CompanyImage[];
    }

    return (data as CompanyImage[]) ?? [];
  } catch {
    // Fallback to seed data if DB tables are not set up yet
    return SEED_IMAGES as CompanyImage[];
  }
}

export async function getTheCompanyVideos(): Promise<CompanyVideo[]> {
  try {
    const supabase = await createClient();
    const { data, error } = await supabase
      .from("the_company_videos")
      .select("*")
      .order("sort_order");

    if (error) {
      console.error("Error fetching company videos:", error.message);
      return SEED_VIDEOS as CompanyVideo[];
    }

    return (data as CompanyVideo[]) ?? [];
  } catch {
    return SEED_VIDEOS as CompanyVideo[];
  }
}

