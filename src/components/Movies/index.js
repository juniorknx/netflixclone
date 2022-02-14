import { Card, Image,Subtitle, Sinopse } from './styles';
import { Link } from 'react-router-dom';

export function Movies({id,nome, sinopse, foto}) {
    return (
        <>
            <Card>
                <Image src={foto} alt={nome} />
                <Subtitle>
                    {nome}
                </Subtitle>
                <Sinopse>
                    {sinopse}
                </Sinopse>
                <Link to={`${id}`}>
                    Ver Detalhes
                </Link>
            </Card>
        </>
    )
}