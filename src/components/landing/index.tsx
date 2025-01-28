import React from "react";
import Hero from "./hero";
import Navbar from "./navbar";
import MeetingNotes from "./meeting-notes";

const LandingPage = () => {
  return (
    <>
      <Navbar />
      <div className="w-full min-h-screen flex items-center justify-start flex-col px-40">
        <div className="size-full dashed-vertical-border flex items-center justify-start flex-col">
          <Hero />
          <MeetingNotes />
          <div className="size-96"></div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
