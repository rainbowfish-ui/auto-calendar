import AiAssistant from "@/components/ai-assistant";
import Sidebar from "@/components/sidebar";
import Summary from "@/components/summary";
import React from "react";

const ProtectedLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative w-full h-screen overflow-hidden flex">
      <Sidebar />
      <AiAssistant />
      <div className="w-full h-screen overflow-hidden flex pr-10">
        <Summary />
        {children}
      </div>
    </div>
  );
};

export default ProtectedLayout;
