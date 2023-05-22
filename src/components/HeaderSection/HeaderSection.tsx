import { HTMLAttributes, useEffect, forwardRef, useState } from 'react';
import Section from '../Sections/Section/Section';
import ProgressBar from '../ProgressBar/ProgressBar';
import { InnerSection } from '../Sections/InnerSection/InnerSection';
import {
  Name,
  Profession,
  CertificationContainer,
  Certification,
  LocationDiv,
  Location,
  IconLocation,
  ArrowDownIcon
} from './HeaderSectionStyles';

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
  onClick: () => void;
  animate?: boolean;
}

export const HeaderSection = forwardRef<HTMLDivElement, HeaderSectionProps>(
  ({ theme, dataTestId, onClick, animate, ...rest }: HeaderSectionProps, ref) => {
    const [fadeInCertification, setFadeInCertification] = useState(false);

    const handleAnimationFinish = () => {
      setFadeInCertification(true);
    };

    useEffect(() => {
      if (animate) {
        setFadeInCertification(true);
      }
    }, [animate]);

    const handleArrowDown = () => {
      onClick();
    };

    return (
      <Section
        ref={ref}
        backgroundColor={theme.colors.primary}
        dataTestId={dataTestId}
        {...rest}
      >
        <InnerSection
          height={{
            desktop: '600px',
            tablet: '400px',
            mobile: '300px',
          }}
          border={`1px solid ${theme.colors.white}`}
        >
          <Name>Clem Paiement.</Name>
          <Profession>Software Frontend Engineer</Profession>
          <CertificationContainer>
            <ProgressBar
              progress={100}
              from="-500px" 
              to="0"
              color={theme.colors.white}
              onAnimationFinish={handleAnimationFinish}
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
