import { HTMLAttributes } from "react";
import Section from "../Section/Section";

interface Theme {
  colors: {
    white: string;
  };
}

interface SkillsProps extends HTMLAttributes<HTMLDivElement> {
  theme: Theme;
  dataTestId: string;
}

function SkillsSection({ theme, dataTestId }: SkillsProps) {
  return <Section dataTestId={dataTestId} backgroundColor={theme.colors.white}>Skills</Section>;
}

export default SkillsSection;
