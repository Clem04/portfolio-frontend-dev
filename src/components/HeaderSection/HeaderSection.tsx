import { HTMLAttributes } from "react";
import Section from "../Section/Section";

interface Theme {
  colors: {
    primary: string;
  };
}

interface SectionProps extends HTMLAttributes<HTMLDivElement> {
  theme: Theme;
  dataTestId: string;
}

function HeaderSection({ theme, dataTestId }: SectionProps) {
  return <Section backgroundColor={theme.colors.primary} dataTestId={dataTestId}>Header</Section>;
}

export default HeaderSection;
