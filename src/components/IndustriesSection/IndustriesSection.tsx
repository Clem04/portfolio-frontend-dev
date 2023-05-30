import { HTMLAttributes, RefObject } from "react"
import Section from '../Sections/Section/Section'
import { InnerSection } from '../Sections/InnerSection/InnerSection'
import { SectionName } from "../Texts/SectionName"
import { 
  Content,
  SectionDescription,
  GridIndustries,
  Industry,
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
      margin="50px 0"
    >
      <InnerSection
        padding={{
          desktop: "32px",
          mobile: "24px"
        }}
        backgroundColor="#6DC19E"
      >
        <Content>
          <SectionName textAlign="right"
            top={{
              tablet: "-55px",
              desktop: "-74px",
              mobile: "-48px"
            }}
            right={{
              desktop: "-54px",
              tablet: "-61px",
              mobile: "-32px"
            }}
          >
            Industries
          </SectionName>
          <SectionDescription isVisible={isVisible}>
            On my resume, 
            you will find my experience 
            across various industries and I am 
            eager to pursue opportunities in new 
            sectors as well. Here are some of the industries 
            <br /> I have worked in: 
          </SectionDescription>
          <GridIndustries isVisible={isVisible}>
            <Industry borderRight="1px solid black" borderBottom="1px solid black">e-commerce</Industry>
            <Industry borderRight="1px solid black" borderBottom="1px solid black">finance</Industry>
            <Industry>health</Industry>
          </GridIndustries>
        </Content>
      </InnerSection>
    </Section>
  ) 
}

export default IndustriesSection;
