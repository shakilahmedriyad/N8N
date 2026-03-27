"use client";
import { Button } from "@/components/ui/button";
import {
  useSuspenseWorkflows,
  useCreateWorkflow,
} from "@/feature/workflow/hooks/use-workflow";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export default function WorkflowList() {
  const router = useRouter();
  const workflow = useCreateWorkflow();

  const { data: workflowList } = useSuspenseWorkflows();

  const handleCreateWorkflow = async () => {
    try {
      workflow.mutate(undefined, {
        onSuccess: (data) => {
          // router.push(`/workflows/${data.id}`);
        },
        onError: (error) => {
          toast.error("Error creating workflow:" + error.message);
        },
      });
    } catch (error) {
      console.error("Error creating workflow:", error);
    }
  };
  return (
    <div className="flex flex-col h-full w-full items-center justify-center">
      <Button disabled={workflow.isPending} onClick={handleCreateWorkflow}>
        Create Workflow
      </Button>
      {workflowList?.map((workflow) => (
        <p key={workflow.name}>{workflow.name}</p>
      ))}
    </div>
  );
}
