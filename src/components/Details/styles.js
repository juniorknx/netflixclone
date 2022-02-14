import styled from "styled-components";

export const Container = styled.section`
    padding: 70px 45px;
    border-bottom: 8px solid #222;

    @media(max-width:667px){
        padding: 70px 1em;
    }
`;

export const Wrapper = styled.div`
    padding: 30px 14em;

    @media(min-width:1920px){
        padding: 20px 30em;
}

@media(max-width:667px){
        padding: 20px 0em;
    }
`;

export const Title = styled.h1`
    font-size: 3.125rem;
    line-height: 1.1;
    margin-bottom: 0.5rem;
    text-align:center;

    @media(max-width:667px){
        font-size:1.795rem;
    }
`;