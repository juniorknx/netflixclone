import styled from "styled-components";
import { keyframes } from "styled-components";

const DetailAnimation = keyframes`
  0%    {opacity: 0; transform: translateX(-10px)}
  100%  {opacity: 1; transform: translateX(0)}
}
`

export const DetailComponent = styled.details`
    margin: 0.5em;
    font-weight: 400;
    position: relative;
    width: 100%;
    border: 0;
    display: block;
    text-align: left;
    background: #303030;
    font-size: 1.7em;
    padding: 1em 1em 1em 2em;
    cursor:pointer;
    transition:height 3s ease-in;

    &[open]{
        animation: ${DetailAnimation} .5s ease-in-out;
    }

    @media(max-width:667px){
        width: 95%;
        font-size:1.2em;
    }
`;

export const Faq = styled.summary`
    animation: ${DetailAnimation} .5s ease-in-out;
`;

export const Resume = styled.p`
    margin-top:1em;
`;