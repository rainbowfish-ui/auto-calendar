import Image from "next/image";
import React from "react";

const Summary = () => {
  return (
    <div className="w-96 h-screen flex flex-col pt-8 overflow-y-scroll no-scrollbar pl-4 gap-2">
      <h3 className="text-lg font-semibold">Summary</h3>
      <div className="w-full h-fit flex flex-wrap gap-1">
        <Image
          className="size-10 rounded-full object-cover border"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-C_UAhXq9GfuGO452EEzfbKnh1viQB9EDBQ&s"
          width={1}
          height={1}
          alt="img"
        />
        <Image
          className="size-10 rounded-full object-cover border"
          src="https://cdn3.pixelcut.app/7/20/uncrop_hero_bdf08a8ca6.jpg"
          width={1}
          height={1}
          alt="img"
        />
        <div className="size-10 rounded-full border flex items-center justify-center font-semibold">
          AG
        </div>
      </div>
      <div className="text-xs">
        Today's calls cover project updates, client feedback, design reviews,
        vendor onboarding, and leadership discussions on strategy and resource
        planning.
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
              Review project deliverables, gather feedback, and align on next
              steps.
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
              Review UI/UX changes and finalize designs for upcoming release.
            </p>
            <div>
              <p className="font-semibold">Key Points:</p>
              <ol className="list-disc pl-4">
                <li>Approved updated designs for mobile responsiveness.</li>
                <li>Minor tweaks suggested for color palette consistency.</li>
              </ol>
            </div>
          </div>
        </div>
        <div className="size-fit">
          <h4 className="text-md font-semibold">6:00 PM: Leadership Sync up</h4>
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
  );
};

export default Summary;
