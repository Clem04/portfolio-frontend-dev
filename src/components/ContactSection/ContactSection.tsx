import { HTMLAttributes, RefObject } from "react";
import Section from '../Sections/Section/Section';
import { InnerSection } from '../Sections/InnerSection/InnerSection';

interface Theme {
  colors: {
    white: string;
  };
}

interface ContactProps extends HTMLAttributes<HTMLDivElement> {
  theme: Theme;
  dataTestId: string;
  sectionRef?: RefObject<HTMLDivElement>;
  isVisible: boolean;
}

function ContactSection({ theme, dataTestId, sectionRef, isVisible }: ContactProps) {

  return (
    <Section 
      ref={sectionRef}
      dataTestId={dataTestId} 
      backgroundColor={theme.colors.white}
    >
      <InnerSection
        height={{
          desktop: '600px',
          tablet: '400px',
          mobile: '300px',
        }}
        border='1px solid black'
        padding="80px 80px 24px 80px"
      >
        Contact
      </InnerSection>
    </Section>
  )
}

export default ContactSection;
