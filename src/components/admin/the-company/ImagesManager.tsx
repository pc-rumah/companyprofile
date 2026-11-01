"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import {
  CompanyImage,
  updateImage,
  uploadCompanyImage,
} from "@/lib/supabase/the-company";

interface ImagesManagerProps {
  images: CompanyImage[];
}

const SLOT_LABELS: Record<string, string> = {
  hero: "Hero Background",
  bento_1: "Bento Card 1",
  bento_2: "Bento Card 2",
  bento_3: "Bento Card 3 (Wide)",
  bento_4: "Bento Card 4",
  bento_5: "Bento Card 5",
  bento_6: "Bento Card 6",
  bento_7: "Bento Card 7",
};

const SLOT_ORDER = ["hero", "bento_1", "bento_2", "bento_3", "bento_4", "bento_5", "bento_6", "bento_7"];

export default function ImagesManager({ images: initialImages }: ImagesManagerProps) {
  const [images, setImages] = useState<CompanyImage[]>(initialImages);
  const [saving, setSaving] = useState<Record<string, boolean>>({});
  const [uploading, setUploading] = useState<Record<string, boolean>>({});
  const [toast, setToast] = useState<{ message: string; type: "success" | "error" } | null>(null);
  const fileInputRefs = useRef<Record<string, HTMLInputElement | null>>({});

  const showToast = (message: string, type: "success" | "error") => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 3500);
  };

  const updateLocal = (slot: string, patch: Partial<CompanyImage>) => {
    setImages((prev) =>
      prev.map((img) => (img.slot === slot ? { ...img, ...patch } : img))
    );
  };

  const handleUpload = async (slot: string, file: File) => {
    setUploading((prev) => ({ ...prev, [slot]: true }));
    const { url, error } = await uploadCompanyImage(file, slot);
    setUploading((prev) => ({ ...prev, [slot]: false }));

    if (error || !url) {
      showToast(`Upload failed: ${error ?? "Unknown error"}`, "error");
      return;
    }
    updateLocal(slot, { src: url });
    showToast("Image uploaded! Click Save to apply.", "success");
  };

  const handleSave = async (slot: string) => {
    const img = images.find((i) => i.slot === slot);
    if (!img) return;

    setSaving((prev) => ({ ...prev, [slot]: true }));
    const { error } = await updateImage(slot, {
      src: img.src,
      alt: img.alt,
      caption: img.caption,
      col_span: img.col_span,
    });
    setSaving((prev) => ({ ...prev, [slot]: false }));

    if (error) {
      showToast(`Save failed: ${error}`, "error");
    } else {
      showToast(`"${SLOT_LABELS[slot]}" saved successfully!`, "success");
    }
  };

  return (
    <div className="relative">
      {/* Toast */}
      {toast && (
        <div
          className={`fixed top-6 right-6 z-50 px-5 py-3 rounded-xl shadow-lg text-sm font-semibold transition-all ${
            toast.type === "success"
              ? "bg-green-500 text-white"
              : "bg-red-500 text-white"
          }`}
        >
          {toast.message}
        </div>
      )}

      <div className="space-y-6">
        {SLOT_ORDER.map((slot) => {
          const img = images.find((i) => i.slot === slot);
          if (!img) return null;
          const isHero = slot === "hero";

          return (
            <div
              key={slot}
              className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-5 shadow-sm"
            >
              <div className="flex flex-col lg:flex-row gap-5">
                {/* Image Preview */}
                <div
                  className={`relative shrink-0 rounded-xl overflow-hidden bg-gray-100 dark:bg-gray-700 ${
                    isHero ? "w-full lg:w-64 h-40" : "w-full lg:w-44 h-32"
                  }`}
                >
                  {img.src ? (
                    <Image
                      src={img.src}
                      alt={img.alt || slot}
                      fill
                      className="object-cover"
                      sizes="256px"
                      unoptimized={img.src.startsWith("http")}
                    />
                  ) : (
                    <div className="flex items-center justify-center h-full text-gray-400 text-xs">
                      No image
                    </div>
                  )}
                </div>

                {/* Fields */}
                <div className="flex-1 space-y-3">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-gray-800 dark:text-white text-sm">
                      {SLOT_LABELS[slot]}
                      {img.col_span === 2 && (
                        <span className="ml-2 text-xs font-medium px-2 py-0.5 bg-brand-100 text-brand-600 dark:bg-brand-500/20 dark:text-brand-400 rounded-full">
                          Wide
                        </span>
                      )}
                    </h3>
                  </div>

                  {/* Upload Button */}
                  <div>
                    <label className="block text-xs font-medium text-gray-500 dark:text-gray-400 mb-1">
                      Upload Image
                    </label>
                    <div className="flex items-center gap-2">
                      <input
                        type="file"
                        accept="image/*"
                        className="hidden"
                        ref={(el) => {
                          fileInputRefs.current[slot] = el;
                        }}
                        onChange={(e) => {
                          const file = e.target.files?.[0];
                          if (file) handleUpload(slot, file);
                        }}
                      />
                      <button
                        onClick={() => fileInputRefs.current[slot]?.click()}
                        disabled={uploading[slot]}
                        className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-gray-300 dark:border-gray-600 text-xs font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors disabled:opacity-50"
                      >
                        {uploading[slot] ? (
                          <>
                            <svg className="animate-spin size-3.5" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                            </svg>
                            Uploading…
                          </>
                        ) : (
                          <>
                            <svg className="size-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                            </svg>
                            Choose File
                          </>
                        )}
                      </button>
                      <span className="text-xs text-gray-400 truncate max-w-[180px]">
                        {img.src ? img.src.split("/").pop() : "No file"}
                      </span>
                    </div>
                  </div>

                  {/* Alt Text */}
                  <div>
                    <label className="block text-xs font-medium text-gray-500 dark:text-gray-400 mb-1">
                      Alt Text
                    </label>
                    <input
                      type="text"
                      value={img.alt}
                      onChange={(e) => updateLocal(slot, { alt: e.target.value })}
                      className="w-full px-3 py-1.5 rounded-lg border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-sm text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-500"
                      placeholder="Descriptive alt text..."
                    />
                  </div>

                  {/* Caption (not for hero) */}
                  {!isHero && (
                    <div>
                      <label className="block text-xs font-medium text-gray-500 dark:text-gray-400 mb-1">
                        Hover Caption
                      </label>
                      <input
                        type="text"
                        value={img.caption}
                        onChange={(e) => updateLocal(slot, { caption: e.target.value })}
                        className="w-full px-3 py-1.5 rounded-lg border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-sm text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-500"
                        placeholder="Label shown on hover..."
                      />
                    </div>
                  )}

                  {/* Wide toggle (only for bento cells) */}
                  {!isHero && (
                    <div className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        id={`wide-${slot}`}
                        checked={img.col_span === 2}
                        onChange={(e) =>
                          updateLocal(slot, { col_span: e.target.checked ? 2 : 1 })
                        }
                        className="rounded"
                      />
                      <label
                        htmlFor={`wide-${slot}`}
                        className="text-xs font-medium text-gray-600 dark:text-gray-300 cursor-pointer"
                      >
                        Wide card (spans 2 columns)
                      </label>
                    </div>
                  )}

                  {/* Save */}
                  <div className="flex justify-end pt-1">
                    <button
                      onClick={() => handleSave(slot)}
                      disabled={saving[slot]}
                      className="flex items-center gap-2 px-4 py-2 rounded-lg bg-brand-600 hover:bg-brand-700 text-white text-xs font-semibold transition-colors disabled:opacity-60"
                    >
                      {saving[slot] ? (
                        <>
                          <svg className="animate-spin size-3.5" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                          </svg>
                          Saving…
                        </>
                      ) : (
                        "Save"
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

