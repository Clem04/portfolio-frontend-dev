import { HTMLAttributes } from 'react';
import styled from 'styled-components';

interface ParagraphProps extends HTMLAttributes<HTMLParagraphElement> {
  textAlign?: string;
}

export const Content = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
`

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

export const TopSection = styled.div`
  width: fit-content;
`

export const Header = styled.p<ParagraphProps>`
  font-family: 'Jura', sans-serif;
  font-weight: 300;
  font-size: 1.2em;
  color: #063320;
  text-align: ${(props) => props.textAlign}
`

export const Hr = styled.hr`
  width: 100%;
  color: black;
  margin-bottom: 2%;
`

export const SkillsContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
`

export const BottomSection = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const BottomRightSection = styled.div`
  with: 70%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
`

export const ButtonContainer = styled.div`
  width 20%;
  display: flex;
  flex-wrap: wrap;
`

export const ResumeTitle = styled.p`
  width: 100%;
  font-family: 'Kai';
  font-style: normal;
  font-weight: 400;
  font-size: 0.8em;
  text-align: center;
  color: #063320;
`

export const ResumeButton = styled.button`
  width: 100%;
  padding: 16px 24px;
  margin-top: 8px;
  background: #063320;
  border: 2px solid #063320;
  border-radius: 50px;
  color: white;
  font-family: 'Kai';
  font-style: normal;
  font-weight: 400;
  font-size: 0.8em;
  text-align: center;
  color: #FFFFFF;
  &:hover {
    cursor: pointer;
  }
`

export const SubSkills = styled.div`
  padding-right: 8px;
  border-right: 1px solid black;
  margin-left: 32px;
  height: auto;
`

export const Language = styled.p`
  font-family: 'Kai';
  font-style: normal;
  font-weight: 400;
  font-size: 0.7em;
  line-height: 1.5em;
`

export const DesignSkillsGrid = styled.div`
  display: grid;
  margin-top: 24px;
  grid-template-columns: repeat(3, 100px);
  grid-template-rows: repeat(2, 1fr);
  row-gap: 16px;
`

export const DesignSkillCard = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

export const DesignSkillName = styled.p`
  width: 100%;
  font-family: 'Kai';
  font-size: 0.7em;
  text-align: center;
  margin-top: 16px;
`
