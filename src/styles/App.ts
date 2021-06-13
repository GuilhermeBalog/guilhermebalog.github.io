import styled from 'styled-components';

export const App = styled.div`
  color: ${({ theme }) => theme && theme.colors.text};
  background-color: ${({ theme }) => theme && theme.colors.background.primary};
  transition: 0.3s;
`;
