import styled from 'styled-components';

export const Button = styled.button`
  background-color: #6767ca;
  color: #e2e2e2;
  font-size: 14px;
  height: 30px;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #4c4cc7;
  }

  &[disabled] {
    background-color: #afadad;
  }
`;
