import { HTMLAttributes, RefObject } from "react"
import Section from '../Sections/Section/Section'
import { InnerSection } from '../Sections/InnerSection/InnerSection'
import SectionName from "../Texts/SectionName"
import ProgressBar from '../ProgressBar/ProgressBar'
import TechnicalCard from "../Cards/TechnicalCard/TechnicalCard"
import { 
  Content, 
  TopSection, 
  Header, 
  Hr, 
  SkillsContainer,
  BottomSection,
  ButtonContainer,
  ResumeTitle,
  ResumeButton,
  BottomRightSection,
  SubSkills,
  Language,
  DesignSkillsGrid,
  DesignSkillCard,
  DesignSkillName
} from './SkillsSection.style'

// Icons
import { ReactComponent as ReactIcon } from "../assets/svg/skills/react.svg"
import { ReactComponent as ReactTestingIcon } from "../assets/svg/skills/react_testing_library.svg"
import { ReactComponent as JavascriptIcon } from "../assets/svg/skills/javascript.svg"
import { ReactComponent as HTMLIcon } from "../assets/svg/skills/html5.svg"
import { ReactComponent as CSSIcon } from "../assets/svg/skills/css.svg"
import { ReactComponent as TypescriptIcon } from "../assets/svg/skills/typescript.svg"
import { ReactComponent as RubyOnRailsIcon } from "../assets/svg/skills/ruby_rails.svg"
import { ReactComponent as WireframesIcon } from "../assets/svg/skills/wireframe.svg"
import { ReactComponent as InVisionIcon } from "../assets/svg/skills/invision.svg"
import { ReactComponent as DesignPrincipleIcon } from "../assets/svg/skills/design_principles.svg"
import { ReactComponent as FigmaIcon } from "../assets/svg/skills/figma.svg"
import { ReactComponent as SketchIcon } from "../assets/svg/skills/sketch.svg"
import { ReactComponent as ResponsiveIcon } from "../assets/svg/skills/responsive_design.svg"

interface Theme {
  colors: {
    primary: string;
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
        padding="48px"
        shadow="13px 15px 24px rgba(0, 0, 0, 0.25), 15px 13px 24px rgba(0, 0, 0, 0.25)"
      >
        <Content>
          <SectionName label="Skills"/>
          <ProgressBar
            progress={100}
            width="356px"
            from="-356px" 
            to="0"
            color={theme.colors.primary}
          />
          <TopSection>
            <Header>Technical</Header>
            <Hr />
            <SkillsContainer>
              <TechnicalCard 
                isVisible={isVisible} 
                progressColor={theme.colors.primary} 
                skillLabel="React Js" 
                percentage={90}
              >
                <ReactIcon />
              </TechnicalCard>
              <TechnicalCard 
                isVisible={isVisible} 
                progressColor={theme.colors.primary} 
                skillLabel="React Testing Library" 
                percentage={80}
              >
                <ReactTestingIcon />
              </TechnicalCard>
              <TechnicalCard 
                isVisible={isVisible} 
                progressColor={theme.colors.primary} 
                skillLabel="Javascript" 
                percentage={90}
              >
                <JavascriptIcon />
              </TechnicalCard>
              <TechnicalCard 
                isVisible={isVisible} 
                progressColor={theme.colors.primary} 
                skillLabel="HTML5" 
                percentage={95}
              >
                <HTMLIcon />
              </TechnicalCard>
              <TechnicalCard 
                isVisible={isVisible} 
                progressColor={theme.colors.primary} 
                skillLabel="CSS" 
                percentage={90}
              >
                <CSSIcon />
              </TechnicalCard>
              <TechnicalCard 
                isVisible={isVisible} 
                progressColor={theme.colors.primary} 
                skillLabel="Typescript" 
                percentage={80}
              >
                <TypescriptIcon />
              </TechnicalCard>
              <TechnicalCard 
                isVisible={isVisible} 
                progressColor={theme.colors.primary} 
                skillLabel="Ruby on Rails" 
                percentage={70}
              >
                <RubyOnRailsIcon />
              </TechnicalCard>
            </SkillsContainer>
          </TopSection>
          <BottomSection>
            <ButtonContainer>
              <ResumeTitle>Download Me!</ResumeTitle>
              <ResumeButton>RESUME</ResumeButton>
            </ButtonContainer>
            <BottomRightSection>
              <SubSkills>
                <Header>Language</Header>
                <Language style={{ marginTop: "24px"}}>English</Language>
                <Language>French</Language>
              </SubSkills>
              <SubSkills>
                <Header textAlign="right">Design</Header>
                <DesignSkillsGrid>
                  <DesignSkillCard>
                    <WireframesIcon />
                    <DesignSkillName>
                      Wireframe Prototypes
                    </DesignSkillName>
                  </DesignSkillCard>
                  <DesignSkillCard>
                    <InVisionIcon />
                    <DesignSkillName>
                      InVision
                    </DesignSkillName>
                  </DesignSkillCard>
                  <DesignSkillCard>
                    <DesignPrincipleIcon />
                    <DesignSkillName>
                      DesignPrincipls & Design Systems
                    </DesignSkillName>
                  </DesignSkillCard>
                  <DesignSkillCard>
                    <FigmaIcon />
                    <DesignSkillName>
                      Figma
                    </DesignSkillName>
                  </DesignSkillCard>
                  <DesignSkillCard>
                    <SketchIcon />
                    <DesignSkillName>
                      Sketch Design
                    </DesignSkillName>
                  </DesignSkillCard>
                  <DesignSkillCard>
                    <ResponsiveIcon />
                    <DesignSkillName>
                      Resonsive Design
                    </DesignSkillName>
                  </DesignSkillCard>
                </DesignSkillsGrid>
              </SubSkills>
            </BottomRightSection>
          </BottomSection>
        </Content>
      </InnerSection>
    </Section>
  );
}

export default SkillsSection;
