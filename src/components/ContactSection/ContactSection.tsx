import { HTMLAttributes } from "react";
import Section from "../Section/Section";

interface Theme {
  colors: {
    white: string;
  };
}

interface ContactProps extends HTMLAttributes<HTMLDivElement> {
  theme: Theme;
  dataTestId: string;
}

function ContactSection({ theme, dataTestId }: ContactProps) {
  return <Section dataTestId={dataTestId} backgroundColor={theme.colors.white}>Contact</Section>;
}

export default ContactSection;
