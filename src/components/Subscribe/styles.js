import styled from "styled-components";

export const FormContainer = styled.div`
    width: 100%;
    margin: 0 auto;
    margin-top:2.0em;

    @media(max-width:667px){
        margin-top:1rem;
    }
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
    justify-content:center;
    margin: 0 auto;

    @media(max-width:667px){
        display:flex;
        flex-wrap:wrap;
    }
`

export const Input = styled.input`
    height: 65px;
    padding: 10px 10px 10px;
    width: 75%;

    @media(max-width:667px){
        height: 45px;
        width: 100%;
    }
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

    @media(max-width:667px){
        margin-top:1rem;
        font-size: 1rem;
        height: 42px
    }

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