import { useEffect, useState } from "react";
import { Movies } from "../../components/Movies";
import { Head } from "../../Head";
import { api } from "../../services/api";
import { Container, Loading, Wrapper } from "./styles";

export function FilmeDetail() {

    const [filme, setFilme] = useState([]);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function GetMovies() {
            const response = await api.get('/r-api/?api=filmes');
            console.log(response);
            setFilme(response.data)
            setLoading(false)
        }
        GetMovies();
    }, []);

    if (loading === true) {
        return <Loading>Carregando...</Loading>
    }

    return (
        <>
            <Head title="Filmes" />
            <Container>
                <Wrapper>
                    {filme.map(({ id, nome, sinopse, foto }) => {
                        return <Movies key={id} nome={nome} sinopse={sinopse} foto={foto} id={id} />
                    })}
                </Wrapper>
            </Container>
        </>
    )
}