"use client";
import React, { useState } from "react";

const DropArea = ({
  index,
  teamIndex,
  onDrop,
  activeCard,
}: {
  teamIndex: number;
  index: number;
  onDrop: any;
  activeCard: any;
}) => {
  const [showDrop, setShowDrop] = useState(false);
  return (
    <section
      className={`w-full transition-all flex items-center justify-center text-gray-600 ${
        showDrop
          ? "h-36 border border-gray-600 border-dashed p-2 rounded-md"
          : "h-5 opacity-0"
      }`}
      onDragEnter={() => setShowDrop(true)}
      onDragLeave={() => setShowDrop(false)}
      onDrop={(e) => {
        onDrop({ ...activeCard }, { toTeam: teamIndex, index });
        setShowDrop(false);
      }}
      onDragOver={(e) => e.preventDefault()}
    >
      Drop Here
    </section>
  );
};

export default DropArea;
