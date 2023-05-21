import { useContext } from "react";
import styled, { ThemeContext } from "styled-components";
import HeaderSection from "../HeaderSection/HeaderSection";
import SkillsSection from "../SkillsSection/SkillsSection";
import IndustriesSection from "../IndustriesSection/IndustriesSection";
import EducationSection from "../EducationSection/EducationSection";
import ContactSection from "../ContactSection/ContactSection";

const AppContainer = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  position: relative;
`;

const HeaderContainer = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  left: 0;
  background-color: ${(props) => props.theme.colors.primary};
  z-index: -1;
`;

const Content = styled.div`
  width: 80vw;
  color: ${(props) => props.theme.colors.black};
`;

function App() {
  
  const theme = useContext(ThemeContext);

  return (
    <AppContainer>
      <HeaderContainer />
      <Content>
        <HeaderSection theme={theme} dataTestId="header-section" />
        <SkillsSection theme={theme} dataTestId="skills-section" />
        <IndustriesSection theme={theme} dataTestId="industries-section" />
        <EducationSection theme={theme} dataTestId="education-section" />
        <ContactSection theme={theme} dataTestId="contact-section" />
      </Content>
    </AppContainer>
  );
}

export default App;
