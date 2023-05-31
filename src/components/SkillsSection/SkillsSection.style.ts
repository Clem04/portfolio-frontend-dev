import styled from 'styled-components';
import { fadeInAnimation } from '../Shared/Animation'

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
  min-width: 72%;
  @media (max-width: 414px) {
    width: 100%;
  }
  @media (max-width: 1024px) {
    margin-bottom: 32px;
  }
`

export const BottomSection = styled.div<{ isvisible: boolean }>`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${props => fadeInAnimation(props.isvisible)}
  @media (max-width: 414px) {
    flex-wrap: wrap;
  }
`;

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

export const SubSkills = styled.div<{ color: string}>`
  height: auto;
  padding-right: 8px;
  border-right: 1px solid ${(props) => props.color};
  margin: 0 0 0 32px;
  @media (max-width: 414px) {
    width 100%;
    padding-right: 0;
    border-right: none;
    margin: 32px 0;
  }
`

export const HrContainer = styled.div`
  display: none;
  @media (max-width: 414px) {
    width 100%;
    display: block;
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

  @media (min-width: 415px) and (max-width: 768px) {
    margin: 32px 0;
    grid-template-columns: repeat(4, 1fr);
    grid-row-gap: 32px;
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
export const ResumeTitle = styled.p<{ 
  fontFamily: string, 
  color: string
}>`
  width: 100%;
  font-family: ${props => props.fontFamily};
  font-size: 0.8em;
  text-align: center;
  color: ${props => props.color};
  margin-bottom: 16px;
`

export const Language = styled.p<{ fontFamily: string}>`
  font-family: ${props => props.fontFamily};
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
    margin: 16px 0 32px 0;
  }
`
