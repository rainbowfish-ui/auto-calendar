"use client";
import Modal from "@/components/modal"; // Adjust path if necessary
import Name from "./name";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createNewProject } from "@/actions/create-new-project";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/state-manager/store";
import { toast } from "sonner";
import Context from "./context";
import Priority from "./priority";
import { setPriority, TaskForm } from "@/state-manager/features/new-task-form";

export default function NewTask({
  isNewTaskModalOpen,
  setIsNewTaskModalOpen,
}: {
  isNewTaskModalOpen: boolean;
  setIsNewTaskModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const { name } = useSelector((state: RootState) => state.newTaskForm);
  const dispatch = useDispatch();

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

  const handleClick = (e: React.MouseEvent) => {
    const action = (e.target as HTMLElement).getAttribute("data-action");
    console.log(action);
    console.log("assas");
    if (action === "create-task") {
      handleCreate({ name });
    }
  };

  return (
    <Modal
      isOpen={isNewTaskModalOpen}
      onClose={() => setIsNewTaskModalOpen(false)}
    >
      <div className="w-96 h-[70vh] flex flex-col p-4 text-xs gap-6 overflow-y-scroll no-scrollbar justify-between">
        <div>
          <p className="text-lg font-semibold">Add new task</p>
          <div className="flex flex-col gap-2 items-start size-full mt-4">
            <Name />
            <Context />
            <Priority />
          </div>
        </div>
        <button
          className="px-4 py-2 bg-[#F9FAFC] border rounded-md active:scale-95 transition-transform font-semibold"
          onClick={handleClick}
          data-action="create-task"
        >
          Create
        </button>
      </div>
    </Modal>
  );
}
