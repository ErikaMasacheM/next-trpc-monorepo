import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { api, trpcClientOptions } from "../src/utils/trpc";
import "../styles/globals.css";
import { useState } from "react";

export default function MyApp({ Component, pageProps }: AppProps) {
    const [queryClient] = useState(() => new QueryClient());
    const [trpcClient] = useState(() => api.createClient(trpcClientOptions));

    return (
        <api.Provider client={trpcClient} queryClient={queryClient}>
            <QueryClientProvider client={queryClient}>
                <Component {...pageProps} />
            </QueryClientProvider>
        </api.Provider>
    );
}
