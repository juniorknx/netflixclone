import { Link } from "react-router-dom"
import { Container, HeaderNav, LogoIcon, Navigation } from "./styles"
import logoIcon from '../../assets/img/logo.svg'

export function Header(){
    return (
        <>
        <Container>
            <HeaderNav>
                <Link to="/">
                    <LogoIcon src={logoIcon} alt="logo" />
                </Link>

                <Navigation>
                    <Link to="/">
                        Home
                    </Link>

                    <Link red to="/filme">
                        Filmes
                    </Link>
                </Navigation>
            </HeaderNav>
        </Container>
        </>
    )
}