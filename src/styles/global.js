import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
     *{
        margin:0;
        padding:0;
        outline:0;
        box-sizing:border-box;
        font-family: 'Roboto', sans-serif;
    }
    html, body, #root {
        min-height:100%;
        font-family: 'Roboto', sans-serif;
    }
    body{
        background: #000000;
        font-size: 14px;
        -webkit-font-smoothing:antialiased !important;
        color: #fff;
    }
    border-style, input, button {
        color:#222;
        font-size: 14px;
        font-family: Arial, Helvetica, sans-serif;
    }
    button{
        cursor: pointer;
    }

    a {
        text-decoration:none;
    }
`;