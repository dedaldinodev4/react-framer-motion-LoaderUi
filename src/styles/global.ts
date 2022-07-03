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


    .loader-ui-1 {
        width: 10px;
        height: 10px;
        margin: 40px auto;
        border-radius: 50%;
        background: ${props => props.theme.colors.primary};
    }

`;