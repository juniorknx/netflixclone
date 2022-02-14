import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.header`
    max-width: 1300px;
    margin: 0 auto;
    padding:1.4rem 1rem 1.4rem;
`;

export const HeaderNav = styled.div`
    display: flex;
    justify-content:space-between;
    align-items:center;
`;

export const Navigation = styled.nav`
    a {
        background:red;
        line-height:normal;
        padding: 7px 17px;
        font-size:1rem;
        margin: 0.4rem;
        color:#fff;
        border-radius:0.2em;
        font-weight:500;
        transition:0.2s;

        &:hover {
            background: #e50914cf;
            filter: brightness(0.9);
        }
    }
`;

export const LogoIcon = styled.img`
    max-width:100%;
`;