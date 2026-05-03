import { UploadCloud } from "lucide-react";

const Body = ({ thumbnail, setThumbnail }: { thumbnail: File | null, setThumbnail: (file: File | null) => void }) => {
  return (
    <div>
         {/* Body */}
         <div className="overflow-y-auto  px-6 py-6 scrollbar-hide">
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
    </div>
  );
};

export default Body;