import { inngest } from "./client";

export const helloWorld = inngest.createFunction(
  { id: "hello-world", triggers: [{ event: "test/hello.world" }] },
  async ({ event, step }) => {
    await step.sleep("Initializing the function", "10s");

    await step.sleep("Calling the back-end", "10s");

    await step.sleep("Finalizing", "10s");

    return { message: `Hello ${event.data.email}!` };
  },
);
