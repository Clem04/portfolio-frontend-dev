import { HTMLAttributes, forwardRef, RefObject } from 'react';
import Section from '../Sections/Section/Section';
import ProgressBar from '../ProgressBar/ProgressBar';
import { InnerSection } from '../Sections/InnerSection/InnerSection';
import { useFadeInCertification } from '../Shared/hooks/useFadeInCertification'
import {
  Name,
  Profession,
  CertificationContainer,
  Certification,
  LocationDiv,
  Location,
  IconLocation,
  ArrowDownIcon
} from './HeaderSection.style';

interface Theme {
  colors: {
    primary: string;
    white: string;
  };
  fonts: {
    topSection: string;
  };
}

interface HeaderSectionProps extends HTMLAttributes<HTMLDivElement> {
  theme: Theme;
  dataTestId: string;
  sectionRef?: RefObject<HTMLDivElement>;
  onClick: () => void;
  animate?: boolean;
  isVisible: boolean;
}

export const HeaderSection = forwardRef<HTMLDivElement, HeaderSectionProps>(
  ({ 
    theme, 
    dataTestId, 
    isVisible, 
    onClick, 
    animate, 
    sectionRef, 
    ...rest 
  }: HeaderSectionProps) => {
    
    const { fadeInCertification, handleAnimationFinish } = useFadeInCertification(animate);

    const handleArrowDown = () => {
      onClick();
    };

    return (
      <Section
        ref={sectionRef}
        dataTestId={dataTestId}
        backgroundColor={theme.colors.primary}
        {...rest}
        height="100vh"
      >
        <InnerSection
          height={{
            desktop: '80vh',
            tablet: '72vh',
            mobile: '64vh',
          }}
          padding="80px 80px 24px 80px"
          border={`1px solid ${theme.colors.white}`}
        >
          <Name>Clem Paiement.</Name>
          <Profession>Software Frontend Engineer</Profession>
          <CertificationContainer>
            <ProgressBar
              progress={100}
              width="500px"
              from="-500px" 
              to="0"
              color={theme.colors.white}
              onAnimationFinish={handleAnimationFinish}
              isVisible={isVisible}
              margin="0 24px 0 0"
            />
            <Certification className={fadeInCertification ? 'fade-in' : ''}>
              Certified Ui/UX Designer
            </Certification>
          </CertificationContainer>
          <LocationDiv>
            <Location>Canada</Location>
            <IconLocation />
          </LocationDiv>
          <ArrowDownIcon onClick={handleArrowDown} />
        </InnerSection>
      </Section>
    );
  }
);
