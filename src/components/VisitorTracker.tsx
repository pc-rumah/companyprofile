"use client";

import { useEffect } from "react";
import { createClient } from "@/lib/supabase/client";

export default function VisitorTracker() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    // Daily session key so multiple clicks within the same session don't inflate counts
    const today = new Date().toISOString().split("T")[0];
    const sessionKey = `castle_visited_${today}`;

    if (!sessionStorage.getItem(sessionKey)) {
      sessionStorage.setItem(sessionKey, "1");

      const recordVisit = async () => {
        try {
          const supabase = createClient();
          const { error } = await supabase.rpc("increment_daily_visit");
          if (error) {
            console.warn("[VisitorTracker] Could not record visit:", error.message);
          }
        } catch (err) {
          console.warn("[VisitorTracker] Unexpected error:", err);
        }
      };

      recordVisit();
    }
  }, []);

  return null;
}
