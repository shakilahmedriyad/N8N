"use client";
import { useTRPC } from "@/trpc/client";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export function useSuspenseWorkflows() {
  const trpc = useTRPC();
  return useQuery(trpc.workflow.getWorkflows.queryOptions());
}

export function useCreateWorkflow() {
  const trpc = useTRPC();
  const queryClient = useQueryClient();
  return useMutation(
    trpc.workflow.createWorkflow.mutationOptions({
      onSuccess: () => {
        queryClient.invalidateQueries(
          trpc.workflow.getWorkflows.queryOptions(),
        );
      },
    }),
  );
}
