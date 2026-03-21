import { caller, HydrateClient, prefetch, trpc } from "@/trpc/server";
import UserList from "./client";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { Suspense } from "react";

export default async function Home() {
  prefetch(trpc.getUser.queryOptions());

  return (
    <main>
      <h1 className="text-lg">Users</h1>
      <HydrateClient>
        <Suspense fallback={<div>Loading...</div>}>
          <UserList />
        </Suspense>
      </HydrateClient>
    </main>
  );
}
