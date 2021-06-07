import {createGlobalStyle} from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
    ${reset}
    *, *::before, *::after{
        box-sizing: border-box;
    } 
    html{
        font-size: 1.1vw;
        font-family: 'Roboto', sans-serif;
        letter-spacing: .05rem;
    }
    a{
        text-decoration: none;
        color: inherit;
    }
`;

export default GlobalStyle;
