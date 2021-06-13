import styled from 'styled-components';

export const Section = styled.section`
  width: 100%;

  h3 {
    font-size: 1.25em;
    font-weight: 500;
    border-bottom: 1px solid ${({ theme }) => theme && theme.colors.separator};
  }

  p {
    line-height: 1.5rem;
  }
`;
