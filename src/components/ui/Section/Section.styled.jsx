import styled from '@emotion/styled';

export const Card = styled.section`
  display: flex;
  flex-direction: column;

  width: fit-content;
  overflow: visible;
  margin: ${props => props.theme.spacing(20)} auto;

  box-shadow: ${props => props.theme.shadows.medium};
  border-radius: ${props => props.theme.spacing(4)};
  background: ${props => props.theme.colors.white};

  &:hover,
  &:focus {
    background-color: #f1f1f1;
    box-shadow: ${props => props.theme.shadows.regular};
    transform: scale(1.01);
  }
`;

export const CardHeader = styled.div`
  padding: ${props => props.theme.spacing(10)};
  background-color: ${props => props.theme.colors.accent};
  border-top-left-radius: ${props => props.theme.spacing(4)};
  border-top-right-radius: ${props => props.theme.spacing(4)};
`;

export const CardTitle = styled.h2`
  font-size: ${props => props.theme.fontSizes.large};
  text-align: center;
  text-transform: uppercase;

  font-weight: 700;
  color: ${props => props.theme.colors.white};

  margin: 0;
`;
export const CardContent = styled.div`
  padding: ${props => props.theme.spacing(5)};
`;
