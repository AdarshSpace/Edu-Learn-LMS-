"use client";

import { useState } from "react";

interface selectFileProps {
  onFileSelect: (file: File) => void;
  fileType?: "video";
}

const SelectFile = ({ onFileSelect, fileType }: selectFileProps) => {
  const [error, setError] = useState<string | null>(null);

  const validateFile = (file: File) => {
    if (fileType === "video" && file.type !== "video/*") {
      setError("Please upload a valid Video");
      return false;
    }

    if (file.size > 200 * 1024 * 1024) {
      setError("File must be under 200MB");
      return false;
    }

    return true;
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!validateFile(file)) return;

    setError(null);
    onFileSelect(file);
  };

  return (
    <>
      <input
        type="file"
        accept={fileType === "video" ? "video/*" : "video/*"}
        onChange={handleFileChange}
        required className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10 "
        placeholder="e.g., Next.js Interview Prep" 
       
      />

      {error && <p className="text-red-500">{error}</p>}
    </>
  );
};

export default SelectFile;