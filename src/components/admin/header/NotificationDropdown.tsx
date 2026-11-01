"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Dropdown } from "../ui/Dropdown";
import { BellIcon } from "../icons";

export default function NotificationDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const [notifying, setNotifying] = useState(true);

  function toggleDropdown() {
    setIsOpen(!isOpen);
  }

  function closeDropdown() {
    setIsOpen(false);
  }

  const handleClick = () => {
    toggleDropdown();
    setNotifying(false);
  };

  return (
    <div className="relative">
      <button
        type="button"
        className="relative dropdown-toggle flex items-center justify-center text-gray-500 transition-colors bg-white border border-gray-200 rounded-full hover:text-gray-700 size-11 hover:bg-gray-100 dark:border-gray-800 dark:bg-gray-900 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-white"
        onClick={handleClick}
        aria-label="Notifications"
      >
        <span
          className={`absolute right-1 top-1 z-10 size-2 rounded-full bg-brand-500 ${
            !notifying ? "hidden" : "flex"
          }`}
        >
          <span className="absolute inline-flex w-full h-full bg-brand-500 rounded-full opacity-75 animate-ping"></span>
        </span>
        <BellIcon className="size-5" />
      </button>

      <Dropdown
        isOpen={isOpen}
        onClose={closeDropdown}
        className="absolute -right-16 sm:right-0 mt-3 w-80 sm:w-96 flex-col rounded-2xl border border-gray-200 bg-white p-4 shadow-theme-lg dark:border-gray-800 dark:bg-gray-900"
      >
        <div className="flex items-center justify-between pb-3 mb-2 border-b border-gray-100 dark:border-gray-800">
          <h5 className="text-base font-semibold text-gray-800 dark:text-white">
            Notifications
          </h5>
          <span className="text-xs bg-brand-50 text-brand-600 dark:bg-brand-500/20 dark:text-brand-400 px-2 py-0.5 rounded-full font-medium">
            3 New
          </span>
        </div>

        <ul className="flex flex-col max-h-72 overflow-y-auto custom-scrollbar divide-y divide-gray-100 dark:divide-gray-800">
          <li className="py-2.5">
            <div className="flex items-start gap-3">
              <span className="size-9 rounded-full bg-brand-100 text-brand-600 dark:bg-brand-500/20 dark:text-brand-400 flex items-center justify-center shrink-0 text-sm font-semibold">
                CT
              </span>
              <div className="flex-1 text-left">
                <p className="text-xs font-medium text-gray-800 dark:text-gray-200">
                  New inquiry received from website
                </p>
                <p className="text-theme-xs text-gray-500 dark:text-gray-400 mt-0.5">
                  Coconut charcoal briquette bulk order request
                </p>
                <span className="text-[10px] text-gray-400 mt-1 block">10 minutes ago</span>
              </div>
            </div>
          </li>

          <li className="py-2.5">
            <div className="flex items-start gap-3">
              <span className="size-9 rounded-full bg-success-50 text-success-600 dark:bg-success-500/20 dark:text-success-400 flex items-center justify-center shrink-0 text-sm font-semibold">
                ✓
              </span>
              <div className="flex-1 text-left">
                <p className="text-xs font-medium text-gray-800 dark:text-gray-200">
                  Storage sync completed
                </p>
                <p className="text-theme-xs text-gray-500 dark:text-gray-400 mt-0.5">
                  All factory videos synced to Supabase
                </p>
                <span className="text-[10px] text-gray-400 mt-1 block">1 hour ago</span>
              </div>
            </div>
          </li>

          <li className="py-2.5">
            <div className="flex items-start gap-3">
              <span className="size-9 rounded-full bg-warning-50 text-warning-600 dark:bg-warning-500/20 dark:text-warning-400 flex items-center justify-center shrink-0 text-sm font-semibold">
                !
              </span>
              <div className="flex-1 text-left">
                <p className="text-xs font-medium text-gray-800 dark:text-gray-200">
                  Admin session started
                </p>
                <p className="text-theme-xs text-gray-500 dark:text-gray-400 mt-0.5">
                  Authenticated via Supabase Auth
                </p>
                <span className="text-[10px] text-gray-400 mt-1 block">Just now</span>
              </div>
            </div>
          </li>
        </ul>

        <div className="pt-3 border-t border-gray-100 dark:border-gray-800">
          <button
            type="button"
            onClick={closeDropdown}
            className="w-full text-center py-1.5 text-xs font-medium text-brand-500 hover:text-brand-600 dark:text-brand-400"
          >
            Mark all as read
          </button>
        </div>
      </Dropdown>
    </div>
  );
}

