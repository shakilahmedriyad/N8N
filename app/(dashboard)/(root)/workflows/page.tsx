import WorkflowList from "@/components/workflow/WorkflowList";
import { prefetchWorkflows } from "@/feature/workflow/server/prefeatch";
import { requireAuth } from "@/lib/auth-utils";
import { HydrateClient } from "@/trpc/server";
import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
export default async function WorkflowsPage() {
  await requireAuth();
  prefetchWorkflows();
  return (
    <HydrateClient>
      <ErrorBoundary fallback={<div>Error loading workflows</div>}>
        <Suspense fallback={<div>Loading workflows...</div>}>
          <h1 className="text-xl">Workflows</h1>
          <WorkflowList />
        </Suspense>
      </ErrorBoundary>
    </HydrateClient>
  );
}
