import { HTMLAttributes, RefObject } from "react";
import Section from '../Sections/Section/Section';
import { InnerSection } from '../Sections/InnerSection/InnerSection';
import { SectionName } from "../Texts/SectionName/SectionName"
import { Content, DegreesGrid, DegreeCard, DegreeType, Degree  } from './EducationSection.style'

// Images
import { ReactComponent as TCUImage } from "../assets/svg/education/tcu.svg"
import { ReactComponent as MCCImage } from "../assets/svg/education/MCC.svg"
import { ReactComponent as LeWagonImage } from "../assets/svg/education/wagon.svg"

interface Theme {
  colors: {
    primary: string;
    white: string;
    black: string;
  },
  fonts: {
    sectionHeader: string;
    body: string;
  },
  fontWeights: {
    semiRegular: string;
  }
}

interface EducationProps extends HTMLAttributes<HTMLDivElement> {
  theme: Theme;
  dataTestId: string;
  sectionRef?: RefObject<HTMLDivElement>;
  isvisible: boolean;
}

function EducationSection({ theme, dataTestId, sectionRef, isvisible }: EducationProps) {
  const degrees = [
    {
      image: <TCUImage />,
      degreeType: "Bachelor of Science",
      degree: "Fashion Merchandising",
      marginTop: "24px"
    },
    {
      image: <MCCImage />,
      degreeType: "Certificate Program",
      degree: "User Experience (UX) Design"
    },
    {
      image: <LeWagonImage />,
      degreeType: "Certificate Program",
      degree: "Computer Programming",
      marginTop: "24px"
    }
  ];

  return (
    <Section
      ref={sectionRef}
      dataTestId={dataTestId} 
      margin="50px 0"
    >
      <InnerSection
        padding={{
          tablet: "0 0 40px 0",
          mobile: "24px"
        }}
        shadow="13px 15px 24px rgba(0, 0, 0, 0.25), 15px 13px 24px rgba(0, 0, 0, 0.25)"
      >
        <Content>
          <SectionName
            isvisible={isvisible} 
            textAlign="left"
            top={{
              desktop: "-38px",
              tablet: "-18px",
              mobile: "-21px"
            }}
            left={{
              desktop: "-40px",
              tablet: "-21px",
              mobile: "-21px"
            }}
            color={theme.colors.primary}
            fontFamily={theme.fonts.sectionHeader}
          >
            Education
          </SectionName>
          <DegreesGrid isvisible={isvisible}>
            {degrees.map((degree, index) => (
              <DegreeCard key={index}>
                {degree.image}
                <DegreeType
                  marginTop={degree.marginTop}
                  fontFamily={theme.fonts.body}
                  color={theme.colors.black}
                  fontWeight={theme.fontWeights.semiRegular}
                >
                  {degree.degreeType}
                </DegreeType>
                <Degree
                  fontFamily={theme.fonts.body}
                  color={theme.colors.black}
                  fontWeight={theme.fontWeights.semiRegular}
                >
                  {degree.degree}
                </Degree>
              </DegreeCard>
            ))}
          </DegreesGrid>
        </Content>
      </InnerSection>
    </Section>
  );
}

export default EducationSection;
