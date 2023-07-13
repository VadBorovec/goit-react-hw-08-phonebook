import styled from '@emotion/styled';

export const StyledForm = styled.form`
  width: 600px;
  display: flex;
  flex-direction: column;
  margin: 20px auto;
`;

export const Label = styled.label`
  margin-bottom: 10px;
`;

export const Input = styled.input`
  // $line-height: ${props => props.theme.spacing(4)};
  font: inherit;
  line-height: ${props => props.theme.spacing(4)};
  letter-spacing: 0.01em;

  /* height: $line-height * 3 + 24px; */
  width: 100%;
  padding: ${props => props.theme.spacing(1.5)};
  border: 1px solid rgba(33, 33, 33, 0.2);
  border-radius: ${props => props.theme.spacing(1)};

  margin-bottom: ${props => props.theme.spacing(3)};

  &:focus {
    outline: 1px solid teal;
  }
`;

export const Error = styled.div`
  color: red;
`;
