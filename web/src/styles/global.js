import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background: #E3DB94;
    }

    body, input, button, textarea {
        font: 600 18px Nunito, sans-serif;
    }
`;

export default GlobalStyle;
