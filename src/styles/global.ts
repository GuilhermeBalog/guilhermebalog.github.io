import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    outline: none;
    box-sizing: border-box;
  }

  html {
    height: 100%;
  }

  body {
    height: 100%;
    margin: 0;
    padding: 0;
    font-family: 'Rubik', sans-serif;
    font-size: 1em;
    font-weight: 300;
    background-color: ${({ theme }) =>
      theme && theme.colors.background.primary};
    transition: 0.3s;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  strong {
    font-weight: 500;
  }
`;
