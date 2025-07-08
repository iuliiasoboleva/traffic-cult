import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  /* Reset */
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html, body {
    height: 100%;
    font-family: 'Inter', sans-serif;
    background-color: #121315;
    color: #FFFFFF;
  }

  #root {
    height: 100%;
  }
`;
