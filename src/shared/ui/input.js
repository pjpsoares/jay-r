import styled from 'styled-components';

export const Input = styled.input`
  font-size: 14px;
  height: 30px;
  margin-right:10px;
  padding: 4px;

  &.invalid {
    border: 1px solid red;
  }
`;
