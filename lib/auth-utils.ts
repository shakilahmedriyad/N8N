import { headers } from "next/headers";
import { auth } from "./auth";
import { redirect } from "next/navigation";

export const getSession = async () => {
  return auth.api.getSession({
    headers: await headers(),
  });
};

export const requireAuth = async () => {
  const session = await getSession();

  if (!session) {
    redirect("/sign-in");
  }
  return session;
};

export const requireUnauth = async () => {
  const session = await getSession();

  if (session) {
    redirect("/");
  }
  return session;
};
