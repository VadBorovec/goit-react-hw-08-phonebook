import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  padding: ${props => props.theme.spacing(3)};
  font-weight: 700;
  color: ${props => props.theme.colors.dark};

  &:hover {
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4);
    color: ${props => props.theme.colors.btnActive};
    transform: scale(1.05);
  }
  &.active {
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4);
    color: ${props => props.theme.colors.btnHover};
  }
`;
