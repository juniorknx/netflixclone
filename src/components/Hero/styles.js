import herobg from '../../assets/img/herobg.jpeg';
import styled from "styled-components";

export const Container = styled.section`
    background: rgba(0,0,0,.64);
    background-image:url(${herobg});
    background-blend-mode: multiply;
    width: 100%;
    height: 100%;
    object-fit:cover;
    border-bottom:8px solid #222;
    background-size:cover;

    @media(max-width:667px){
        background-size:cover;
    }
`;

export const Wrapper = styled.div`
    max-width: 750px;
    margin: 0 auto;
    display:flex;
    justify-content:center;
    height:70vh;
    align-items:center;
    flex-direction:column;
    padding:2rem 1rem 2rem;

    @media(max-width:667px){
        padding: 2rem 2rem;
        height: 56vh;
    }
`;

export const Title = styled.h1`
    color:#fff;
    font-size:3.525rem;
    text-align:center;
    font-weight:600;

    @media(max-width:667px){
        font-size:2.7rem;
        margin-bottom:1rem;
    }
`;

export const Subtitle = styled.h2`
    color: #fff;
    font-size:1.625rem;
    margin: 1rem auto;
    font-weight:400;

    @media(max-width:667px){
        text-align:center;
        font-size: 1.11rem;
        margin: 1rem auto;
    }
`;

export const FormContainer = styled.div`
    width: 100%;
    margin: 0 auto;
    padding:2rem 1rem 2rem;
`;

export const FormTitle = styled.h3`
    text-align:center;
    padding: 0.8em;
    font-weight:400;
    max-width: none;
    padding-bottom: 20px;
    font-size: 1.1rem;
`;

export const FormGroup = styled.form`
    display: flex;
`

export const Input = styled.input`
    height: 65px;
    padding: 10px 10px 10px;
    width: 75%;
`;

export const FormButton = styled.button`
    color: #fff;
    background-color: #e50914;
    font-size: 1.625rem;
    border: none;
    padding: 0.6em 0.6em 0.6em 0.6em;
    -webkit-transition: 0.2s;
    transition: 0.2s;
    border-left: solid 1px #333;
    height: 65px;
    margin-left: -5px;
    border-radius:4px;

    &:hover {
        background: ##ff000d;
        filter: brightness(0.9);
    }
`;

export const MessageContainer = styled.div`
    color: #ffa00a;
    text-align: left;
    margin-bottom: -6px;
    padding: 6px 3px;
    font-size: 15px;
`;