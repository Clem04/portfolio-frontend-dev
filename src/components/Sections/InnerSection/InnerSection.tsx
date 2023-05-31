import React from 'react';
import { Container } from './InnerSection.style';

interface InnerSectionProps {
  height?: {
    desktop?: string;
    tablet?: string;
    mobile?: string;
  };
  backgroundColor?: string;
  shadow?: string;
  border?: string;
  children?: React.ReactNode;
  padding?: {
    desktop?: string;
    tablet?: string;
    mobile?: string;
  };
}

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
      data-testid="inner-section-container"
    >
      {children}
    </Container>
  );
};
