import { forwardRef, HTMLAttributes } from "react"
import Section from '../Sections/Section/Section'
import { InnerSection } from '../Sections/InnerSection/InnerSection'
import { SectionName } from "../Texts/SectionName/SectionName"
import ProgressBar from '../ProgressBar/ProgressBar'
import TechnicalCard from "../Cards/TechnicalCard/TechnicalCard"
import DesignCard from '../Cards/DesignCard/DesignCard'
import SkillsSectionName from '../Texts/SkillsSectionName/SkillsSectionName'
import Button from "../Buttons/Button/Button"
import Hr from '../Hr/Hr'
import { 
  Content, 
  TopSection, 
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
    black: string
  },
  fonts: {
    sectionHeader: string;
    skillsHeader: string;
    body: string;
  }
}

export interface SkillsProps extends HTMLAttributes<HTMLDivElement> {
  theme: Theme;
  dataTestId: string;
  isvisible: boolean;
}

const SkillsSection = forwardRef<HTMLDivElement, SkillsProps>(({ 
  theme, dataTestId, isvisible, ...rest }, ref) => {

  const openPDF = () => {
    const fileUrl = '/assets/resume.pdf';
    window.open(fileUrl, '_blank');
  };

  const technicalSkills = [
    { label: "React Js", Icon: ReactIcon, percentage: 90 },
    { label: "React Testing Library", Icon: ReactTestingIcon, percentage: 80 },
    { label: "Javascript", Icon: JavascriptIcon, percentage: 90 },
    { label: "HTML5", Icon: HTMLIcon, percentage: 95 },
    { label: "CSS", Icon: CSSIcon, percentage: 90 },
    { label: "Typescript", Icon: TypescriptIcon, percentage: 80 },
    { label: "Ruby on Rails", Icon: RubyOnRailsIcon, percentage: 70 },
  ];

  const designSkills = [
    { skill: "Wireframe Prototypes", Icon: WireframesIcon },
    { skill: "InVision", Icon: InVisionIcon },
    { skill: "DesignPrincipls & Design Systems", Icon: DesignPrincipleIcon },
    { skill: "Figma", Icon: FigmaIcon },
    { skill: "Sketch Design", Icon: SketchIcon },
    { skill: "Responsive Design", Icon: ResponsiveIcon },
  ];

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
            isvisible={isvisible}
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
            color={theme.colors.primary}
            fontFamily={theme.fonts.sectionHeader}
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
            isvisible={isvisible}
          />
          <TopSection>
            <SkillsSectionName 
              color={theme.colors.black} 
              textAlign="left" 
              name="Technical" 
              fontFamily={theme.fonts.skillsHeader}
            />
            <Hr width="100%" />
            <SkillsContainerGrid>
              {technicalSkills.map(({ label, Icon, percentage }) => (
                <TechnicalCard
                  key={label}
                  isvisible={isvisible}
                  progressColor={theme.colors.primary}
                  skillLabel={label}
                  percentage={percentage}
                  color={theme.colors.primary}
                  fontFamily={theme.fonts.body}
                >
                  <Icon />
                </TechnicalCard>
              ))}
            </SkillsContainerGrid>
          </TopSection>
          <BottomSection isvisible={isvisible}>
            <DesktopButtonContainer>
              <ResumeTitle 
                fontFamily={theme.fonts.body}
                color={theme.colors.primary}
              >
                Download Me!
              </ResumeTitle>
              <Button 
                width="100%" 
                onClick={openPDF}
                backgroundColor={theme.colors.primary}
                color={theme.colors.white}
                fontFamily={theme.fonts.body}
              >
                Resume
              </Button>
            </DesktopButtonContainer>
            <BottomRightSection>
              <SubSkills color={theme.colors.primary}>
                <SkillsSectionName 
                  color={theme.colors.black} 
                  textAlign="left" 
                  name="Language" 
                  fontFamily={theme.fonts.skillsHeader}
                />
                <HrContainer><Hr width="100%" /></HrContainer>
                <Language fontFamily={theme.fonts.body} style={{ marginTop: "24px"}}>English</Language>
                <Language fontFamily={theme.fonts.body}>French</Language>
              </SubSkills>
              <SubSkills color={theme.colors.primary}>
                <SkillsSectionName 
                  color={theme.colors.black} 
                  textAlign="right" 
                  name="Design" 
                  fontFamily={theme.fonts.skillsHeader}
                />
                <HrContainer><Hr width="100%" /></HrContainer>
                <DesignSkillsGrid>
                  {designSkills.map(({ skill, Icon }) => (
                    <DesignCard key={skill} skill={skill} fontFamily={theme.fonts.body}>
                      <Icon />
                    </DesignCard>
                  ))}
                </DesignSkillsGrid>
              </SubSkills>
              <MobileBottomContainer>
                <ResumeTitle 
                  fontFamily={theme.fonts.body}
                  color={theme.colors.primary}
                >
                  Download Me!
                </ResumeTitle>
                <Button 
                  width="100%" 
                  backgroundColor={theme.colors.primary}
                  color={theme.colors.white}
                  fontFamily={theme.fonts.body}
                  onClick={openPDF}
                >
                  Resume
                </Button>
              </MobileBottomContainer>
            </BottomRightSection>
          </BottomSection>
        </Content>
      </InnerSection>
    </Section>
  );
});

export default SkillsSection;
