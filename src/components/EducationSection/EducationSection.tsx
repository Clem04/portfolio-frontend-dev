import { HTMLAttributes, RefObject } from "react";
import Section from '../Sections/Section/Section';
import { InnerSection } from '../Sections/InnerSection/InnerSection';
import SectionName from "../Texts/SectionName"
import { Content, DegreesGrid, DegreeCard, DegreeType, Degree  } from './EducationSection.style'

// Images
import { ReactComponent as TCUImage } from "../assets/svg/education/tcu.svg"
import { ReactComponent as MCCImage } from "../assets/svg/education/mcc.svg"
import { ReactComponent as LeWagonImage } from "../assets/svg/education/wagon.svg"

interface Theme {
  colors: {
    white: string;
  };
}

interface EducationProps extends HTMLAttributes<HTMLDivElement> {
  theme: Theme;
  dataTestId: string;
  sectionRef?: RefObject<HTMLDivElement>;
  isVisible: boolean;
}

function EducationSection({ theme, dataTestId, sectionRef, isVisible }: EducationProps) {

  return (
    <Section
      ref={sectionRef}
      dataTestId={dataTestId} 
      backgroundColor={theme.colors.white}
      margin="100px 0"
    >
      <InnerSection
        height={{
          tablet: '400px',
          mobile: '300px',
        }}
        shadow="13px 15px 24px rgba(0, 0, 0, 0.25), 15px 13px 24px rgba(0, 0, 0, 0.25)"
      >
        <Content>
          <SectionName label="Education" textAlign="left" Top="-38px" Left="-40px"/>
          <DegreesGrid>
            <DegreeCard>
              <TCUImage />
              <DegreeType marginTop="24px">Bachelor of Science</DegreeType>
              <Degree>Fashion Merchandising</Degree>
            </DegreeCard>
            <DegreeCard>
              <MCCImage />
              <DegreeType>Certificate Program</DegreeType>
              <Degree>User Experience (UX) Design</Degree>
            </DegreeCard>
            <DegreeCard>
              <LeWagonImage />
              <DegreeType marginTop="24px">Certificate Program</DegreeType>
              <Degree>Computer Programming</Degree>
            </DegreeCard>
          </DegreesGrid>
        </Content>
      </InnerSection>
    </Section>
  )
}

export default EducationSection;
