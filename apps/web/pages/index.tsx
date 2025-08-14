import { api } from "../src/utils/trpc";

export default function Home() {
    const { data, isLoading } = api.hello.useQuery({ name: "Condorsoft" });

    return (
        <main style={{ padding: 24 }}>
            <h1>Next.js + tRPC (Monorepo)</h1>
            <p>{isLoading ? "Cargando..." : data?.greeting}</p>
        </main>
    );
}
