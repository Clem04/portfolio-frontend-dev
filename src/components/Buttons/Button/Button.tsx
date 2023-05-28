import { HTMLAttributes, ReactNode  } from "react";
import styled from 'styled-components';

interface ButtonProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  width: string;
}

const StyledButton = styled.button<ButtonProps>`
  width: ${(props) => props.width};
  margin-top: 8px;
  background: #063320;
  border: 2px solid #063320;
  border-radius: 50px;
  color: white;
  font-family: 'Kai';
  font-style: normal;
  font-weight: 400;
  font-size: 0.8em;
  text-align: center;
  color: #FFFFFF;
  &:hover {
    cursor: pointer;
  }
`

export default function Button({  children, width }: ButtonProps) {
  return (
    <StyledButton width={width}>{children}</StyledButton>
  )
}
