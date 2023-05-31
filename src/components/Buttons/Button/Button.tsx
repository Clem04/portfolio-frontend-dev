import { HTMLAttributes, ReactNode } from 'react';
import { StyledButton } from './Button.style'

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  width: string;
  backgroundColor: string,
  color: string,
  fontFamily: string,
  fontWeight: string
}

export default function Button({ children, width, backgroundColor, color, fontFamily, fontWeight, onClick }: ButtonProps) {
  return (
    <StyledButton 
      type="button" 
      width={width} 
      backgroundColor={backgroundColor}
      color={color}
      fontFamily={fontFamily}
      fontWeight={fontWeight}
      onClick={onClick}
    >
      {children}
    </StyledButton>
  );
}
