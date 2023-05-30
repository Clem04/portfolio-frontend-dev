import { useContext, useEffect, useRef, useState } from "react";
import { ThemeContext } from "styled-components";
import { HeaderSection } from "../HeaderSection/HeaderSection";
import SkillsSection from "../SkillsSection/SkillsSection";
import IndustriesSection from "../IndustriesSection/IndustriesSection";
import EducationSection from "../EducationSection/EducationSection";
import ContactSection from "../ContactSection/ContactSection";
import { AppContainer, HeaderContainer, Content } from './App.style'
import "intersection-observer";

function App() {

  const theme = useContext(ThemeContext);

  const headerSectionRef = useRef<HTMLDivElement>(null);
  const skillsSectionRef = useRef<HTMLDivElement>(null);
  const industriesSectionRef = useRef<HTMLDivElement>(null);
  const educationSectionRef = useRef<HTMLDivElement>(null);
  const contactSectionRef = useRef<HTMLDivElement>(null);

  const [isVisible, setIsVisible] = useState({
    header: true,
    skills: false,
    industries: false,
    education: false,
    contact: false,
  });

  const handleArrowDown = () => {
    if (skillsSectionRef.current) {
      skillsSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleIntersection = (entry: IntersectionObserverEntry) => {

      const { target, isIntersecting } = entry;
      
      if (target === headerSectionRef.current) {
        setIsVisible((prevState) => ({
          ...prevState,
          header: isIntersecting,
        }));    
      }
      else if (target === skillsSectionRef.current) {
        setIsVisible((prevState) => ({
          ...prevState,
          skills: isIntersecting,
        }));
      } else if (target === industriesSectionRef.current) {
        setIsVisible((prevState) => ({
          ...prevState,
          industries: isIntersecting,
        }));
      } else if (target === educationSectionRef.current) {
        setIsVisible((prevState) => ({
          ...prevState,
          education: isIntersecting,
        }));
      } else if (target === contactSectionRef.current) {
        setIsVisible((prevState) => ({
          ...prevState,
          contact: isIntersecting,
        }));
      }
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(handleIntersection);
    }, { threshold: 0.5 });

    if (headerSectionRef.current) {
      observer.observe(headerSectionRef.current);
    }

    if (skillsSectionRef.current) {
      observer.observe(skillsSectionRef.current);
    }
    if (industriesSectionRef.current) {
      observer.observe(industriesSectionRef.current);
    }
    if (educationSectionRef.current) {
      observer.observe(educationSectionRef.current);
    }
    if (contactSectionRef.current) {
      observer.observe(contactSectionRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <AppContainer>
      <HeaderContainer />
      <Content>
        <HeaderSection
          theme={theme}
          dataTestId="header-section"
          ref={headerSectionRef}
          onClick={handleArrowDown}
          isVisible={isVisible.header}
        />
        <SkillsSection
          theme={theme}
          dataTestId="skills-section"
          ref={skillsSectionRef}
          isVisible={isVisible.skills}
        />
        <IndustriesSection 
          theme={theme} 
          dataTestId="industries-section" 
          sectionRef={industriesSectionRef}
          isVisible={isVisible.industries}
        />
        <EducationSection 
          theme={theme} 
          dataTestId="education-section" 
          sectionRef={educationSectionRef}
          isVisible={isVisible.education}
        />
        <ContactSection 
          theme={theme} 
          dataTestId="contact-section" 
          sectionRef={contactSectionRef}
          isVisible={isVisible.contact}
        />
      </Content>
    </AppContainer>
  );
}

export default App;
