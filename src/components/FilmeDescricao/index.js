import { CardMovie, Title, Image, Description, Wrapper, Div, Button } from "./styles";

export function MovieDescription({ title, image, description }) {
    return (
        <CardMovie>
            <Title>
                {title}
            </Title>

            <Image src={image} alt={title} />
            <Wrapper>
                <Description>
                    {description}
                </Description>
            </Wrapper>

            <Div>
                <Button>
                    <a href={`https://www.youtube.com/results?search_query=trailer+${title}`} target="_blank" >
                        Trailer
                    </a>
                </Button>
            </Div>
        </CardMovie>
    )
}