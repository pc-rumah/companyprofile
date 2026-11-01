"use client";

import React, { useEffect, useState } from "react";
import Badge from "../ui/Badge";
import { ArrowUpIcon, ArrowDownIcon } from "../icons";
import { createClient } from "@/lib/supabase/client";

interface EcommerceMetricsProps {
  dailyVisitors?: number | string;
  visitorsGrowth?: string;
  isVisitorsPositive?: boolean;
  exportVolume?: string;
  exportGrowth?: string;
  isExportPositive?: boolean;
}

export const EcommerceMetrics: React.FC<EcommerceMetricsProps> = ({
  dailyVisitors = 0,
  visitorsGrowth = "+0.0%",
  isVisitorsPositive = true,
  exportVolume = "1,248 MT",
  exportGrowth = "+8.2%",
  isExportPositive = true,
}) => {
  const [visitors, setVisitors] = useState<number | string>(dailyVisitors);

  useEffect(() => {
    setVisitors(dailyVisitors);
  }, [dailyVisitors]);

  // Subscribe to real-time visit updates from Supabase
  useEffect(() => {
    const supabase = createClient();
    const today = new Date().toISOString().split("T")[0];

    const channel = supabase
      .channel("daily_visits_realtime")
      .on(
        "postgres_changes",
        {
          event: "*",
          schema: "public",
          table: "daily_visits",
          filter: `date=eq.${today}`,
        },
        (payload: any) => {
          if (payload?.new && typeof payload.new.total_visits === "number") {
            setVisitors(payload.new.total_visits);
          }
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-6">
      {/* Metric 1: Total User Visitors per Day */}
      <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] md:p-6 shadow-theme-xs">
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-center size-12 bg-brand-50 text-brand-600 rounded-xl dark:bg-brand-500/15 dark:text-brand-400">
            <svg className="size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </div>
          <Badge color={isVisitorsPositive ? "success" : "error"}>
            {isVisitorsPositive ? (
              <ArrowUpIcon className="size-3" />
            ) : (
              <ArrowDownIcon className="size-3" />
            )}
            {visitorsGrowth}
          </Badge>
        </div>

        <div className="mt-4">
          <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
            Total User Visitors / Day
          </span>
          <h4 className="mt-1 font-bold text-gray-800 text-2xl dark:text-white">
            {typeof visitors === "number" ? visitors.toLocaleString() : visitors}
          </h4>
        </div>
      </div>

      {/* Metric 2: Export Volume */}
      <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] md:p-6 shadow-theme-xs">
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-center size-12 bg-brand-50 text-brand-600 rounded-xl dark:bg-brand-500/15 dark:text-brand-400">
            <svg className="size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
            </svg>
          </div>
          <Badge color={isExportPositive ? "success" : "error"}>
            {isExportPositive ? (
              <ArrowUpIcon className="size-3" />
            ) : (
              <ArrowDownIcon className="size-3" />
            )}
            {exportGrowth}
          </Badge>
        </div>

        <div className="mt-4">
          <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
            Export Volume (Tons)
          </span>
          <h4 className="mt-1 font-bold text-gray-800 text-2xl dark:text-white">
            {exportVolume}
          </h4>
        </div>
      </div>
    </div>
  );
};

export default EcommerceMetrics;

