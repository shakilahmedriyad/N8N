import { requireAuth } from "@/lib/auth-utils";

export default async function WorkflowsPage() {
  await requireAuth();
  return (
    <div className="flex h-full w-full items-center justify-center">
      <h1 className="text-2xl font-bold">Workflows</h1>
    </div>
  );
}
