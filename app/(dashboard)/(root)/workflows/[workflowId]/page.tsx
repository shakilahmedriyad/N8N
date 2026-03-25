type params = Promise<{
  workflowId: string;
}>;

export default async function WorkflowPage({ params }: { params: params }) {
  const { workflowId } = await params;
  return (
    <div className="flex h-full w-full items-center justify-center">
      <h1 className="text-2xl font-bold">Workflows : {workflowId}</h1>
    </div>
  );
}
