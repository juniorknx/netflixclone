import { Container } from "./styles";
import { Head } from "../../Head";

export function ErrorPage() {
    return (
        <>
        <Head title="404"/>
            <Container>
                <h1>404</h1>
                <h2>Ops.. Página não encontrada.</h2>
            </Container>
        </>
    )
}