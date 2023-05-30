import { ReactNode, HTMLAttributes, forwardRef } from "react";
import styled from "styled-components";

interface SectionProps extends HTMLAttributes<HTMLDivElement> {
  margin?: string;
  dataTestId?: string;
  height?: string;
  children: ReactNode;
}

const SectionContainer = styled.div<SectionProps >`
  width: 100%;
  height: ${(props) => props.height || "auto"};
  margin: ${(props) => props.margin};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Section = forwardRef<HTMLDivElement, SectionProps>(
  ({ margin, children, height, dataTestId, ...rest }, ref) => {
    return (
      <SectionContainer
        ref={ref}
        data-testid={dataTestId}
        {...rest}
        margin={margin}
        height={height}
      >
        {children}
      </SectionContainer>
    );
  }
);

export default Section;
