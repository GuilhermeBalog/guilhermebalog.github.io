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
    --bg: #f9f9f9;
    --bg-lighter: #ffffff;
    --border-color: #00000040;
    --color-text: #000000;

    height: 100%;
    margin: 0;
    padding: 0;
    background-color: var(--bg);
    font-family: 'Rubik', sans-serif;
    font-size: 1em;
    font-weight: 300;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  strong {
    font-weight: 500;
  }

  #App {
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-wrap: wrap;
    width: 90%;
    max-width: 1500px;
    margin: 0 auto;
    color: var(--color-text);
  }

  header {
    padding: 1em 0;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    width: 100%;
  }

  header img {
    box-sizing: border-box;
    width: 7em;
    height: 7em;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border: 2px solid #000000;
    border-radius: 50%;
    margin-right: 1em;
  }

  header h1 {
    font-size: 1.953em;
    font-weight: 800;
    text-align: center;
    margin-top: 0.5em;
    margin-bottom: 0;
  }

  header h2 {
    font-size: 1.563em;
    font-weight: 300;
    text-align: center;
    margin: 0;
  }

  header .title {
    width: 100%;
  }

  header .social-links {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin-top: 5px;
  }

  header .social-links .social-media:first-of-type {
    margin-right: 3rem;
  }

  header .social-links .social-media a {
    display: flex;
    align-items: center;
  }

  header .social-links .social-media span {
    margin-left: 5px;
    font-weight: 500;
  }

  header .check-group {
    align-self: flex-start;
    flex-grow: 1;
    display: flex;
    justify-content: center;
    margin-top: 1em;
  }

  header .check-group label {
    cursor: pointer;
  }

  header .check-group input {
    display: none;
  }

  section {
    width: 100%;
  }

  section h3 {
    font-size: 1.25em;
    font-weight: 500;
    border-bottom: 1px solid var(--border-color);
  }

  section p {
    line-height: 1.5rem;
  }

  .projects {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1rem;
    margin-bottom: 2em;
  }

  @media (min-width: 650px) {
    header {
      justify-content: flex-start;
      padding-top: 3em;
    }
    header .title {
      width: auto;
    }
    header h1,
    header h2 {
      text-align: left;
    }
    header .social-links {
      justify-content: flex-start;
    }
    header .check-group {
      justify-content: flex-end;
    }
    .projects {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (min-width: 900px) {
    .projects {
      grid-template-columns: repeat(3, 1fr);
    }
  }
`;
