"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Dropdown } from "../ui/Dropdown";
import { useAuth } from "@/context/AuthContext";
import { ChevronDownIcon, UserCircleIcon } from "../icons";

export default function UserDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const { user, signOut } = useAuth();

  function toggleDropdown(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.stopPropagation();
    setIsOpen((prev) => !prev);
  }

  function closeDropdown() {
    setIsOpen(false);
  }

  const handleSignOut = async () => {
    closeDropdown();
    await signOut();
  };

  const displayName =
    user?.user_metadata?.full_name ||
    user?.email?.split("@")[0] ||
    "Admin User";
  const userEmail = user?.email || "admin@castletrading.com";

  return (
    <div className="relative">
      <button
        type="button"
        onClick={toggleDropdown}
        className="flex items-center text-gray-700 dark:text-gray-400 dropdown-toggle gap-2"
        aria-label="User menu"
      >
        <span className="overflow-hidden rounded-full size-10 border border-gray-200 dark:border-gray-700 bg-brand-50 dark:bg-brand-500/20 flex items-center justify-center">
          <Image
            width={40}
            height={40}
            src="/images/user/user-01.jpg"
            alt="User"
            className="w-full h-full object-cover"
            onError={(e) => {
              // fallback if image not found
              (e.target as HTMLElement).style.display = "none";
            }}
          />
        </span>

        <span className="hidden sm:block text-left">
          <span className="block font-medium text-theme-sm text-gray-800 dark:text-white capitalize">
            {displayName}
          </span>
          <span className="block text-theme-xs text-gray-500 dark:text-gray-400 max-w-[120px] truncate">
            {userEmail}
          </span>
        </span>

        <ChevronDownIcon
          className={`stroke-gray-500 dark:stroke-gray-400 transition-transform duration-200 size-4 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      <Dropdown
        isOpen={isOpen}
        onClose={closeDropdown}
        className="absolute right-0 mt-3 w-64 flex-col rounded-2xl border border-gray-200 bg-white p-3 shadow-theme-lg dark:border-gray-800 dark:bg-gray-900"
      >
        <div className="pb-3 border-b border-gray-100 dark:border-gray-800">
          <span className="block font-semibold text-gray-800 text-theme-sm dark:text-white">
            {displayName}
          </span>
          <span className="mt-0.5 block text-theme-xs text-gray-500 dark:text-gray-400 break-all">
            {userEmail}
          </span>
        </div>

        <ul className="flex flex-col gap-1 py-2 border-b border-gray-100 dark:border-gray-800">
          <li>
            <Link
              href="/admin/profile"
              onClick={closeDropdown}
              className="flex items-center gap-3 px-3 py-2 font-medium text-gray-700 rounded-lg group text-theme-sm hover:bg-gray-100 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-white/5 dark:hover:text-white"
            >
              <UserCircleIcon className="size-5 text-gray-500 group-hover:text-gray-700 dark:text-gray-400 dark:group-hover:text-gray-200" />
              Admin Profile
            </Link>
          </li>
          <li>
            <Link
              href="/"
              target="_blank"
              onClick={closeDropdown}
              className="flex items-center gap-3 px-3 py-2 font-medium text-gray-700 rounded-lg group text-theme-sm hover:bg-gray-100 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-white/5 dark:hover:text-white"
            >
              <svg
                className="size-5 text-gray-500 group-hover:text-gray-700 dark:text-gray-400 dark:group-hover:text-gray-200"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
              View Main Site
            </Link>
          </li>
        </ul>

        <div className="pt-2">
          <button
            type="button"
            onClick={handleSignOut}
            className="flex w-full items-center gap-3 px-3 py-2 font-medium text-error-600 rounded-lg group text-theme-sm hover:bg-error-50 dark:text-error-400 dark:hover:bg-error-500/10"
          >
            <svg
              className="size-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
              />
            </svg>
            Sign out
          </button>
        </div>
      </Dropdown>
    </div>
  );
}

