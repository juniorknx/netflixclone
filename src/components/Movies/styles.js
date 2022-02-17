import styled from "styled-components";

export const Card = styled.div`
    display:grid;
    place-items:center;
    background: hsla(0,0%,44.3%,.1411764705882353);
    padding: 2rem 0rem 2rem 0rem;
    border-radius:5px;
    align-content:stretch;
    
    &:hover{
        background: hsla(0,0%,96.1%,.0784313725490196);
    }

    a {
        background: #e50914;
        line-height: normal;
        padding: 7px 17px;
        font-size: 0.9rem;
        margin: 1.1rem;
        color: #fff;
        border-radius: 0.2em;
        font-weight: 500;
        -webkit-transition: 0.2s;
        transition: 0.2s;
    }
`;

export const Image = styled.img`
    width: 305px;
`;

export const Subtitle = styled.h4`
    font-size:1.260rem;
    margin:1em 1em;
`;

export const Sinopse = styled.p`
    padding: 0rem 1rem 2rem 1rem;
    color: #e1e1e1;
`;