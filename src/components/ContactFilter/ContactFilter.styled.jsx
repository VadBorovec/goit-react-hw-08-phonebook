import styled from '@emotion/styled';

export const Filter = styled.div`
  display: inline-block;
  padding: ${props => props.theme.spacing(4)};
  margin: 0;
  width: 50%;
`;

export const Label = styled.label`
  padding: 10px;
`;

export const Input = styled.input`
  $line-height: 16px;
  font: inherit;
  line-height: $line-height;
  letter-spacing: 0.01em;

  padding: 5px;
  margin-left: 5px;
  resize: none;
  //   width: 100%;
  border: 1px solid rgba(33, 33, 33, 0.2);
  border-radius: 4px;

  &:focus {
    outline: 1px solid teal;
  }
`;
