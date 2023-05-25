import React from 'react';
import styled, { CSSProperties } from 'styled-components';

interface InnerSectionProps {
  height: {
    desktop?: string;
    tablet: string;
    mobile: string;
  };
  backgroundColor?: string;
  shadow?: string;
  border?: string;
  children?: React.ReactNode;
  padding?: string;
}

interface ContainerProps {
  backgroundColor?: string;
  shadow?: string;
  border?: string;
  padding?: string;
  height: {
    desktop?: CSSProperties['height'];
    tablet: CSSProperties['height'];
    mobile: CSSProperties['height'];
  };
}

const Container = styled.div<ContainerProps>`
  width: 100%;
  padding: ${(props) => props.padding || "auto"};
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  background-color: ${(props) => props.backgroundColor};
  box-shadow: ${(props) => props.shadow};
  border: ${(props) => props.border};
  height: ${(props) => props.height.desktop};
  
  @media (max-width: 1024px) {
    height: ${(props) => props.height.tablet};
  }
  
  @media (max-width: 768px) {
    height: ${(props) => props.height.mobile};
  }
}`;

export const InnerSection: React.FC<InnerSectionProps> = ({
  height,
  backgroundColor,
  shadow,
  border,
  padding,
  children,
}) => {
  return (
    <Container
      height={height}
      backgroundColor={backgroundColor}
      shadow={shadow}
      border={border}
      padding={padding}
    >
      {children}
    </Container>
  );
};
