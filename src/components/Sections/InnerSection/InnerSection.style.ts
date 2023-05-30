import styled, { CSSProperties } from 'styled-components';

interface ContainerProps {
  backgroundColor?: string;
  shadow?: string;
  border?: string;
  padding?: {
    desktop?: CSSProperties['padding'];
    tablet?: CSSProperties['padding'];
    mobile?: CSSProperties['padding'];
  };
  height?: {
    desktop?: CSSProperties['height'];
    tablet?: CSSProperties['height'];
    mobile?: CSSProperties['height'];
  };
}

export const Container = styled.div<ContainerProps>`
  width: 100%;
  padding: ${(props) => props.padding?.desktop || "auto"};
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  background-color: ${(props) => props.backgroundColor};
  box-shadow: ${(props) => props.shadow};
  border: ${(props) => props.border};
  height: ${(props) => props.height?.desktop};
  
  @media (max-width: 414px) {
    height: ${(props) => props.height?.mobile};
    padding: ${(props) => props.padding?.mobile || "auto"};
  }

  @media (max-width: 1024px) {
    height: ${(props) => props.height?.tablet};
    padding: ${(props) => props.padding?.tablet || "auto"};
  }
}`