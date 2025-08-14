import { initTRPC } from "@trpc/server";
import { z } from "zod"; // analizador de entrada
import type { PrismaClient } from '@prisma/client';
import { prisma } from '../../db';

// Context (por ahora vacío; luego puedes agregar auth/db)
export type Context = {
    prisma: PrismaClient;
    // user?: { id: string } // si luego agregas auth
};
export const createContext = async (): Promise<Context> => ({
    prisma,
});

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
