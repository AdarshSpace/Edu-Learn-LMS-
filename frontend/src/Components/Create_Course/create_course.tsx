"use client";

import { X, UploadCloud } from "lucide-react";
import { useState } from "react";

type Props = {
  open: boolean;
  onClose: () => void;
};

export default function CreateCourseModal({ open, onClose }: Props) {
  const [thumbnail, setThumbnail] = useState<File | null>(null);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4 backdrop-blur-sm">
      <div className="w-full max-w-2xl h-[75vh] rounded-[28px] bg-white shadow-2xl overflow-y-auto p-6">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-purple-100 px-6 py-5">
          <div>
            <h2 className="text-2xl font-bold text-[#2E1065]">
              Create New Course
            </h2>
            <p className="mt-1 text-sm text-gray-500">
              Add your course basic information
            </p>
          </div>

          <button
            onClick={onClose}
            className="rounded-xl p-2 transition hover:bg-purple-50"
          >
            <X className="h-5 w-5 text-[#2E1065]" />
          </button>
        </div>

        {/* Body */}
        <div className="max-h-[80vh] overflow-y-auto px-6 py-6">
          <div className="space-y-6">
            {/* Title */}
            <div>
              <label className="mb-2 block text-sm font-semibold text-[#2E1065]">
                Course Title
              </label>
              <input
                type="text"
                placeholder="Enter course title"
                className="w-full rounded-2xl border border-purple-200 px-4 py-3 outline-none transition focus:border-purple-600"
              />
            </div>

            {/* Description */}
            <div>
              <label className="mb-2 block text-sm font-semibold text-[#2E1065]">
                Description
              </label>
              <textarea
                rows={3}
                placeholder="Write course description..."
                className="w-full rounded-2xl border border-purple-200 px-4 py-3 outline-none transition focus:border-purple-600"
              />
            </div>

            {/* Category */}
            <div>
              <label className="mb-2 block text-sm font-semibold text-[#2E1065]">
                Category
              </label>
              <input
                type="text"
                placeholder="Web Development"
                className="w-full rounded-2xl border border-purple-200 px-4 py-3 outline-none transition focus:border-purple-600"
              />
            </div>

            {/* Price Row */}
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-semibold text-[#2E1065]">
                  Price
                </label>
                <input
                  type="number"
                  placeholder="999"
                  className="w-full rounded-2xl border border-purple-200 px-4 py-3 outline-none transition focus:border-purple-600"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-[#2E1065]">
                  Old Price
                </label>
                <input
                  type="number"
                  placeholder="1999"
                  className="w-full rounded-2xl border border-purple-200 px-4 py-3 outline-none transition focus:border-purple-600"
                />
              </div>
            </div>

            {/* Thumbnail Upload */}
            <div>
              <label className="mb-2 block text-sm font-semibold text-[#2E1065]">
                Thumbnail
              </label>

              <label className="flex h-52 cursor-pointer flex-col items-center justify-center rounded-3xl border-2 border-dashed border-purple-200 bg-[#F8F5FF] transition hover:bg-purple-50">
                <UploadCloud className="mb-3 h-8 w-8 text-purple-700" />

                <span className="font-medium text-[#2E1065]">
                  Click to upload
                </span>

                <span className="mt-1 text-sm text-gray-500">
                  PNG, JPG, WEBP
                </span>
                
                {thumbnail && (
                <p className="mt-3 text-sm text-gray-600">
                  {thumbnail.name}
                </p>
              )}

                <input
                  type="file"
                  className="hidden"
                  onChange={(e) =>
                    setThumbnail(e.target.files?.[0] || null)
                  }
                />
              </label>

              
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex gap-4 border-t border-purple-100 px-6 py-5">
          <button
            onClick={onClose}
            className="flex-1 rounded-2xl border border-purple-200 py-3 font-semibold text-[#2E1065] transition hover:bg-purple-50"
          >
            Cancel
          </button>

          <button className="flex-1 rounded-2xl bg-purple-700 py-3 font-semibold text-white transition hover:bg-purple-800">
            Create Course
          </button>
        </div>
      </div>
    </div>
  );
}