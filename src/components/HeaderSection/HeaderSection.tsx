import { HTMLAttributes, forwardRef } from 'react';
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
  onClick: () => void;
  animate?: boolean;
  isVisible: boolean;
}

export const HeaderSection = forwardRef<HTMLDivElement, HeaderSectionProps>(
  ({ theme, dataTestId, isVisible, onClick, animate,  ...rest }, ref) => {

    const handleArrowDown = () => {
      onClick();
    };

    return (
      <Section
        ref={ref}
        dataTestId={dataTestId}
        {...rest}
        height="100vh"
        margin="0 0 50px 0"
        {...rest}
      >
        <InnerSection
          height={{
            desktop: "80vh",
            mobile: "80vh"
          }}
          padding={{
            desktop: "80px 80px 24px 80px",
            mobile: "24px"
          }}
          border={`1px solid ${theme.colors.white}`}
        >
          <Name isVisible={isVisible}>Clem Paiement.</Name>
          <Profession isVisible={isVisible}>Software Frontend Engineer</Profession>
          <CertificationContainer>
            <ProgressBar
              progress={100}
              width={{
                desktop: "50%",
                tablet: "70%",
                mobile: "80%"
              }}
              from="-500px" 
              to="0"
              color={theme.colors.white}
              isVisible={isVisible}
            />
            <Certification isVisible={isVisible}>
              Certified Ui/UX Designer
            </Certification>
          </CertificationContainer>
          <LocationDiv>
            <Location isVisible={isVisible}>Canada</Location>
            <IconLocation isVisible={isVisible} />
          </LocationDiv>
          <ArrowDownIcon onClick={handleArrowDown} />
        </InnerSection>
      </Section>
    );
  }
);
