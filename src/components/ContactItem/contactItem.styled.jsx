import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  align-items: center;

  margin-bottom: 10px;
`;

export const Button = styled.button`
  border: 1px solid gray;
  border-radius: 4px;
  justify-content: center;
  align-items: center;
  :hover {
    color: red;
  }

  margin-left: 20px;
  padding: 5px 10px;
`;
