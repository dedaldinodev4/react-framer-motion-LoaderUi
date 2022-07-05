import { createGlobalStyle } from "styled-components";


export default createGlobalStyle`

    @import url("https://fonts.googleapis.com/css?family=Roboto:100, 100i, 300, 300i,400,400i,500,500i,700,700i,900,900i");

    body {
        font-family: Roboto, sans-serif;
        background: ${props =>  props.theme.colors.body};
        margin: 0;
    }

    html, body, ul, ol, li, form, fieldset, legend {
        margin: 0;
        padding: 0;
    }

    .App {
        position: fixed;
        width: 100px;
        height: 400px;
        justify-content: center;
        left: 50%;
        top: 50%;
        transform: translateX(-50%,-50%);
        justify-content: center;
        justify-items: center;
        align-items: center;
        align-content: center;
        text-align: center;
    }
`;