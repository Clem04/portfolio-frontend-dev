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
    primary: string;
    white: string;
    black: string;
  },
  fonts: {
    sectionHeader: string;
    body: string;
  },
  fontWeights: {
    light: string;
    semiBold: string;
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
              <a 
                href="https://github.com/Clem04/portfolio-frontend-dev"
                target="_blank" 
                rel="noopener noreferrer"
              >
                <GithubIcon />
              </a>
              <a 
                href="https://www.linkedin.com/in/clemence-paiement/"
                target="_blank" 
                rel="noopener noreferrer"
              >
                <LinkedInDiv>
                  <LinkedInIcon />
                </LinkedInDiv>
              </a>
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
          <SectionHeader 
            isVisible={isvisible}
            fontFamily={theme.fonts.sectionHeader}
            color={theme.colors.black}
            fontWeight={theme.fontWeights.semiBold}
          >
            Get in Touch!
          </SectionHeader>
          <ButtonContainer isVisible={isvisible}>
            <a href="mailto:iphona.paiement@gmail.com">
              <Button 
                width="100%"
                backgroundColor={theme.colors.primary}
                color={theme.colors.white}
                fontFamily={theme.fonts.body}
                fontWeight={theme.fontWeights.light}
              >
                CONTACT
              </Button>
            </a>
          </ButtonContainer>
          <Text 
            isVisible={isvisible}
            fontFamily={theme.fonts.sectionHeader}
            color={theme.colors.black}
            fontWeight={theme.fontWeights.light}
          >
            Thank you for visiting my website! I'm thrilled to connect with you regarding your software engineer role and needs as a company. I created this website to showcase some of my frontend development skills and I believe it's a great platform to demonstrate my abilities.<br />
            <br />
            To develop this website, I utilized various tools and technologies. I built it using React Js which allowed me to create a dynamic and interactive user interface. TypeScript was used to ensure type safety and maintainability of the codebase. React Testing Library helped me ensure the quality and stability of the application through comprehensive testing. Additionally, Styled-Components played a crucial role in crafting a consistent and visually appealing design.<br />
            <br />
            In addition to my frontend skills, I also have knowledge in Ruby on Rails technologies. Furthermore, I am currently expanding my skillset by learning Python Django. While this website does not have a backend, I have experience with API calls, Graphql, Postgresql, and other backend technologies.<br />
            <br />
            I would love to discuss my experience in more details and how I can contribute to your organization. Please feel free to contact me at your convenience. I look forward to the opportunity to demonstrate my frontend software engineering skills and contribute to your team's success!
            <br />
          </Text>
        </Content>
      </InnerSection>
    </Section>
  )
}

export default ContactSection;
