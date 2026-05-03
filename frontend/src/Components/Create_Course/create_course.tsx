"use client";

import { X } from "lucide-react";
import { useState } from "react";
import Body from "./Body";

type Props = {
  open: boolean;
  onClose: () => void;
};

export default function CreateCourseModal({ open, onClose }: Props) {
  const [thumbnail, setThumbnail] = useState<File | null>(null);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4 backdrop-blur-sm">
      <div className="w-full max-w-2xl h-[75vh] rounded-[28px] bg-white shadow-2xl overflow-y-scroll scrollbar-hide p-6">
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

        <Body thumbnail={thumbnail} setThumbnail={setThumbnail} />

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