import { HTMLAttributes, ReactNode } from 'react';
import { StyledButton } from './Button.style'

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  width: string;
}

export default function Button({ children, width, onClick }: ButtonProps) {
  return (
    <StyledButton type="button" width={width} onClick={onClick}>
      {children}
    </StyledButton>
  );
}
