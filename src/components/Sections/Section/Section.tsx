import { ReactNode, HTMLAttributes, forwardRef } from "react";
import styled from "styled-components";

interface SectionProps extends HTMLAttributes<HTMLDivElement> {
  backgroundColor: string;
  margin?: string;
  dataTestId?: string;
  shadow?: boolean;
  children: ReactNode;
}

const SectionContainer = styled.div<SectionProps>`
  width: 100%;
  height: 100vh;
  margin: ${(props) => props.margin};
  background-color: ${(props) => props.backgroundColor};
  box-shadow: ${(props) =>
    props.shadow
      ? "13px 15px 24px rgba(0, 0, 0, 0.25), 15px 13px 24px rgba(0, 0, 0, 0.25)"
      : "none"};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Section = forwardRef<HTMLDivElement, SectionProps>(
  ({ backgroundColor, margin, shadow, children, dataTestId, ...rest }, ref) => {
    return (
      <SectionContainer
        ref={ref}
        data-testid={dataTestId}
        backgroundColor={backgroundColor}
        shadow={shadow}
        {...rest}
        margin={margin}
      >
        {children}
      </SectionContainer>
    );
  }
);

export default Section;
