import { HTMLAttributes, RefObject } from "react"
import Section from '../Sections/Section/Section'
import { InnerSection } from '../Sections/InnerSection/InnerSection'
import SectionName from "../Texts/SectionName"
import { 
  Content,
  SectionDescription,
  SectionIndustries,
  Industry
} from './IndustriesSection.style'

interface Theme {
  colors: {
    white: string;
  };
}

interface IndustriesProps extends HTMLAttributes<HTMLDivElement> {
  theme: Theme;
  dataTestId: string;
  sectionRef?: RefObject<HTMLDivElement>;
  isVisible: boolean;
}

function IndustriesSection({ theme, dataTestId, sectionRef, isVisible }: IndustriesProps) {

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
        backgroundColor="#6DC19E"
      >
        <Content>
          <SectionName label="Industries" textAlign="right" Top="-42px" Right="-28px" />
          <SectionDescription>
            On my resume, 
            you will find my experience 
            across various industries and I am 
            eager to pursue opportunities in new 
            sectors as well. Here are some of the industries 
            <br /> I have worked in: 
          </SectionDescription>
          <SectionIndustries>
            <Industry borderRight="1px solid black">e-commerce</Industry>
            <Industry borderRight="1px solid black">finance</Industry>
            <Industry>health</Industry>
          </SectionIndustries>
        </Content>
      </InnerSection>
    </Section>
  ) 
}

export default IndustriesSection;
