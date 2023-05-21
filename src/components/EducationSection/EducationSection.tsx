import { HTMLAttributes } from "react";
import Section from "../Section/Section";

interface Theme {
  colors: {
    white: string;
  };
}

interface EducationProps extends HTMLAttributes<HTMLDivElement> {
  theme: Theme;
  dataTestId: string;
}

function EducationSection({ theme, dataTestId }: EducationProps) {
  return <Section dataTestId={dataTestId} backgroundColor={theme.colors.white}>Education</Section>;
}

export default EducationSection;
