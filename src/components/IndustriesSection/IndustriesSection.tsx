import { HTMLAttributes } from "react";
import Section from "../Section/Section";

interface Theme {
  colors: {
    white: string;
  };
}

interface IndustriesProps extends HTMLAttributes<HTMLDivElement> {
  theme: Theme;
  dataTestId: string;
}

function IndustriesSection({ theme, dataTestId }: IndustriesProps) {
  return <Section dataTestId={dataTestId} backgroundColor={theme.colors.white}>Industries</Section>;
}

export default IndustriesSection;
