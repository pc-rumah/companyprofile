"use client";

import React, { useRef, useEffect } from "react";
import { ThemeToggleButton } from "../common/ThemeToggleButton";
import NotificationDropdown from "../header/NotificationDropdown";
import UserDropdown from "../header/UserDropdown";
import { useSidebar } from "@/context/SidebarContext";
import { SearchIcon } from "../icons";

const AppHeader: React.FC = () => {
  const { isMobileOpen, toggleSidebar, toggleMobileSidebar } = useSidebar();
  const inputRef = useRef<HTMLInputElement>(null);

  const handleToggle = () => {
    if (typeof window !== "undefined" && window.innerWidth >= 1024) {
      toggleSidebar();
    } else {
      toggleMobileSidebar();
    }
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key === "k") {
        event.preventDefault();
        inputRef.current?.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <header className="sticky top-0 z-30 flex w-full border-b border-gray-200 bg-white/95 backdrop-blur-sm dark:border-gray-800 dark:bg-gray-900/95">
      <div className="flex grow items-center justify-between px-4 py-3 sm:px-6">
        <div className="flex items-center gap-2 sm:gap-4">
          <button
            type="button"
            onClick={handleToggle}
            className="flex size-10 items-center justify-center rounded-lg border border-gray-200 text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-white"
            aria-label="Toggle Sidebar"
          >
            <svg
              className="size-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

          {/* Search bar */}
          <div className="relative hidden md:block">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-400">
              <SearchIcon className="size-4" />
            </span>
            <input
              ref={inputRef}
              type="text"
              placeholder="Search or press ⌘K..."
              className="w-64 lg:w-80 rounded-lg border border-gray-200 bg-gray-50 pl-9 pr-12 py-2 text-sm text-gray-800 placeholder:text-gray-400 focus:border-brand-500 focus:bg-white focus:outline-hidden dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-brand-500"
            />
            <span className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-xs text-gray-400 font-mono">
              ⌘K
            </span>
          </div>
        </div>

        <div className="flex items-center gap-3 sm:gap-4">
          <ThemeToggleButton />
          <NotificationDropdown />
          <UserDropdown />
        </div>
      </div>
    </header>
  );
};

export default AppHeader;

