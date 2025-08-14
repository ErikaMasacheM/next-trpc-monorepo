import { createNextApiHandler } from "@trpc/server/adapters/next";
import { router, createContext } from "@monorepo/api";

export type AppRouter = typeof appRouter;

export default createNextApiHandler({
    router: appRouter,
    createContext
});
