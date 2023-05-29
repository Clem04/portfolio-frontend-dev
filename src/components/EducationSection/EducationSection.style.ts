import { HTMLAttributes } from "react";
import styled from 'styled-components';

interface SectionEducationProps extends HTMLAttributes<HTMLDivElement> {
  marginTop?: string;
}

export const Content = styled.div`
  width: 100%;
  position: relative;
  padding: 64px;
  @media (max-width: 414px) {
    padding: 48px;
  }
`

export const DegreesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 10px;
  margin-top: 32px;
  @media (max-width: 414px) {
    grid-template-columns: repeat(1, 1fr);
    grid-row-gap: 64px;
  }
`

export const DegreeCard = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`

export const DegreeType = styled.p<SectionEducationProps>`
  width: 100%;
  text-align: center;
  font-family: 'Kai';
  font-style: normal;
  font-weight: 400;
  font-size: 1.2em;
  color: #000000;
  margin-top: ${(props) => props.marginTop || ''};
`

export const Degree = styled(DegreeType)`
  font-size: 0.9em;
`
