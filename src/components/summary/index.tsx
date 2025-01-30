"use client";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React from "react";

const Summary = () => {
  const pathname = usePathname();
  return (
    <div className="w-72 h-screen flex flex-col pt-10 overflow-y-scroll no-scrollbar pl-4 gap-2 shrink-0">
      <h3 className="text-lg font-semibold">AI Summary</h3>
      {pathname === "/calendar" && (
        <div>
          <div className="w-full h-fit flex flex-wrap gap-1">
            <Image
              className="size-10 rounded-full object-cover border"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-C_UAhXq9GfuGO452EEzfbKnh1viQB9EDBQ&s"
              width={1}
              height={1}
              alt="img"
            />
            <Image
              className="size-10 rounded-full object-cover border "
              src="https://cdn3.pixelcut.app/7/20/uncrop_hero_bdf08a8ca6.jpg"
              width={1}
              height={1}
              alt="img"
            />
            <div className="size-10 rounded-full border flex items-center justify-center font-semibold shrink-0">
              AG
            </div>
          </div>
          <div className="text-xs ">
            Today's calls cover project updates, client feedback, design
            reviews, vendor onboarding, and leadership discussions on strategy
            and resource planning.
          </div>
          <div className="size-full flex flex-col gap-4 mb-60">
            <div className="size-fit">
              <h4 className="text-md font-semibold">9:00 AM: Team Stand up</h4>
              <div className="text-xs">
                <p>
                  <span className="font-semibold">Agenda: </span>
                  Project updates, task allocation, and blockers discussion.
                </p>
                <div>
                  <p className="font-semibold">Key Points:</p>
                  <ol className="list-disc pl-4">
                    <li>Progress updates on sprint goals.</li>
                    <li>
                      Highlighted potential delays due to resource constraints.
                    </li>
                  </ol>
                </div>
              </div>
            </div>
            <div className="size-fit">
              <h4 className="text-md font-semibold">11:00 AM: Client Call</h4>
              <div className="text-xs">
                <p>
                  <span className="font-semibold">Participants: </span>
                  Account Manager, Client Team
                </p>
                <p>
                  <span className="font-semibold">Agenda: </span>
                  Review project deliverables, gather feedback, and align on
                  next steps.
                </p>
                <div>
                  <p className="font-semibold">Key Points:</p>
                  <ol className="list-disc pl-4">
                    <li>Feedback on the current deliverables.</li>
                    <li>Extend timeline for additional features.</li>
                  </ol>
                </div>
              </div>
            </div>
            <div className="size-fit">
              <h4 className="text-md font-semibold">2:00 PM: Design Review</h4>
              <div className="text-xs">
                <p>
                  <span className="font-semibold">Participants: </span>
                  Participants: Design and Development Teams
                </p>
                <p>
                  <span className="font-semibold">Agenda: </span>
                  Review UI/UX changes and finalize designs for upcoming
                  release.
                </p>
                <div>
                  <p className="font-semibold">Key Points:</p>
                  <ol className="list-disc pl-4">
                    <li>Approved updated designs for mobile responsiveness.</li>
                    <li>
                      Minor tweaks suggested for color palette consistency.
                    </li>
                  </ol>
                </div>
              </div>
            </div>
            <div className="size-fit">
              <h4 className="text-md font-semibold">
                6:00 PM: Leadership Sync up
              </h4>
              <div className="text-xs">
                <p>
                  <span className="font-semibold">Participants: </span>
                  Executive Team
                </p>
                <p>
                  <span className="font-semibold">Agenda: </span>
                  Strategic goals for Q1 and resource planning.
                </p>
                <div>
                  <p className="font-semibold">Key Points:</p>
                  <ol className="list-disc pl-4">
                    <li>Resource allocation for priority projects.</li>
                    <li>Emphasis on improving inter-team collaboration.</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {pathname === "/tasks" && (
        <div className="size-full flex flex-col text-xs gap-2 h-screen overflow-y-scroll pb-60 no-scrollbar">
          <div>
            <p>
              <span className="font-semibold">
                Design Team (Due: March 10, 2025):{" "}
              </span>
              Focused on finalizing UI components and designing mobile layouts,
              ensuring consistency, accessibility, and responsiveness.
            </p>
            <p>
              <span className="font-semibold">
                Frontend Team (Due: March 30, 2025):{" "}
              </span>
              Developing UI components, core pages, integrating APIs, and
              writing unit tests to ensure functionality and performance.
            </p>
            <p>
              <span className="font-semibold">
                Backend Team (Due: March 30, 2025):{" "}
              </span>
              Refactoring API endpoints, optimizing database queries for
              efficiency, security, and scalability.
            </p>
            <p>
              <span className="font-semibold">
                QA Team (Due: March 22, 2025):{" "}
              </span>
              Conducting functional testing to identify and report critical
              bugs, ensuring a smooth user experience.
            </p>
          </div>
          <div className="flex flex-col gap-0.5">
            <p className="text-base font-semibold">Last Updates & Progress:</p>
            <p>
              <span className="font-semibold">Finalizing UI Components</span>-
              In Progress ✅ (Last update: Jan 20, 2025)
            </p>
            <p>
              <span className="font-semibold">API Schema Discussion</span> -
              <span className="text-red-500">
                Not Started ⏳ (Last update: Jan 16, 2025)
              </span>
            </p>
            <p>
              <span className="font-semibold">
                Conducting Functional Testing -
              </span>
              <span className="text-red-500">
                In Progress 🔍 (Last update: Jan 12, 2025)
              </span>
            </p>
          </div>
          <div className="size-full">
            <p className="font-semibold text-base">AI Suggestions</p>
            <p>
              <span className="font-semibold">Parallel Execution: </span>
              Backend refactoring & API dev should run simultaneously with UI
              implementation.
            </p>
            <p>
              <span className="font-semibold">High-Priority Focus: </span>
              Finish UI Components by Feb 15 → Speeds up frontend dev. Complete
              API Integration by March 10 → Allows early testing. Start
              Functional Testing by March 15 → Avoids last-minute bug fixes.
            </p>
            <p>
              <span className="font-semibold">
                Daily Check-ins & Risk Management:
              </span>
              15-min daily standups to resolve blockers fast. Assign a dedicated
              bug-fix team to tackle issues immediately.
            </p>
            <p>
              <span className="font-semibold">
                Team Adjustments & Support:{" "}
              </span>
              Add 1 more frontend dev if possible.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Summary;
