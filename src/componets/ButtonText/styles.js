import styled from "styled-components";

export const Container = styled.button`
  background: none;
  color: ${({ theme , $isactive}) => $isactive =="true" ? theme.COLORS.ORANGE:theme.COLORS.GRAY_100};
  border: none;
  font-size: 16px;

  &:hover{
    cursor:pointer;
   text-shadow: 1px 1px 0.8px  ${({ theme , $isactive}) => $isactive =="true" ? theme.COLORS.WHITE:theme.COLORS.ORANGE};
  }
`;
