"use client";
import React, { useState, useCallback } from "react";

type Iimage = {
  name: string;
  url: string;
};

export default function ImageUploader() {
  const [images, setImages] = useState<Iimage[]>([]);
  const [isDragging, setIsDragging] = useState(false);

  const handleFile = (file: File) => {
    if (!file.type.startsWith("image/")) {
      alert("Please upload an image file.");
      return;
    }

    const newImage: Iimage = {
      name: file.name,
      url: URL.createObjectURL(file), // Create a local URL to display image
    };

    setImages((prev) => [...prev, newImage]);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) handleFile(file);
  };

  const handleDrop = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);

    const file = e.dataTransfer.files?.[0];
    if (file) handleFile(file);
  }, []);

  const handleDragOver = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  }, []);

  return (
    <div className="mx-auto w-full">
      <div className="mt-4 flex flex-wrap gap-4">
        {images.map((img, idx) => (
          <div
            key={idx}
            className="w-24 h-24 overflow-hidden rounded-lg border"
          >
            <img
              src={img.url}
              alt={img.name}
              className="object-cover w-full h-full"
            />
          </div>
        ))}
      </div>
      <div
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        className={`mt-4 flex cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed p-6 transition ${
          isDragging
            ? "border-blue-500 bg-blue-50"
            : "border-gray-300 hover:border-blue-400"
        }`}
      >
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="hidden"
          id="file-upload"
        />
        <label
          htmlFor="file-upload"
          className="flex flex-col items-center text-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="mb-2 h-10 w-10 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6h.1a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
            />
          </svg>
          <p className="text-gray-600">
            <span className="font-medium text-blue-600">Click to upload</span>{" "}
            or drag & drop
          </p>
          <p className="mt-1 text-sm text-gray-400">PNG, JPG up to 5MB</p>
        </label>
      </div>

      {/* Display uploaded images */}
    </div>
  );
}
