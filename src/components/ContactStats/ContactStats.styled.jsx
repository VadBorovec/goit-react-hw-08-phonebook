import styled from '@emotion/styled';

export const Box = styled.div`
  display: inline-block;
  padding: ${props => props.theme.spacing(4)};
  margin: 0;
  width: 39%;

  @media (max-width: 480px) {
    display: block;
    width: 100%;
  }
`;

export const Text = styled.p`
  margin-bottom: 10px;
`;
