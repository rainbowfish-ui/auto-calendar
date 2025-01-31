"use client";
import Modal from "@/components/modal"; // Adjust path if necessary
import Name from "./name";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createNewProject } from "@/actions/create-new-project";
import { useSelector } from "react-redux";
import { RootState } from "@/state-manager/store";
import { generateRandomId } from "@/utils/generate-random-id";
import { toast } from "sonner";

export default function NewTask({
  isNewTaskModalOpen,
  setIsNewTaskModalOpen,
}: {
  isNewTaskModalOpen: boolean;
  setIsNewTaskModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const { logo, name, teams } = useSelector(
    (state: RootState) => state.newProjectForm
  );

  const queryClient = useQueryClient();

  const { mutate: handleCreate } = useMutation({
    mutationFn: createNewProject,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["project-names"] });
      toast.success("New task created");
      setIsNewTaskModalOpen(false);
    },
    onError: (error) => {
      console.error("Failed to create project:", error);
    },
  });

  return (
    <Modal
      isOpen={isNewTaskModalOpen}
      onClose={() => setIsNewTaskModalOpen(false)}
    >
      <div className="w-[60vw] h-[70vh] flex flex-col p-4 text-xs gap-6 overflow-y-scroll no-scrollbar justify-between">
        <div>
          <p className="text-lg font-semibold">Add new task</p>
          <div className="flex gap-10 items-center mt-4">
            <Name />
          </div>
        </div>
        <div className="flex gap-10 items-center"></div>
        <button
          className="px-4 py-2 bg-[#F9FAFC] border rounded-md active:scale-95 transition-transform font-semibold"
          onClick={() => {
            const id = generateRandomId({ length: 6 });
            handleCreate({ name, teams, id });
          }}
        >
          Create
        </button>
      </div>
    </Modal>
  );
}
