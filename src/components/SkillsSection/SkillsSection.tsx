import { forwardRef, HTMLAttributes } from "react"
import Section from '../Sections/Section/Section'
import { InnerSection } from '../Sections/InnerSection/InnerSection'
import { SectionName } from "../Texts/SectionName"
import ProgressBar from '../ProgressBar/ProgressBar'
import TechnicalCard from "../Cards/TechnicalCard/TechnicalCard"
import DesignCard from '../Cards/DesignCard/DesignCard'
import SkillsSectionName from '../Texts/SkillsSectionName'
import Button from "../Buttons/Button/Button"
import Hr from '../Hr/Hr'
import { 
  Content, 
  TopSection, 
  Header, 
  SkillsContainerGrid ,
  BottomSection,
  DesktopButtonContainer,
  ResumeTitle,
  BottomRightSection,
  SubSkills,
  Language,
  DesignSkillsGrid,
  HrContainer, 
  MobileBottomContainer
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

export interface SkillsProps extends HTMLAttributes<HTMLDivElement> {
  theme: Theme;
  dataTestId: string;
  isVisible: boolean;
}

const SkillsSection = forwardRef<HTMLDivElement, SkillsProps>(({ 
  theme, dataTestId, isVisible, ...rest },ref) => {

    const openPDF = () => {
      const fileUrl = '/assets/resume.pdf';
      window.open(fileUrl, '_blank');
    };
    
    return (
      <Section 
        ref={ref} 
        dataTestId={dataTestId} 
        margin="50px 0"
        {...rest}
      >
        <InnerSection
          padding={{
            desktop: "48px",
            mobile: "24px"
          }}
          backgroundColor={theme.colors.white}
          shadow="13px 15px 24px rgba(0, 0, 0, 0.25), 15px 13px 24px rgba(0, 0, 0, 0.25)"
        >
          <Content>
            <SectionName 
              isVisible={isVisible}
              textAlign="left" 
              top={{
                desktop: "-88px",
                tablet: "-69px",
                mobile: "-47px"
              }}
              left={{
                desktop: "-88px",
                tablet: "-69px",
                mobile: "-36px"
              }}
            >
              Skills
            </SectionName>
            <ProgressBar
              progress={100}
              width={{
                desktop: "30%",
                mobile: "72%"
              }}
              from="-356px" 
              to="0"
              color={theme.colors.primary}
              isVisible={isVisible}
            />
            <TopSection>
              <SkillsSectionName textAlign="left" name="Technical" />
              <Hr width="100%" />
              <SkillsContainerGrid >
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
              </SkillsContainerGrid >
            </TopSection>
            <BottomSection isVisible={isVisible}>
              <DesktopButtonContainer>
                <ResumeTitle>Download Me!</ResumeTitle>
                <Button width="100%" onClick={openPDF}>Resume</Button>
              </DesktopButtonContainer>
              <BottomRightSection>
                <SubSkills>
                  <Header>Language</Header>
                  <HrContainer><Hr width="100%" /></HrContainer>
                  <Language style={{ marginTop: "24px"}}>English</Language>
                  <Language>French</Language>
                </SubSkills>
                <SubSkills>
                  <Header textAlign="right">Design</Header>
                  <HrContainer><Hr width="100%" /></HrContainer>
                  <DesignSkillsGrid>
                    <DesignCard skill="Wireframe Prototypes">
                      <WireframesIcon />
                    </DesignCard>
                    <DesignCard skill="InVision">
                      <InVisionIcon />
                    </DesignCard>
                    <DesignCard skill="DesignPrincipls & Design Systems">
                      <DesignPrincipleIcon />
                    </DesignCard>
                    <DesignCard skill="Figma">
                      <FigmaIcon />
                    </DesignCard>
                    <DesignCard skill="Sketch Design">
                      <SketchIcon />
                    </DesignCard>
                    <DesignCard skill="Responsive Design">
                      <ResponsiveIcon />
                    </DesignCard>
                  </DesignSkillsGrid>
                </SubSkills>
                <MobileBottomContainer>
                  <ResumeTitle>Download Me!</ResumeTitle>
                  <Button width="100%" onClick={openPDF}>Resume</Button>
                </MobileBottomContainer>
              </BottomRightSection>
            </BottomSection>
          </Content>
        </InnerSection>
      </Section>
    );
  }
)

export default SkillsSection;
