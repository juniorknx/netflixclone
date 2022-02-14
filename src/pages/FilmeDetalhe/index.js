import { useParams } from "react-router-dom"
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { MovieDescription } from "../../components/FilmeDescricao";
import { Container, Wrapper } from "./styles";

export function MovieDetail() {

    const { id } = useParams();

    const [movie, setMovie] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function GetMovieDetails() {
            const response = await api.get(`/r-api/?api=filmes/${id}`)
            console.log(response.data);
            setMovie(response.data);
            setLoading(false)
        }
        GetMovieDetails();
    }, [id])

    if (loading === true) {
        return <h1>Carregando..</h1>
    }

    const { nome, sinopse, foto } = movie;

    return (
        <>
            <Container>
                <Wrapper>
                    <MovieDescription
                        key={id}
                        title={nome}
                        image={foto}
                        description={sinopse}
                    />
                </Wrapper>
            </Container>
        </>
    )
}