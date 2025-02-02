"use client";
import Modal from "@/components/modal";
import Name from "./name";
import {
  useIsFetching,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";
import { useSelector } from "react-redux";
import { RootState } from "@/state-manager/store";
import { toast } from "sonner";
import Context from "./context";
import Priority from "./priority";
import DueDate from "./due";
import KeyPoints from "./key-points";
import Status from "./status";
import AssignTo from "./assign-to";
import { createNewTask } from "@/actions/create-new-task";
import { useEffect } from "react";

export default function NewTask({
  isNewTaskModalOpen,
  setIsNewTaskModalOpen,
}: {
  isNewTaskModalOpen: boolean;
  setIsNewTaskModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const newTask = useSelector((state: RootState) => state.newTaskForm);
  const { activeProject } = useSelector((state: RootState) => state.project);

  const queryClient = useQueryClient();

  const isRefetchingCount = useIsFetching({
    queryKey: ["active-projects", activeProject],
  });
  console.log("Refetching count:", isRefetchingCount);
  const isRefetching = isRefetchingCount > 0;

  const { mutate: handleCreate } = useMutation({
    mutationFn: createNewTask,
    onSettled: () => {
      queryClient.refetchQueries({
        queryKey: ["active-projects", activeProject],
      });
    },
    onSuccess: () => {
      toast.success("New task created");
      setIsNewTaskModalOpen(false);
    },
    onError: (error) => {
      console.error("Failed to create task:", error);
      toast.error("Failed to create task");
    },
  });

  const handleClick = (e: React.MouseEvent) => {
    const action = (e.target as HTMLElement).getAttribute("data-action");

    if (action === "create-task") {
      console.log("Creating task:", newTask);
      handleCreate(newTask);
    }
  };

  useEffect(() => {
    if (isRefetching) {
      toast.info("Fetching data...");
    }
  }, [isRefetching]);

  return (
    <Modal
      isOpen={isNewTaskModalOpen}
      onClose={() => setIsNewTaskModalOpen(false)}
    >
      <div className="w-96 h-[90vh] flex flex-col p-4 text-xs gap-6 overflow-y-scroll no-scrollbar justify-between">
        <div>
          <p className="text-lg font-semibold">Add new task</p>
          <div className="flex flex-col gap-2 items-start size-full mt-4">
            <Name />
            <Context />
            <KeyPoints />
            <Status />
            <Priority />
            <DueDate />
            <AssignTo />
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
