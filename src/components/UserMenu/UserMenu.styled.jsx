import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
`;

export const UserName = styled.p`
  display: inline-block;
  text-decoration: none;
  padding: ${props => props.theme.spacing(3)};
  font-weight: 700;
  color: ${props => props.theme.colors.dark};
  margin: 0;
`;
