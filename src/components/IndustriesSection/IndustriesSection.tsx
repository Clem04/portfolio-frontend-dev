import { HTMLAttributes, RefObject } from "react"
import Section from '../Sections/Section/Section'
import { InnerSection } from '../Sections/InnerSection/InnerSection'
import { SectionName } from "../Texts/SectionName/SectionName"
import { 
  Content,
  SectionDescription,
  GridIndustries,
  Industry,
} from './IndustriesSection.style'

interface Theme {
  colors: {
    primary: string;
    secondary: string;
    white: string;
    black: string;
  },
  fonts: {
    sectionHeader: string;
    body: string;
    industries: string;
  },
  fontWeights: {
    semiRegular: string;
    bold: string;
  }
}

interface IndustriesProps extends HTMLAttributes<HTMLDivElement> {
  theme: Theme;
  dataTestId: string;
  sectionRef?: RefObject<HTMLDivElement>;
  isvisible: boolean;
}

function IndustriesSection({ theme, dataTestId, sectionRef, isvisible }: IndustriesProps) {

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
        backgroundColor={theme.colors.secondary}
      >
        <Content>
          <SectionName 
            isvisible={isvisible}
            textAlign="right"
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
            color={theme.colors.primary}
            fontFamily={theme.fonts.sectionHeader}
          >
            Industries
          </SectionName>
          <SectionDescription 
            isVisible={isvisible}
            color={theme.colors.black}
            fontFamily={theme.fonts.body}
            fontWeight={theme.fontWeights.semiRegular}
          >
            On my resume, 
            you will find my experience 
            across various industries and I am 
            eager to pursue opportunities in new 
            sectors as well. Here are some of the industries 
            <br /> I have worked in: 
          </SectionDescription>
          <GridIndustries isVisible={isvisible}>
            <Industry 
              borderRight={theme.colors.black} 
              borderBottom={theme.colors.black}
              color={theme.colors.black}
              fontFamily={theme.fonts.industries}
              fontWeight={theme.fontWeights.bold}
            >
              e-commerce
            </Industry>
            <Industry 
              borderRight={theme.colors.black} 
              borderBottom={theme.colors.black}
              color={theme.colors.black}
              fontFamily={theme.fonts.industries}
              fontWeight={theme.fontWeights.bold}
            >
              finance
            </Industry>
            <Industry 
              color={theme.colors.black}
              fontFamily={theme.fonts.industries}
              fontWeight={theme.fontWeights.bold}
            >
              health
            </Industry>
          </GridIndustries>
        </Content>
      </InnerSection>
    </Section>
  ) 
}

export default IndustriesSection;
