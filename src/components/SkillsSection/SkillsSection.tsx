import { HTMLAttributes, RefObject } from "react";
import Section from '../Sections/Section/Section';
import { InnerSection } from '../Sections/InnerSection/InnerSection';

interface Theme {
  colors: {
    white: string;
  };
}

interface SkillsProps extends HTMLAttributes<HTMLDivElement> {
  theme: Theme;
  dataTestId: string;
  sectionRef?: RefObject<HTMLDivElement>;
  isVisible: boolean;
}

function SkillsSection({ theme, dataTestId, sectionRef, isVisible }: SkillsProps) {

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
      >
        Skills
      </InnerSection>
    </Section>
  );
}

export default SkillsSection;
