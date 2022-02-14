import { useEffect, useState } from "react";
import { Movies } from "../../components/Movies";
import { api } from "../../services/api";
import { Container, Wrapper } from "./styles";

export function FilmeDetail(){

    const [filme, setFilme] = useState([]);

    useEffect(()=>{
        async function GetMovies(){
            const response = await api.get('/r-api/?api=filmes');
            console.log(response.data);
            setFilme(response.data)
        }
        GetMovies();
    }, []);

    return (
        <Container>
            <Wrapper>
                {filme.map(({id, nome, sinopse, foto})=>{
                    return <Movies key={id} nome={nome} sinopse={sinopse} foto={foto} id={id} />
                })}
            </Wrapper>
        </Container>
    )
}