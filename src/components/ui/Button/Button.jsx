import styled from '@emotion/styled';

export const Button = styled.button`
  /* display: flex; */
  /* width: 100%; */
  /* justify-content: center; */

  font-family: inherit;

  padding: 0.6rem 1rem;
  margin: 0 0.5rem;
  background-color: ${props => props.theme.colors.btn};
  color: ${props => props.theme.colors.white};
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: 600;

  cursor: pointer;
  border: none;
  border-radius: 0.375rem;
  box-shadow: 1px 2px 2px 0 rgb(0 0 0 / 0.5);
  transition: box-shadow 250ms linear;

  :hover {
    background-color: ${props => props.theme.colors.btnHover};
  }

  :active {
    background-color: ${props => props.theme.colors.btnActive};
    box-shadow: 2px 5px 2px 0 rgb(0 0 0 / 0.5);
  }

  :disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;
