"use client";
import React, { useState } from "react";

const DropArea = () => {
  const [showDrop, setShowDrop] = useState(false);
  return (
    <section
      className={`w-full transition-all flex items-center justify-center text-gray-600 ${
        showDrop
          ? "h-36 border border-gray-600 border-dashed p-2 rounded-md"
          : "h-4 opacity-0"
      }`}
      onDragEnter={() => setShowDrop(true)}
      onDragLeave={() => setShowDrop(false)}
      onDrop={(e) => {
        console.log("target", e.target);
        setShowDrop(false);
      }}
      onDragOver={(e) => e.preventDefault()}
    >
      Drop Here
    </section>
  );
};

export default DropArea;
