import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const HeroWrap = styled.div`
  /* min-height: calc(100vh - 200px); */
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Title = styled.h1`
  font-weight: 500;
  font-size: ${props => props.theme.fontSizes.xxxlarge};
  text-align: center;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  max-width: 740px;
  line-height: ${props => props.theme.spacing(16)};
`;

export const Text = styled.p`
  font-size: ${props => props.theme.fontSizes.medium};
  line-height: 1.5;
  text-align: center;
  max-width: 740px;
`;

export const Link = styled(NavLink)`
  font-size: ${props => props.theme.fontSizes.medium};
  font-weight: 500;
  color: ${props => props.theme.colors.btn};
  text-decoration: underline;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4);
  display: inline-block;
  transition: transform 0.3s ease-in-out;

  &:hover {
    text-shadow: 1px 2px 2px rgba(0, 0, 0, 0.6);
    color: ${props => props.theme.colors.btnActive};
    transform: scale(1.05);
  }
  &:active {
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
    color: ${props => props.theme.colors.btnHover};
  }
`;
