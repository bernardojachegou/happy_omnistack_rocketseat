import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
}

body, input, button, textarea {
    font: 600 18px Nunito, sans-serif;
}
`;
