"use client";
import Modal from "@/components/modal"; // Adjust path if necessary
import Logo from "./logo";
import Name from "./name";

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
      <div className="w-[60vw] h-[70vh] flex flex-col p-4 text-xs">
        <div className="flex gap-10 items-center">
          <Logo />
          <Name />
        </div>
      </div>
    </Modal>
  );
}
