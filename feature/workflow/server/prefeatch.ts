import { prefetch, trpc } from "@/trpc/server";
import { inferInput } from "@trpc/tanstack-react-query";

type input = inferInput<typeof trpc.workflow.getWorkflows>;

export const prefetchWorkflows = (params: input) => {
  prefetch(trpc.workflow.getWorkflows.queryOptions(params));
};
