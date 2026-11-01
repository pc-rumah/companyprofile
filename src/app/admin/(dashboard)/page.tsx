import React from "react";
import EcommerceMetrics from "@/components/admin/ecommerce/EcommerceMetrics";
import MonthlySalesChart from "@/components/admin/ecommerce/MonthlySalesChart";
import MonthlyTarget from "@/components/admin/ecommerce/MonthlyTarget";
import { createClient } from "@/lib/supabase/server";

export const metadata = {
  title: "Dashboard Overview | Castle Trading Admin",
};

export const dynamic = "force-dynamic";

export default async function AdminDashboardPage() {
  let todayCount = 0;
  let yesterdayCount = 0;
  let visitorsGrowth = "+0.0%";
  let isVisitorsPositive = true;

  try {
    const supabase = await createClient();
    const today = new Date().toISOString().split("T")[0];
    const yesterday = new Date(Date.now() - 86400000).toISOString().split("T")[0];

    const { data: visits } = await supabase
      .from("daily_visits")
      .select("date, total_visits")
      .in("date", [today, yesterday]);

    todayCount = visits?.find((v) => v.date === today)?.total_visits ?? 0;
    yesterdayCount = visits?.find((v) => v.date === yesterday)?.total_visits ?? 0;

    if (yesterdayCount > 0) {
      const diff = todayCount - yesterdayCount;
      const pct = Math.abs((diff / yesterdayCount) * 100).toFixed(1);
      visitorsGrowth = diff >= 0 ? `+${pct}%` : `-${pct}%`;
      isVisitorsPositive = diff >= 0;
    } else if (todayCount > 0) {
      visitorsGrowth = "+100%";
      isVisitorsPositive = true;
    }
  } catch (err) {
    console.error("Failed to load visitor metrics:", err);
  }

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-white">
            Operations & Export Dashboard
          </h1>
          <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mt-0.5">
            Real-time analytics and global distribution overview
          </p>
        </div>
      </div>

      {/* Top Grid: Metrics & Target */}
      <div className="grid grid-cols-12 gap-4 md:gap-6">
        <div className="col-span-12 space-y-6 xl:col-span-7">
          <EcommerceMetrics
            dailyVisitors={todayCount}
            visitorsGrowth={visitorsGrowth}
            isVisitorsPositive={isVisitorsPositive}
          />
          <MonthlySalesChart />
        </div>

        <div className="col-span-12 xl:col-span-5">
          <MonthlyTarget />
        </div>
      </div>
    </div>
  );
}

