"use client";

import React from "react";
import AppSidebar from "@/components/admin/layout/AppSidebar";
import AppHeader from "@/components/admin/layout/AppHeader";
import Backdrop from "@/components/admin/layout/Backdrop";
import { useSidebar } from "@/context/SidebarContext";

export default function AdminDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isExpanded, isHovered, isMobileOpen } = useSidebar();

  const mainContentMargin = isMobileOpen
    ? "ml-0"
    : isExpanded || isHovered
    ? "lg:ml-64"
    : "lg:ml-20";

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200 flex">
      <AppSidebar />
      <Backdrop />

      <div className={`flex flex-col flex-1 min-h-screen min-w-0 transition-all duration-300 ease-in-out ${mainContentMargin}`}>
        <AppHeader />
        <main className="flex-1 p-4 sm:p-6 lg:p-8 max-w-7xl w-full mx-auto">
          {children}
        </main>
      </div>
    </div>
  );
}

