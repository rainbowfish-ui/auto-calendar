"use client";
import Modal from "@/components/modal"; // Adjust path if necessary

export default function NewTeam({
  isNewTeamModalOpen,
  setIsNewTeamModalOpen,
}: {
  isNewTeamModalOpen: boolean;
  setIsNewTeamModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <Modal
      isOpen={isNewTeamModalOpen}
      onClose={() => setIsNewTeamModalOpen(false)}
    >
      <div></div>
    </Modal>
  );
}
