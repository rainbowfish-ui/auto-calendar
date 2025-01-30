"use client";
import Modal from "@/components/modal"; // Adjust path if necessary
import Logo from "./logo";
import Name from "./name";
import AddTeam from "./add-team";

export default function NewProject({
  isNewProjectModalOpen,
  setIsNewProjectModalOpen,
}: {
  isNewProjectModalOpen: boolean;
  setIsNewProjectModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <Modal
      isOpen={isNewProjectModalOpen}
      onClose={() => setIsNewProjectModalOpen(false)}
    >
      <div className="w-[60vw] h-[70vh] flex flex-col p-4 text-xs gap-6 overflow-y-scroll no-scrollbar">
        <p className="text-lg font-semibold">Create new project</p>
        <div className="flex gap-10 items-center">
          <Logo />
          <Name />
        </div>
        <div className="flex gap-10 items-center">
          <AddTeam />
        </div>
        <button className="px-4 py-2 bg-[#F9FAFC] border rounded-md active:scale-95 transition-transform font-semibold">
          Create
        </button>
      </div>
    </Modal>
  );
}
