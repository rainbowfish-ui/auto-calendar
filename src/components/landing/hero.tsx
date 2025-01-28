import React from "react";
import HeroBackground from "./hero-background";

import { Archivo_Black } from "next/font/google";
import Link from "next/link";

const vibes = Archivo_Black({
  weight: ["400"],
  subsets: ["latin-ext"],
});

const Hero = () => {
  return (
    <div className="relative size-full h-fit py-32 overflow-hidden flex items-center justify-center">
      <HeroBackground />
      <div className="size-full flex flex-col items-center justify-center -mt-12 gap-2">
        <p className="flex items-center justify-center gap-4 px-6 py-1 rounded-full text-sm text-orange-500">
          <span className="flex items-center justify-center relative">
            <span className="absolute bg-orange-500 size-4 rounded-full animate-ping" />
            <span className="bg-orange-500 size-2 rounded-full absolute" />
          </span>
          You are missing out
        </p>
        <h2
          className={`text-8xl font-semibold text-center uppercase ${vibes.className}`}
        >
          AI isn't the <br /> future
        </h2>
        <h3 className={`text-5xl uppercase font-semibold  ${vibes.className}`}>
          It's happening
          <span className="bg-teal-500 text-white px-2">now!!</span>
        </h3>
        <Link
          href="/tasks"
          className="px-6 py-2 rounded-full shadow-md bg-[#161616] text-white font-semibold text-xl mt-6 hover:scale-105 transition-transform"
        >
          Get started
        </Link>
        <p className="text-sm text-center mt-2">
          Supercharge your productivity with EvoAI, <br />
          designed to work smarter, faster, and for you!
        </p>
      </div>
    </div>
  );
};

export default Hero;
