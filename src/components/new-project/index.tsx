"use client";
import Modal from "@/components/modal"; // Adjust path if necessary

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
      <div className="w-96 h-80 "></div>
    </Modal>
  );
}
