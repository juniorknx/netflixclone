import styled from "styled-components";

export const Container = styled.section`
    padding: 70px 45px;
    border-bottom:8px solid #222;

    @media(max-width:667px){
        padding: 70px 40px;
    }
`;

export const CardContainer = styled.div`
    max-width: 1120px;
    margin: 0 auto;
    display:flex;
    margin: 0 auto;
    align-items:center;
    justify-content:space-between;
    flex-wrap:wrap;
    flex-direction: ${props => props.reverse ? "row-reverse" : "row"};
`;

export const CardItem = styled.div`
    width: 50%;
    height:100%;
    flex: 0 1 auto;
    padding: 0 3rem 0 0;
    z-index:3;

    @media(max-width:667px){
        width: 100%;
        text-align:center;
        padding: 0px;
    }
`;

export const CardTitle = styled.h1`
    font-size: 3.125rem;
    line-height: 1.1;
    margin-bottom: 0.5rem;

    @media(max-width:667px){
        font-size:1.625rem;
    }
`;

export const CardSubTitle = styled.h2`
    font-size: 1.625rem;
    font-weight: 400;
    margin: 0.75em 0 0.25em;

    @media(max-width:667px){
        font-size:1.125rem;
    }
`;

export const CardImage = styled.img`
    max-width: 100%;
    height: auto;
    border: 0;
`;