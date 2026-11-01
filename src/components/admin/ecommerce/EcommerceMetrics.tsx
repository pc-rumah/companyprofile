"use client";

import React from "react";
import Badge from "../ui/Badge";
import { ArrowUpIcon, ArrowDownIcon } from "../icons";

export const EcommerceMetrics: React.FC = () => {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-6">
      {/* Metric 1 */}
      <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] md:p-6 shadow-theme-xs">
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-center size-12 bg-brand-50 text-brand-600 rounded-xl dark:bg-brand-500/15 dark:text-brand-400">
            <svg className="size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </div>
          <Badge color="success">
            <ArrowUpIcon className="size-3" />
            +12.4%
          </Badge>
        </div>

        <div className="mt-4">
          <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
            Total Inquiries & Leads
          </span>
          <h4 className="mt-1 font-bold text-gray-800 text-2xl dark:text-white">
            3,782
          </h4>
        </div>
      </div>

      {/* Metric 2 */}
      <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] md:p-6 shadow-theme-xs">
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-center size-12 bg-brand-50 text-brand-600 rounded-xl dark:bg-brand-500/15 dark:text-brand-400">
            <svg className="size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
            </svg>
          </div>
          <Badge color="success">
            <ArrowUpIcon className="size-3" />
            +8.2%
          </Badge>
        </div>

        <div className="mt-4">
          <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
            Export Volume (Tons)
          </span>
          <h4 className="mt-1 font-bold text-gray-800 text-2xl dark:text-white">
            1,248 MT
          </h4>
        </div>
      </div>
    </div>
  );
};

export default EcommerceMetrics;

