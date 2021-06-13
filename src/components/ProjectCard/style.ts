import styled from 'styled-components';

export const Container = styled.div`
  border-radius: 7px;
  box-shadow: 1px 3px 10px rgba(0, 0, 0, 0.25);
  background-color: ${({ theme }) =>
    theme && theme.colors.background.secondary};
  display: flex;
  flex-direction: column;
  transition: 0.2s;

  .projectImage {
    width: 100%;
    height: 180px;
    object-fit: cover;
    -o-object-fit: cover;
    border-radius: 7px 7px 0 0;
  }

  h4 {
    font-size: 1.563em;
    font-weight: 700;
    margin: 0.5em 0.5em 0em 0.5em;
  }

  p {
    margin-right: 0.5em;
    margin-left: 0.7em;
    margin-top: 0.5em;
    margin-bottom: 0.5em;
  }

  .projectDescription {
    font-size: 1em;
    font-weight: 400;
    flex-grow: 1;
    display: flex;
    align-items: flex-start;
  }

  .projectDescription a {
    font-weight: 400;
  }

  .projectLanguage {
    font-weight: 300;
  }

  .projectFooter {
    display: flex;
    font-weight: 500;
  }

  .projectLink {
    display: flex;
    align-items: center;
    margin-bottom: 1em !important;
  }

  .projectLink .icon {
    margin-right: 0.5rem;
  }
`;
