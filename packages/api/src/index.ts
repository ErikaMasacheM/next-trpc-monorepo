import { initTRPC } from "@trpc/server";
import { z } from "zod"; // analizador de entrada

// Context (por ahora vacío; luego puedes agregar auth/db)
export type Context = {};
export const createContext = async (): Promise<Context> => ({});

const t = initTRPC.context<Context>().create();
export const router = t.router;
export const publicProcedure = t.procedure;

// Router de ejemplo
export const appRouter = router({
    hello: publicProcedure
        .input(z.object({ name: z.string().optional() }).optional())
        .query(({ input }) => {
            const name = input?.name ?? "Erika";
            return { greeting: `Hola, ${name}! desde tRPC 👋` };
        }),
});

// Tipo para el cliente
export type AppRouter = typeof appRouter;
