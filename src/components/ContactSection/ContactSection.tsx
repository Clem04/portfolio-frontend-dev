import { HTMLAttributes, RefObject } from "react";
import Section from '../Sections/Section/Section';
import { InnerSection } from '../Sections/InnerSection/InnerSection';
import { 
  Content, 
  SectionHeader, 
  IconContainer, 
  TopSection, 
  LinkedInDiv, 
  Text, 
  ButtonContainer 
} from './ContactSection.style'
import ProgressBar from '../ProgressBar/ProgressBar'
import Button from '../Buttons/Button/Button'

// Icons
import { ReactComponent as GithubIcon } from "../assets/svg/icons/github.svg"
import { ReactComponent as LinkedInIcon } from "../assets/svg/icons/linkedin.svg"

interface Theme {
  colors: {
    white: string;
    primary: string;
  },
  fonts: {
    body: string;
  }
}

interface ContactProps extends HTMLAttributes<HTMLDivElement> {
  theme: Theme;
  dataTestId: string;
  sectionRef?: RefObject<HTMLDivElement>;
  isvisible: boolean;
}

function ContactSection({ theme, dataTestId, sectionRef, isvisible }: ContactProps) {
  return (
    <Section 
      ref={sectionRef}
      dataTestId={dataTestId} 
      margin="50px 0 100px 0"
    >
      <InnerSection
        border='2px solid #063320'
        padding={{
          desktop: "32px",
          mobile: "24px"
        }}
      >
        <Content>
          <TopSection>
            <IconContainer isVisible={isvisible}>
              <GithubIcon />
              <LinkedInDiv>
                <LinkedInIcon />
              </LinkedInDiv>
            </IconContainer>
            <ProgressBar
              progress={100}
              width={{
                desktop: "30%",
                mobile: "100%"
              }}
              from="-356px" 
              to="0"
              color={theme.colors.primary}
              transform="rotate(180deg)"
              isvisible={isvisible}
            />
          </TopSection>
          <SectionHeader isVisible={isvisible}>Get in Touch!</SectionHeader>
          <ButtonContainer isVisible={isvisible}>
            <a href="mailto:iphona.paiement@gmail.com">
              <Button 
                width="100%"
                backgroundColor={theme.colors.primary}
                color={theme.colors.white}
                fontFamily={theme.fonts.body}
              >
                CONTACT
              </Button>
            </a>
          </ButtonContainer>
          <Text isVisible={isvisible}>
            Thank you for visiting my website! I'm thrilled to connect with you regarding the frontend software engineer role. I created this website to showcase my frontend development skills, and I believe it's a great platform to demonstrate my abilities.<br />
            <br />
            This website highlights my expertise in frontend development, particularly in creating visually appealing user interfaces. One of the highlights is an SVG file that I designed and implemented to enhance the overall user experience. It showcases my attention to detail and creativity in utilizing different web technologies.<br />
            <br />
            To develop this website, I utilized various tools and technologies. I built it using React Js, which allowed me to create a dynamic and interactive user interface. TypeScript was used to ensure type safety and maintainability of the codebase. React Testing Library helped me ensure the quality and stability of the application through comprehensive testing. Additionally, Styled-Components played a crucial role in crafting a consistent and visually appealing design.
            <br />
            <br />
            I would love to discuss my experience in more detail and how I can contribute to your organization. Please feel free to contact me at your convenience. I look forward to the opportunity to demonstrate my frontend software engineering skills and contribute to your team's success.
            <br />
          </Text>
        </Content>
      </InnerSection>
    </Section>
  )
}

export default ContactSection;
