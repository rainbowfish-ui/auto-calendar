import Image from "next/image";
import React from "react";
import { BsCcCircle } from "react-icons/bs";
import { IoMdMic } from "react-icons/io";
import { MdCallEnd } from "react-icons/md";
import { WiStars } from "react-icons/wi";

const MeetingNotes = () => {
  return (
    <div className="w-full min-h-screen flex items-center justify-start flex-col">
      <div className="h-full w-full bg-gradient-to-t from-[#f5f5f5] to-white min-h-screen flex items-center justify-between flex-col rounded-3xl gap-3 text-center pt-4 pb-8">
        <div className="flex flex-col gap-2">
          <h4 className="text-7xl font-semibold gradient_text">
            We take your notes, <br />
            you run the show.
          </h4>
          <p className="text-sm ">
            Get insights from multiple meetings in seconds. EvoAI provides
            customizable <br />
            insights and analytics to help you make better decisions.
          </p>
        </div>
        <div className="size-full flex items-center justify-center">
          <div className="w-[90%] h-[26rem] rounded-2xl bg-white p-2 flex items-center justify-between gap-4 relative text-xs">
            <div className="absolute -left-6 top-0 w-72 h-40 rounded-lg bg-white shadow-lg -rotate-12 z-10 border p-2 text-[#4b4b4b]">
              <p className="text-base font-semibold text-start">
                Speaker insights
              </p>
              <div className="w-full h-10 bg-[#F5F5F5] rounded-md flex items-center px-2 text-xs justify-start gap-2 text-nowrap">
                <p>show speakers on video timeline</p>
                <input type="checkbox" />
              </div>
              <div className="text-[0.5rem] mt-1 flex flex-wrap gap-2">
                <div className="size-fit p-1 bg-[#eaeaea] rounded-full flex items-center gap-1 pr-2">
                  <span className="p-1 rounded-full bg-[#f5f5f5]">WPM</span>
                  160
                </div>
                <div className="size-fit p-1 bg-[#eaeaea] rounded-full flex items-center gap-1 pr-2">
                  <span className="p-1 rounded-full bg-[#f5f5f5]">
                    Talk time
                  </span>
                  80%
                </div>
                <div className="size-fit p-1 bg-[#eaeaea] rounded-full flex items-center gap-1 pr-2">
                  <span className="p-1 rounded-full bg-[#f5f5f5]">Fillers</span>
                  10%
                </div>
                <div className="size-fit p-1 bg-[#eaeaea] rounded-full flex items-center gap-1 pr-2">
                  <span className="p-1 rounded-full bg-[#f5f5f5]">
                    Longest monologue
                  </span>
                  20 mins
                </div>
              </div>
            </div>
            <div className="absolute -right-6 -top-6 w-fit h-12 rounded-lg bg-white shadow-lg rotate-12 px-4 text-nowrap border flex items-center justify-center text-[#4b4b4b] gap-1">
              <WiStars size={26} />
              <p>AI task manager to boost your productivity</p>
            </div>
            <div className="h-full w-[70%] rounded-xl overflow-hidden relative">
              <Image
                src="/meeting-participant-1.png"
                alt="meeting-participant"
                width={1}
                height={1}
                className="size-full object-cover"
              />
              <div className="absolute flex items-center justify-end flex-col size-full left-0 top-0 p-2">
                <div className="w-fit h-12 flex text-white items-center justify-start p-4 font-semibold gap-4">
                  <div className="bg-[rgba(0,0,0,0.4)] rounded-full p-3 hover:scale-105 transition-transform">
                    <IoMdMic />
                  </div>
                  <div className="bg-[rgba(0,0,0,0.4)] rounded-full p-3 hover:scale-105 transition-transform">
                    <BsCcCircle />
                  </div>
                  <div className="bg-[rgba(220,20,60,0.8)] rounded-full p-3 hover:scale-105 transition-transform">
                    <MdCallEnd />
                  </div>
                </div>
              </div>
            </div>
            <div className="h-full w-[30%] rounded-xl flex flex-col gap-4 items-center">
              <div className="size-full rounded-lg overflow-hidden">
                <Image
                  src="/meeting-participant-2.png"
                  alt="meeting-participant"
                  width={1}
                  height={1}
                  className="size-full object-cover"
                />
              </div>
              <div className="size-full rounded-lg overflow-hidden">
                <Image
                  src="/meeting-participant-3.png"
                  alt="meeting-participant"
                  width={1}
                  height={1}
                  className="size-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MeetingNotes;
