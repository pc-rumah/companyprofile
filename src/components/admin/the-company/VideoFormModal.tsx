"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { CompanyVideo, uploadCompanyImage } from "@/lib/supabase/the-company";

interface VideoFormModalProps {
  video: CompanyVideo | null; // null = add mode
  nextSortOrder: number;
  onSave: (video: CompanyVideo) => Promise<void>;
  onClose: () => void;
}

function slugify(str: string): string {
  return str
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

const emptyVideo = (sortOrder: number): CompanyVideo => ({
  id: "",
  title: "",
  description: "",
  file_name: "",
  thumbnail: "",
  featured: false,
  sort_order: sortOrder,
});

export default function VideoFormModal({
  video,
  nextSortOrder,
  onSave,
  onClose,
}: VideoFormModalProps) {
  const isEdit = video !== null;
  const [form, setForm] = useState<CompanyVideo>(
    isEdit ? { ...video } : emptyVideo(nextSortOrder)
  );
  const [saving, setSaving] = useState(false);
  const [uploadingThumb, setUploadingThumb] = useState(false);
  const [autoId, setAutoId] = useState(!isEdit);
  const thumbInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (autoId && !isEdit) {
      setForm((prev) => ({ ...prev, id: slugify(prev.title) }));
    }
  }, [form.title, autoId, isEdit]);

  const update = (patch: Partial<CompanyVideo>) =>
    setForm((prev) => ({ ...prev, ...patch }));

  const handleThumbUpload = async (file: File) => {
    setUploadingThumb(true);
    const { url, error } = await uploadCompanyImage(file, `thumb-${form.id || "new"}`);
    setUploadingThumb(false);
    if (error || !url) {
      alert(`Thumbnail upload failed: ${error}`);
      return;
    }
    update({ thumbnail: url });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.title.trim()) return;
    if (!form.file_name.trim()) return;

    setSaving(true);
    await onSave({ ...form, id: form.id || slugify(form.title) });
    setSaving(false);
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-base font-semibold text-gray-800 dark:text-white">
            {isEdit ? "Edit Video" : "Add Video"}
          </h2>
          <button
            onClick={onClose}
            className="size-8 flex items-center justify-center rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
          >
            <svg className="size-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="px-6 py-5 space-y-4">
          {/* Title */}
          <div>
            <label className="block text-xs font-medium text-gray-500 dark:text-gray-400 mb-1">
              Title <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={form.title}
              onChange={(e) => update({ title: e.target.value })}
              required
              className="w-full px-3 py-2 rounded-lg border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-sm text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-500"
              placeholder="e.g. Production Process Overview"
            />
          </div>

          {/* ID */}
          <div>
            <div className="flex items-center justify-between mb-1">
              <label className="text-xs font-medium text-gray-500 dark:text-gray-400">
                ID (slug) <span className="text-red-500">*</span>
              </label>
              {!isEdit && (
                <label className="flex items-center gap-1.5 text-xs text-gray-400 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={autoId}
                    onChange={(e) => setAutoId(e.target.checked)}
                    className="rounded"
                  />
                  Auto-generate from title
                </label>
              )}
            </div>
            <input
              type="text"
              value={form.id}
              onChange={(e) => {
                setAutoId(false);
                update({ id: e.target.value });
              }}
              required
              disabled={isEdit}
              className="w-full px-3 py-2 rounded-lg border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-sm text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-500 disabled:opacity-50 font-mono"
              placeholder="production-overview"
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-xs font-medium text-gray-500 dark:text-gray-400 mb-1">
              Description
            </label>
            <textarea
              value={form.description ?? ""}
              onChange={(e) => update({ description: e.target.value })}
              rows={2}
              className="w-full px-3 py-2 rounded-lg border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-sm text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-500 resize-none"
              placeholder="Optional short description..."
            />
          </div>

          {/* File Name */}
          <div>
            <label className="block text-xs font-medium text-gray-500 dark:text-gray-400 mb-1">
              Video File Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={form.file_name}
              onChange={(e) => update({ file_name: e.target.value })}
              required
              className="w-full px-3 py-2 rounded-lg border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-sm text-gray-800 dark:text-white font-mono focus:outline-none focus:ring-2 focus:ring-brand-500"
              placeholder="production.mp4"
            />
            <p className="mt-1 text-xs text-gray-400">
              File must exist in the Supabase &quot;videos&quot; storage bucket.
            </p>
          </div>

          {/* Thumbnail */}
          <div>
            <label className="block text-xs font-medium text-gray-500 dark:text-gray-400 mb-1">
              Thumbnail
            </label>
            <div className="flex gap-3">
              {/* Preview */}
              <div className="relative w-24 h-16 rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-700 shrink-0">
                {form.thumbnail ? (
                  <Image
                    src={form.thumbnail}
                    alt="Thumbnail preview"
                    fill
                    className="object-cover"
                    sizes="96px"
                    unoptimized={form.thumbnail.startsWith("http")}
                  />
                ) : (
                  <div className="flex items-center justify-center h-full text-gray-300 text-xs">
                    Preview
                  </div>
                )}
              </div>
              <div className="flex-1 space-y-2">
                <input
                  type="text"
                  value={form.thumbnail}
                  onChange={(e) => update({ thumbnail: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-xs text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-500"
                  placeholder="/images/... or https://..."
                />
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  ref={thumbInputRef}
                  onChange={(e) => {
                    const file = e.target.files?.[0];
                    if (file) handleThumbUpload(file);
                  }}
                />
                <button
                  type="button"
                  onClick={() => thumbInputRef.current?.click()}
                  disabled={uploadingThumb}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-gray-300 dark:border-gray-600 text-xs font-medium text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors disabled:opacity-50 w-full justify-center"
                >
                  {uploadingThumb ? (
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
                      Upload Thumbnail
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Sort Order & Featured */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-medium text-gray-500 dark:text-gray-400 mb-1">
                Sort Order
              </label>
              <input
                type="number"
                value={form.sort_order}
                onChange={(e) => update({ sort_order: Number(e.target.value) })}
                className="w-full px-3 py-2 rounded-lg border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-sm text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-500"
              />
            </div>
            <div className="flex items-end pb-2">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={form.featured}
                  onChange={(e) => update({ featured: e.target.checked })}
                  className="rounded w-4 h-4"
                />
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  Featured (large card)
                </span>
              </label>
            </div>
          </div>

          {/* Actions */}
          <div className="flex justify-end gap-3 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-600 text-sm font-medium text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={saving}
              className="flex items-center gap-2 px-5 py-2 rounded-lg bg-brand-600 hover:bg-brand-700 text-white text-sm font-semibold transition-colors disabled:opacity-60"
            >
              {saving ? (
                <>
                  <svg className="animate-spin size-4" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                  </svg>
                  Saving…
                </>
              ) : isEdit ? (
                "Save Changes"
              ) : (
                "Add Video"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

