import styled from "styled-components";

export const CardMovie = styled.div`
    display:flex;
    flex-direction:column;
`;

export const Image = styled.img`
    max-width:100%;
`;

export const Title = styled.h1`
    font-size:2.34em;
    margin-bottom: 1.0em;
    text-align:center;
`;

export const Description = styled.p`
    font-size:1.4em;
    text-align:center;
`;

export const Wrapper = styled.div`
    padding:2em 5em 2em 5em;
`;

export const Div = styled.div`
    display: flex;
    justify-content:center;
`;

export const Button = styled.button`
    border:none;
    cursor:pointer;
    background: #e50914;
    line-height: normal;
    padding: 7px 17px;
    font-size: 1rem;
    margin: 0.4rem;
    color: #fff;
    border-radius: 0.2em;
    font-weight: 500;
    -webkit-transition: 0.2s;
    transition: 0.2s;
    width: 25%;

    a {
        color: #fff;
    }
`;