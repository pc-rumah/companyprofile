"use client";

import { useState } from "react";
import { CompanyImage, CompanyVideo, migrateExistingData } from "@/lib/supabase/the-company";
import ImagesManager from "./ImagesManager";
import VideosManager from "./VideosManager";

interface TheCompanyManagerProps {
  images: CompanyImage[];
  videos: CompanyVideo[];
}

type Tab = "images" | "videos";

export default function TheCompanyManager({ images, videos }: TheCompanyManagerProps) {
  const [activeTab, setActiveTab] = useState<Tab>("images");
  const [migrating, setMigrating] = useState(false);
  const [migrateResult, setMigrateResult] = useState<string | null>(null);

  const handleMigrate = async () => {
    if (
      !confirm(
        "This will overwrite all existing data in the_company_images and the_company_videos tables with the original hardcoded values. Continue?"
      )
    )
      return;

    setMigrating(true);
    setMigrateResult(null);
    const { error } = await migrateExistingData();
    setMigrating(false);

    if (error) {
      setMigrateResult(`❌ Migration failed: ${error}`);
    } else {
      setMigrateResult("✅ Migration successful! Reload the page to see updated data.");
    }
  };

  const tabs: { id: Tab; label: string; icon: React.ReactNode }[] = [
    {
      id: "images",
      label: "Images",
      icon: (
        <svg className="size-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      id: "videos",
      label: "Videos",
      icon: (
        <svg className="size-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      ),
    },
  ];

  return (
    <div className="space-y-6">
      {/* Migrate Banner */}
      <div className="bg-amber-50 dark:bg-amber-500/10 border border-amber-200 dark:border-amber-500/20 rounded-2xl p-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <div>
          <p className="text-sm font-semibold text-amber-800 dark:text-amber-300">
            First Time Setup
          </p>
          <p className="text-xs text-amber-600 dark:text-amber-400 mt-0.5">
            Populate the database tables with the current hardcoded content from the website.
          </p>
          {migrateResult && (
            <p className="text-xs mt-1 font-medium text-gray-700 dark:text-gray-300">
              {migrateResult}
            </p>
          )}
        </div>
        <button
          onClick={handleMigrate}
          disabled={migrating}
          className="flex items-center gap-2 shrink-0 px-4 py-2 rounded-lg bg-amber-500 hover:bg-amber-600 text-white text-sm font-semibold transition-colors disabled:opacity-60"
        >
          {migrating ? (
            <>
              <svg className="animate-spin size-4" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
              </svg>
              Migrating…
            </>
          ) : (
            <>
              <svg className="size-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
              Migrate Existing Data
            </>
          )}
        </button>
      </div>

      {/* Tabs */}
      <div className="border-b border-gray-200 dark:border-gray-700">
        <nav className="flex gap-1 -mb-px">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-5 py-3 text-sm font-medium border-b-2 transition-colors ${
                activeTab === tab.id
                  ? "border-brand-600 text-brand-600 dark:border-brand-400 dark:text-brand-400"
                  : "border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 hover:border-gray-300 dark:hover:border-gray-600"
              }`}
            >
              {tab.icon}
              {tab.label}
            </button>
          ))}
        </nav>
      </div>

      {/* Tab Content */}
      {activeTab === "images" && <ImagesManager images={images} />}
      {activeTab === "videos" && <VideosManager videos={videos} />}
    </div>
  );
}

