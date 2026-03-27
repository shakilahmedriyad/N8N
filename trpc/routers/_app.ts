import { workflowRouter } from "@/feature/workflow/server/routers";
import { createTRPCRouter } from "../init";
export const appRouter = createTRPCRouter({
  workflow: workflowRouter,
});
// export type definition of API
export type AppRouter = typeof appRouter;
