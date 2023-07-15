import styled from '@emotion/styled';

export const Item = styled.li`
  /* position: relative; */
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 10px 30px 10px 10px;
  overflow: hidden;
  border-radius: 10px;
  box-shadow: ${props => props.theme.shadows.medium};
  cursor: pointer;

  transition-property: transform, box-shadow;
  transition-duration: 0.25s;

  background-color: ${props => props.theme.colors.white};

  &:hover {
    transform: scale(1.02);
    box-shadow: ${props => props.theme.shadows.small};
  }
  @media (max-width: 480px) {
    flex-direction: column;
    padding: ${props => props.theme.spacing(2)};
  }
`;

export const Name = styled.h3`
  font-weight: 600;
  font-size: ${props => props.theme.fontSizes.large};
  letter-spacing: ${props => props.theme.spacing(0.25)};

  color: ${props => props.theme.colors.gray};

  margin-left: ${props => props.theme.spacing(2)};
  margin-bottom: 0;
  max-width: 40%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  @media (max-width: 480px) {
    margin-bottom: ${props => props.theme.spacing(1)};
    max-width: 100%;
  }
`;

export const Number = styled.p`
  font-weight: 600;
  font-size: ${props => props.theme.fontSizes.medium};
  letter-spacing: ${props => props.theme.spacing(0.25)};

  color: ${props => props.theme.colors.deepteal};

  margin-left: ${props => props.theme.spacing(2)};
  margin-bottom: 0;
  max-width: 40%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  @media (max-width: 480px) {
    margin-bottom: ${props => props.theme.spacing(1)};
    max-width: 100%;
  }
`;
