import styled from 'styled-components';

export const Header = styled.header`
  padding: 1em 0;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  width: 100%;

  img {
    box-sizing: border-box;
    width: 7em;
    height: 7em;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border: 2px solid #000000;
    border-radius: 50%;
    margin-right: 1em;
  }

  h1 {
    font-size: 1.953em;
    font-weight: 800;
    text-align: center;
    margin-top: 0.5em;
    margin-bottom: 0;
  }

  h2 {
    font-size: 1.563em;
    font-weight: 300;
    text-align: center;
    margin: 0;
  }

  .title {
    width: 100%;
  }

  .social-links {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin-top: 5px;
  }

  .social-links .social-media:first-of-type {
    margin-right: 3rem;
  }

  .social-links .social-media a {
    display: flex;
    align-items: center;
  }

  .social-links .social-media span {
    margin-left: 5px;
    font-weight: 500;
  }

  .check-group {
    align-self: flex-start;
    flex-grow: 1;
    display: flex;
    justify-content: center;
    margin-top: 1em;
  }

  .check-group label {
    cursor: pointer;
  }

  .check-group input {
    display: none;
  }

  @media (min-width: 650px) {
    justify-content: flex-start;
    padding-top: 3em;

    .title {
      width: auto;
    }
    h1,
    h2 {
      text-align: left;
    }
    .social-links {
      justify-content: flex-start;
    }
    .check-group {
      justify-content: flex-end;
    }
  }
`;
