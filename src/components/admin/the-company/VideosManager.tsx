"use client";

import { useState } from "react";
import Image from "next/image";
import {
  CompanyVideo,
  upsertVideo,
  deleteVideo,
} from "@/lib/supabase/the-company";
import VideoFormModal from "./VideoFormModal";

interface VideosManagerProps {
  videos: CompanyVideo[];
}

export default function VideosManager({ videos: initialVideos }: VideosManagerProps) {
  const [videos, setVideos] = useState<CompanyVideo[]>(initialVideos);
  const [modalOpen, setModalOpen] = useState(false);
  const [editingVideo, setEditingVideo] = useState<CompanyVideo | null>(null);
  const [deletingId, setDeletingId] = useState<string | null>(null);
  const [togglingId, setTogglingId] = useState<string | null>(null);
  const [toast, setToast] = useState<{ message: string; type: "success" | "error" } | null>(null);

  const showToast = (message: string, type: "success" | "error") => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 3500);
  };

  const openAddModal = () => {
    setEditingVideo(null);
    setModalOpen(true);
  };

  const openEditModal = (video: CompanyVideo) => {
    setEditingVideo(video);
    setModalOpen(true);
  };

  const handleSave = async (video: CompanyVideo) => {
    const { error } = await upsertVideo(video);
    if (error) {
      showToast(`Save failed: ${error}`, "error");
      return;
    }
    setVideos((prev) => {
      const existing = prev.findIndex((v) => v.id === video.id);
      if (existing >= 0) {
        const updated = [...prev];
        updated[existing] = video;
        return updated.sort((a, b) => a.sort_order - b.sort_order);
      }
      return [...prev, video].sort((a, b) => a.sort_order - b.sort_order);
    });
    showToast("Video saved successfully!", "success");
    setModalOpen(false);
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Delete this video? This cannot be undone.")) return;
    setDeletingId(id);
    const { error } = await deleteVideo(id);
    setDeletingId(null);
    if (error) {
      showToast(`Delete failed: ${error}`, "error");
    } else {
      setVideos((prev) => prev.filter((v) => v.id !== id));
      showToast("Video deleted.", "success");
    }
  };

  const handleToggleFeatured = async (video: CompanyVideo) => {
    setTogglingId(video.id);
    // Un-feature all others if enabling this one
    let updatedVideos = videos.map((v) => ({ ...v }));
    if (!video.featured) {
      for (const v of updatedVideos) {
        if (v.featured && v.id !== video.id) {
          await upsertVideo({ ...v, featured: false });
        }
      }
      updatedVideos = updatedVideos.map((v) => ({
        ...v,
        featured: v.id === video.id,
      }));
    } else {
      updatedVideos = updatedVideos.map((v) =>
        v.id === video.id ? { ...v, featured: false } : v
      );
    }

    const target = updatedVideos.find((v) => v.id === video.id)!;
    const { error } = await upsertVideo(target);
    setTogglingId(null);

    if (error) {
      showToast(`Toggle failed: ${error}`, "error");
    } else {
      setVideos(updatedVideos);
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

      {/* Header Row */}
      <div className="flex items-center justify-between mb-4">
        <p className="text-sm text-gray-500 dark:text-gray-400">
          {videos.length} video{videos.length !== 1 ? "s" : ""} total
        </p>
        <button
          onClick={openAddModal}
          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-brand-600 hover:bg-brand-700 text-white text-sm font-semibold transition-colors"
        >
          <svg className="size-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
          Add Video
        </button>
      </div>

      {/* Table */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900/50">
                <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider w-12">
                  #
                </th>
                <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Thumbnail
                </th>
                <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Title
                </th>
                <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  File Name
                </th>
                <th className="text-center px-4 py-3 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Featured
                </th>
                <th className="text-right px-4 py-3 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 dark:divide-gray-700">
              {videos.map((video, idx) => (
                <tr
                  key={video.id}
                  className="hover:bg-gray-50 dark:hover:bg-gray-700/30 transition-colors"
                >
                  {/* Order */}
                  <td className="px-4 py-3 text-xs text-gray-400 dark:text-gray-500 font-mono">
                    {idx + 1}
                  </td>

                  {/* Thumbnail */}
                  <td className="px-4 py-3">
                    <div className="relative w-16 h-10 rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-700">
                      {video.thumbnail ? (
                        <Image
                          src={video.thumbnail}
                          alt={video.title}
                          fill
                          className="object-cover"
                          sizes="64px"
                          unoptimized={video.thumbnail.startsWith("http")}
                        />
                      ) : (
                        <div className="flex items-center justify-center h-full text-gray-300 text-xs">
                          N/A
                        </div>
                      )}
                    </div>
                  </td>

                  {/* Title */}
                  <td className="px-4 py-3">
                    <div className="font-medium text-gray-800 dark:text-white text-sm leading-snug">
                      {video.title}
                    </div>
                    {video.description && (
                      <div className="text-xs text-gray-400 truncate max-w-[240px]">
                        {video.description}
                      </div>
                    )}
                  </td>

                  {/* File Name */}
                  <td className="px-4 py-3">
                    <span className="font-mono text-xs text-gray-500 dark:text-gray-400">
                      {video.file_name}
                    </span>
                  </td>

                  {/* Featured Toggle */}
                  <td className="px-4 py-3 text-center">
                    <button
                      onClick={() => handleToggleFeatured(video)}
                      disabled={togglingId === video.id}
                      title={video.featured ? "Remove featured" : "Set as featured"}
                      className={`inline-flex items-center justify-center size-8 rounded-full transition-all ${
                        video.featured
                          ? "bg-amber-100 text-amber-600 dark:bg-amber-500/20 dark:text-amber-400"
                          : "bg-gray-100 text-gray-400 dark:bg-gray-700 dark:text-gray-500 hover:bg-amber-50 hover:text-amber-500"
                      } disabled:opacity-50`}
                    >
                      {togglingId === video.id ? (
                        <svg className="animate-spin size-4" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                        </svg>
                      ) : (
                        <svg className="size-4" fill={video.featured ? "currentColor" : "none"} stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                        </svg>
                      )}
                    </button>
                  </td>

                  {/* Actions */}
                  <td className="px-4 py-3">
                    <div className="flex items-center justify-end gap-2">
                      <button
                        onClick={() => openEditModal(video)}
                        className="px-3 py-1.5 text-xs font-medium text-brand-600 dark:text-brand-400 hover:bg-brand-50 dark:hover:bg-brand-500/10 rounded-lg transition-colors"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(video.id)}
                        disabled={deletingId === video.id}
                        className="px-3 py-1.5 text-xs font-medium text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-500/10 rounded-lg transition-colors disabled:opacity-50"
                      >
                        {deletingId === video.id ? "Deleting…" : "Delete"}
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {videos.length === 0 && (
            <div className="text-center py-16 text-gray-400 dark:text-gray-500 text-sm">
              No videos yet. Click &ldquo;Add Video&rdquo; to get started.
            </div>
          )}
        </div>
      </div>

      {/* Video Form Modal */}
      {modalOpen && (
        <VideoFormModal
          video={editingVideo}
          nextSortOrder={
            videos.length > 0
              ? Math.max(...videos.map((v) => v.sort_order)) + 1
              : 0
          }
          onSave={handleSave}
          onClose={() => setModalOpen(false)}
        />
      )}
    </div>
  );
}

