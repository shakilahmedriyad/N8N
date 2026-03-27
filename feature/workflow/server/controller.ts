import { prisma } from "@/lib/db";
import { protectedProcedure } from "@/trpc/init";
import Randomstring from "randomstring";
import z from "zod";

export const createWorkflow = protectedProcedure.mutation(async ({ ctx }) => {
  const workflow = await prisma.workflow.create({
    data: {
      name: Randomstring.generate(10),
      userId: ctx.auth.user.id,
    },
  });
  return workflow;
});

export const updateWorkflow = protectedProcedure
  .input(
    z.object({
      id: z.string(),
      name: z.string(),
    }),
  )
  .mutation(async ({ ctx, input }) => {
    const workflow = await prisma.workflow.update({
      where: {
        id: input.id,
        userId: ctx.auth.user.id,
      },
      data: {
        name: input.name,
      },
    });
    return workflow;
  });

export const getWorkflow = protectedProcedure
  .input(z.object({ id: z.string() }))
  .query(async ({ ctx, input }) => {
    const workflow = await prisma.workflow.findFirst({
      where: {
        userId: ctx.auth.user.id,
        id: input.id,
      },
    });
    return workflow;
  });

export const deleteWorkflow = protectedProcedure
  .input(z.object({ id: z.string() }))
  .mutation(async ({ ctx, input }) => {
    const workflow = await prisma.workflow.delete({
      where: {
        userId: ctx.auth.user.id,
        id: input.id,
      },
    });
    return workflow;
  });

export const getWorkflows = protectedProcedure.query(async ({ ctx }) => {
  const workflows = await prisma.workflow.findMany({
    where: {
      userId: ctx.auth.user.id,
    },
  });
  return workflows;
});
