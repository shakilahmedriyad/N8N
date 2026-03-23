import { requireUnauth } from "@/lib/auth-utils";

export default async function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  await requireUnauth();
  return <>{children}</>;
}
