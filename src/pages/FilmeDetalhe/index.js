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

    function salvaFilme() {
        const minhaLista = localStorage.getItem('filmes');
        let filmesSalvos = JSON.parse(minhaLista) || [];
        //Verifica se o filme ja existe
        const hasFilme = filmesSalvos.some((filmeSalvo) => filmeSalvo.id === movie.id)
        if(hasFilme){
            alert('Ja possui esse filme salvo');
            return;
        }

        filmesSalvos.push(movie);
        localStorage.setItem('filmes', JSON.stringify(filmesSalvos))
        alert('filme salvo!!');
    }

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
                        saveMovie={salvaFilme}
                    />
                </Wrapper>
            </Container>
        </>
    )
}