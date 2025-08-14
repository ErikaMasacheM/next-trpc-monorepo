import { httpBatchLink } from "@trpc/client";
import { createTRPCReact } from "@trpc/react-query";
import type { AppRouter } from "@acme/api";

export const api = createTRPCReact<AppRouter>();

export function getBaseUrl() {
    if (typeof window !== "undefined") return ""; // browser
    // SSR: ajusta si despliegas en Vercel
    return `http://localhost:3000`;
}

export const trpcClientOptions = {
    links: [
        httpBatchLink({
            url: `${getBaseUrl()}/api/trpc`,
        }),
    ],
};
