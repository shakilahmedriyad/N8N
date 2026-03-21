import { prisma } from "@/lib/db";

export default async function Home() {
  const user = await prisma.user.findMany();
  console.log(user);
  return (
    <main>
      <h1 className="text-2xl">Hello world!</h1>
    </main>
  );
}
