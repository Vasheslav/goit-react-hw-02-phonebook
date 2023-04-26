import styled from '@emotion/styled';

export const Forma = styled.form`
  border: 2px solid gray;
  border-radius: 4px;

  max-width: 350px;

  padding: 20px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
`;

export const Button = styled.button`
  border: 1px solid gray;
  border-radius: 4px;
  justify-content: center;
  align-items: center;
  :hover {
    color: green;
  }

  margin-right: 10px;
  padding: 5px 10px;
`;

export const Input = styled.input`
  max-width: 250px;
`;
