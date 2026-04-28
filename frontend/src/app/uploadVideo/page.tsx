"use client";

import { useState } from 'react';
import { upload } from "@imagekit/next";

interface FileUploadProps {
    onsuccess: (res: any) => void;
    onProgress: (progress: number) => void;
    onFileSelect: (file: File) => void;
    fileType?: "video";
  }

  const FileUpload = ({ onsuccess, onProgress, onFileSelect, fileType }: FileUploadProps) => {
    const [uploading, setUploading] = useState(false);
    const [error, setError] = useState<string | null>(null);
  
    const validateFile = (file: File): boolean => {
      if (fileType === "video" && file.type !== "video/*") {
        setError("Please upload a valid video file");
        return false;
      }
  
      if (fileType === "video" && !file.type.startsWith("video/")) {
        setError("Please upload a valid Video file");
        return false;
      }
  
      if (file.size > 200 * 1024 * 1024) {
        setError("File size must be less than 200 MB");
        return false;
      } 
  
      return true;
    };
  
    const handleFileChange = async (
      e: React.ChangeEvent<HTMLInputElement>
    ) => {
      const file = e.target.files?.[0];
      if (!file) return;
  
      setError(null);
  
      onFileSelect(file); // pass file to parent
      if (!validateFile(file)) return;
  
      setUploading(true);
  
      try {
          
        // Ask backend for ImageKit auth
        const authRes = await fetch("http://localhost:3000/api/video/auth");
        const data = await authRes.json();
  
  
      console.log('authentication  : ', data, authRes);
      console.log('Public Key : ', process.env.NEXT_PUBLIC_PUBLIC_KEY);
  
        const res = await upload({
          file,
          fileName: file.name,
          publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY!,
          expire: data.expire,
          token: data.token,
          signature: data.signature,
          onProgress: (event: ProgressEvent) => {
            if (event.lengthComputable) {
              const percent = Math.round(
                (event.loaded / event.total) * 100
              );
              onProgress(percent);
            }
          },
        });
  
        await fetch("/api/video/upload", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            title: "My Video",
            fileId: res.fileId,
            fileName: res.name,
            fileUrl: res.url,
            fileSize: res.size,
            thumbnailUrl: res.thumbnailUrl
          }),
        });
  
        onsuccess(res);
      } catch (err) {
        console.log("Upload failed:", err);
        setError("Upload failed. Please try again.",);
      } finally {
        setUploading(false);
      }
    };
  
    return (
      <>
        <input
          type="file"
          accept={
            fileType === "video" ? "video/mp4" : "video/*"
          }
          onChange={handleFileChange}
        />
  
        {uploading && <span>Uploading...</span>}
        {error && <p style={{ color: "red" }}>{error}</p>}
      </>
    );
  };

  export default FileUpload;