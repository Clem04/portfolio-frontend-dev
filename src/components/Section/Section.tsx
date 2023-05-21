import { ReactNode } from "react";
import styled from "styled-components";

interface SectionProps {
  backgroundColor: string;
  dataTestId?: string;
  shadow?: boolean;
  children: ReactNode;
}

const SectionContainer = styled.div<SectionProps>`
  width: 100%;
  height: 100vh;
  background-color: ${(props) => props.backgroundColor};
  box-shadow: ${(props) =>
    props.shadow
      ? "13px 15px 24px rgba(0, 0, 0, 0.25), 15px 13px 24px rgba(0, 0, 0, 0.25)"
      : "none"};
  display: flex;
  justify-content: center;
  align-items: center;
`;

function Section({
  backgroundColor,
  shadow,
  children,
  dataTestId,
}: SectionProps) {
  return (
    <SectionContainer
      data-testid={dataTestId}
      backgroundColor={backgroundColor}
      shadow={shadow}
    >
      {children}
    </SectionContainer>
  );
}

export default Section;
