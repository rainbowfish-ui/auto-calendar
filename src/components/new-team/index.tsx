"use client";
import Modal from "@/components/modal"; // Adjust path if necessary
import Name from "./name";
import Context from "./context";
import { toast } from "sonner";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createNewTeam } from "@/actions/create-new-team";
import { useSelector } from "react-redux";
import { RootState } from "@/state-manager/store";
import { isPending } from "@reduxjs/toolkit";
import { PiSpinnerThin } from "react-icons/pi";

export default function NewTeam({
  isNewTeamModalOpen,
  setIsNewTeamModalOpen,
}: {
  isNewTeamModalOpen: boolean;
  setIsNewTeamModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const { name, context } = useSelector(
    (state: RootState) => state.newTeamForm
  );
  const { activeProject } = useSelector((state: RootState) => state.project);
  const queryClient = useQueryClient();

  const { mutate: handleCreate, isPending } = useMutation({
    mutationFn: createNewTeam,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["active-project", activeProject],
      });
      toast.success("New team created");
      setIsNewTeamModalOpen(false);
    },
    onError: (error) => {
      console.error("Failed to create team:", error);
      toast.error("Failed to create team. Please try again.");
    },
  });

  return (
    <Modal
      isOpen={isNewTeamModalOpen}
      onClose={() => setIsNewTeamModalOpen(false)}
    >
      <div className="w-96 h-fit flex flex-col p-4 text-xs gap-6 overflow-y-scroll no-scrollbar">
        <p className="text-lg font-semibold">Create new team</p>
        <div className="flex flex-col gap-4">
          <Name />
          <Context />
        </div>
        <button
          className="py-2 bg-[#F9FAFC] border rounded-md active:scale-95 transition-transform font-semibold"
          onClick={(e) => {
            handleCreate({
              projectId: activeProject,
              name,
              context,
            });
          }}
          disabled={isPending}
        >
          {isPending ? <PiSpinnerThin className="animate-spin" /> : "Create"}
        </button>
      </div>
    </Modal>
  );
}
