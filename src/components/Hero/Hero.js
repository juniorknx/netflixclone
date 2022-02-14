import { Container, Subtitle, Title, Wrapper } from "./styles";
import {Subscribe} from '../Subscribe/index';
export function Hero(){
    return (
            <Container>
                <Wrapper>
                    <Title>
                        Filmes, séries e muito mais.
                            <br></br>
                        Sem limites.
                    </Title>

                    <Subtitle>
                        Assista onde quiser. Cancele quando quiser.
                    </Subtitle>
                    <Subscribe 
                    title="Pronto para assistir? Informe seu email para criar ou reiniciar sua assinatura."
                    />
                </Wrapper>
            </Container>
    )
}