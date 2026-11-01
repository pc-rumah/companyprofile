"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useSidebar } from "@/context/SidebarContext";
import {
  GridIcon,
  UserCircleIcon,
  TableIcon,
  ListIcon,
} from "../icons";

type NavItem = {
  name: string;
  icon: React.ReactNode;
  path: string;
};

const navItems: NavItem[] = [
  {
    name: "Dashboard",
    icon: <GridIcon className="size-5" />,
    path: "/admin",
  },
  {
    name: "Admin Profile",
    icon: <UserCircleIcon className="size-5" />,
    path: "/admin/profile",
  },
  {
    name: "Data Tables",
    icon: <TableIcon className="size-5" />,
    path: "/admin/tables",
  },
  {
    name: "Form Elements",
    icon: <ListIcon className="size-5" />,
    path: "/admin/forms",
  },
];

const AppSidebar: React.FC = () => {
  const { isExpanded, isMobileOpen, isHovered, setIsHovered } = useSidebar();
  const pathname = usePathname();

  const isActive = (path: string) => {
    if (path === "/admin") return pathname === "/admin";
    return pathname.startsWith(path);
  };

  const showFullSidebar = isExpanded || isHovered || isMobileOpen;

  return (
    <aside
      className={`fixed top-0 left-0 z-40 flex h-screen flex-col border-r border-gray-200 bg-white transition-all duration-300 ease-in-out dark:border-gray-800 dark:bg-gray-900 ${
        isMobileOpen
          ? "translate-x-0 w-64"
          : "-translate-x-full lg:translate-x-0"
      } ${
        !isMobileOpen && (isExpanded || isHovered ? "w-64" : "w-20")
      }`}
      onMouseEnter={() => !isExpanded && setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Brand Header */}
      <div className="flex h-16 items-center px-4 border-b border-gray-100 dark:border-gray-800">
        <Link href="/admin" className="flex items-center gap-3 overflow-hidden">
          <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-linear-to-br from-brand-500 to-brand-700 text-white font-bold shadow-md shadow-brand-500/20">
            CT
          </div>
          {showFullSidebar && (
            <div className="flex flex-col truncate">
              <span className="font-bold text-gray-900 dark:text-white text-sm tracking-tight leading-none">
                Castle Trading
              </span>
              <span className="text-[10px] uppercase font-semibold tracking-wider text-brand-500 mt-1">
                Admin Portal
              </span>
            </div>
          )}
        </Link>
      </div>

      {/* Navigation */}
      <div className="flex flex-col flex-1 overflow-y-auto custom-scrollbar p-3 justify-between">
        <nav className="space-y-1.5">
          <div className="px-3 py-1.5 text-[11px] font-semibold tracking-wider uppercase text-gray-400">
            {showFullSidebar ? "Main Menu" : "•••"}
          </div>

          {navItems.map((item) => {
            const active = isActive(item.path);
            return (
              <Link
                key={item.path}
                href={item.path}
                className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
                  active
                    ? "bg-brand-50 text-brand-600 dark:bg-brand-500/15 dark:text-brand-400"
                    : "text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-white/5 dark:hover:text-white"
                } ${!showFullSidebar ? "justify-center px-2" : ""}`}
                title={!showFullSidebar ? item.name : undefined}
              >
                <span className={active ? "text-brand-600 dark:text-brand-400" : "text-gray-500 dark:text-gray-400"}>
                  {item.icon}
                </span>
                {showFullSidebar && <span>{item.name}</span>}
              </Link>
            );
          })}
        </nav>

        {/* Bottom Quick Links */}
        <div className="pt-4 border-t border-gray-100 dark:border-gray-800 space-y-1.5">
          <div className="px-3 py-1 text-[11px] font-semibold tracking-wider uppercase text-gray-400">
            {showFullSidebar ? "Quick Links" : "•••"}
          </div>

          <Link
            href="/"
            target="_blank"
            className={`flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-gray-600 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-white/5 dark:hover:text-white transition-colors ${
              !showFullSidebar ? "justify-center px-2" : ""
            }`}
            title="View Public Website"
          >
            <svg
              className="size-5 shrink-0 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
            {showFullSidebar && <span>View Website</span>}
          </Link>
        </div>
      </div>
    </aside>
  );
};

export default AppSidebar;

