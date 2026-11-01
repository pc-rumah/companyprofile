"use client";

import React from "react";
import { useTheme } from "@/context/ThemeContext";
import { SunIcon, MoonIcon } from "../icons";

export const ThemeToggleButton: React.FC = () => {
  const { toggleTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className="relative flex items-center justify-center text-gray-500 transition-colors bg-white border border-gray-200 rounded-full hover:text-gray-900 size-11 hover:bg-gray-100 dark:border-gray-800 dark:bg-gray-900 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-white"
    >
      <span className="hidden dark:block">
        <SunIcon className="size-5" />
      </span>
      <span className="block dark:hidden">
        <MoonIcon className="size-5" />
      </span>
    </button>
  );
};

export default ThemeToggleButton;

