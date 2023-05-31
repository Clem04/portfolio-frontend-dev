import { ReactNode, HTMLAttributes, forwardRef, Ref } from "react";
import styled from "styled-components";

interface SectionProps extends HTMLAttributes<HTMLDivElement> {
  margin?: string;
  dataTestId?: string;
  height?: string;
  backgroundColor?: string;
  children: ReactNode;
}

const SectionContainer = styled.div<SectionProps>`
  width: 100%;
  height: ${(props) => props.height || "auto"};
  margin: ${(props) => props.margin};
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.backgroundColor};
`;

const Section = forwardRef<HTMLDivElement, SectionProps>(
  ({ margin, children, height, dataTestId, backgroundColor, ...rest }: SectionProps, ref: Ref<HTMLDivElement>) => {
    return (
      <SectionContainer
        ref={ref}
        data-testid={dataTestId}
        {...rest}
        margin={margin}
        height={height}
        backgroundColor={backgroundColor}
      >
        {children}
      </SectionContainer>
    );
  }
);

export default Section;
