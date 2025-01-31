"use client";
import Modal from "@/components/modal"; // Adjust path if necessary
import Name from "./name";
import Description from "./description";
import { toast } from "sonner";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createNewTeam } from "@/actions/create-new-team";
import { useSelector } from "react-redux";
import { RootState } from "@/state-manager/store";

export default function NewTeam({
  isNewTeamModalOpen,
  setIsNewTeamModalOpen,
}: {
  isNewTeamModalOpen: boolean;
  setIsNewTeamModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const { name, description } = useSelector(
    (state: RootState) => state.newTeamForm
  );
  const queryClient = useQueryClient();

  const { mutate: handleCreate } = useMutation({
    mutationFn: createNewTeam,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["project-names"] });
      toast.success("New project created");
      setIsNewTeamModalOpen(false);
    },
    onError: (error) => {
      console.error("Failed to create project:", error);
      toast.error("Failed to create project. Please try again.");
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
          <Description />
        </div>
        <button
          className="py-2 bg-[#F9FAFC] border rounded-md active:scale-95 transition-transform font-semibold"
          onClick={(e) => {
            e.preventDefault();
            handleCreate({
              name,
              description,
            });
          }}
        >
          Create
        </button>
      </div>
    </Modal>
  );
}
