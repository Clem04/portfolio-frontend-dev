import { HTMLAttributes } from 'react';
import styled from 'styled-components';

interface ParagraphProps extends HTMLAttributes<HTMLParagraphElement> {
  textAlign?: string;
}

// Divs
export const Content = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
`

export const TopSection = styled.div`
  width: fit-content;
  @media (max-width: 414px) {
    width: 100%;
  }
`

export const BottomSection = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 414px) {
    flex-wrap: wrap;
  }
`

export const BottomRightSection = styled.div`
  with: 70%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  @media (max-width: 414px) {
    width 100%;
    flex-wrap: wrap;
  }
`

export const SubSkills = styled.div`
  padding-right: 8px;
  border-right: 1px solid black;
  margin: 0 0 0 32px;
  height: auto;
  @media (max-width: 414px) {
    width 100%;
    padding-right: 0;
    border-right: none;
    margin: 32px 0;
  }
`

// Grid
export const SkillsContainerGrid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  margin: 0 0 32px 0;
  @media (max-width: 414px) {
    margin: 32px 0;
    grid-template-columns: repeat(2, 1fr);
    grid-row-gap: 32px;
  }
`

export const HrContainer = styled.div`
  display: none;
  @media (max-width: 414px) {
    width 100%;
    display: block;
  }
`

export const DesignSkillsGrid = styled.div`
  display: grid;
  margin-top: 24px;
  grid-template-columns: repeat(3, 1fr);
  row-gap: 16px;

  @media (max-width: 414px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;


// Texts
export const SectionName = styled.p`
  width: 100%;
  text-align: left;
  color: ${(props) => props.theme.colors.primary};
  font-family: 'League Gothic';
  font-style: normal;
  font-weight: 400;
  font-size: 4em;
  text-shadow: -9px 6px 14px rgba(0, 0, 0, 0.25);
  position: absolute;
  top: -96px;
  left: -105px;
`

export const Header = styled.p<ParagraphProps>`
  font-family: 'Jura', sans-serif;
  font-weight: 300;
  font-size: 1.2em;
  color: #063320;
  text-align: ${(props) => props.textAlign}
`

export const ResumeTitle = styled.p`
  width: 100%;
  font-family: 'Kai';
  font-style: normal;
  font-weight: 400;
  font-size: 0.8em;
  text-align: center;
  color: #063320;
  margin-bottom: 16px;
`

export const Language = styled.p`
  font-family: 'Kai';
  font-style: normal;
  font-weight: 400;
  font-size: 0.7em;
  line-height: 1.5em;
`

// Button
export const DesktopButtonContainer = styled.div`
  width 20%;
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 414px) {
    display: none;
  }
`

export const MobileBottomContainer = styled.div`
  display: none;
  @media (max-width: 414px) {
    width 100%;
    display: block;
  }
`
