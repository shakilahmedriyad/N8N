import { createTRPCRouter } from "@/trpc/init";
import {
  createWorkflow,
  deleteWorkflow,
  getWorkflow,
  getWorkflows,
  updateWorkflow,
} from "./controller";

export const workflowRouter = createTRPCRouter({
  createWorkflow,
  updateWorkflow,
  getWorkflow,
  deleteWorkflow,
  getWorkflows,
});
