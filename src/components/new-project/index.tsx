"use client";
import Modal from "@/components/modal"; // Adjust path if necessary
import Logo from "./logo";
import Name from "./name";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createNewProject } from "@/actions/create-new-project";
import { useSelector } from "react-redux";
import { RootState } from "@/state-manager/store";
import { toast } from "sonner";
import Description from "./description";
import { PiSpinnerThin } from "react-icons/pi";

export default function NewProject({
  isNewProjectModalOpen,
  setIsNewProjectModalOpen,
}: {
  isNewProjectModalOpen: boolean;
  setIsNewProjectModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const { logo, name, description } = useSelector(
    (state: RootState) => state.newProjectForm
  );

  const queryClient = useQueryClient();

  const { mutate: handleCreate, isPending } = useMutation({
    mutationFn: createNewProject,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["project-names"] });
      toast.success("New project created");
      setIsNewProjectModalOpen(false);
    },
    onError: (error) => {
      console.error("Failed to create project:", error);
      toast.error("Failed to create project. Please try again.");
    },
  });

  return (
    <Modal
      isOpen={isNewProjectModalOpen}
      onClose={() => setIsNewProjectModalOpen(false)}
    >
      <div className="w-96 h-fit flex flex-col p-4 text-xs gap-6 overflow-y-scroll no-scrollbar">
        <p className="text-lg font-semibold">Create new project</p>
        <div className="flex flex-col gap-4">
          <Logo />
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
              teams: [],
            });
          }}
          disabled={isPending}
        >
          {isPending ? <PiSpinnerThin  className="animate-spin"/> : "Create"}
        </button>
      </div>
    </Modal>
  );
}
