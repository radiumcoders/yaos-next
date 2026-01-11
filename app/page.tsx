import Container from "@/components/core/container";
import { client } from "@/lib/eden";

export default async function Page() {
    const message = await client.hello.get()
return (
    <Container classname="mt-2">
        <h1>Component Examples</h1>
        <p>{message.data}</p>
    </Container>
);
}