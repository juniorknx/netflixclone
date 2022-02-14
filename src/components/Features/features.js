import { CardContainer, CardImage, CardItem, CardSubTitle, CardTitle, Container } from "./styles"

export function Features({title, subtitle, img, alt, reverse}){
    return (
        <Container>
            <CardContainer reverse={reverse}>
                <CardItem>
                    <CardTitle>
                        {title}
                    </CardTitle>

                    <CardSubTitle>
                        {subtitle}
                    </CardSubTitle>
                </CardItem>

                <CardItem>
                    <CardImage
                        src={img}
                        alt={alt}
                    />
                </CardItem>
            </CardContainer>
        </Container>
    )
}