import { HTMLAttributes } from "react";
import styled from 'styled-components';

interface SectionIndustriesProps extends HTMLAttributes<HTMLDivElement> {
  borderRight?: string;
  borderBottom ?: string;
}

export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  position: relative;
  padding: 64px;
  align-content: space-between;
  @media (max-width: 414px) {
    padding: 48px;
  }
`
export const SectionDescription = styled.p`
  width: 60%;
  font-family: 'Kai';
  font-style: normal;
  font-weight: 400;
  font-size: 1.5em;
  line-height: 36px;
  color: #000000;
  @media (max-width: 414px) {
    width: 100%;
  }
`

export const SectionIndustries = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  height: fit-content;
  margin-top: 32px;
  @media (max-width: 414px) {
    grid-template-columns: repeat(1, 1fr);
  }
`

export const Industry = styled.div<SectionIndustriesProps>`
  padding: 32px;
  border-right: ${(props) => props.borderRight || 'auto'};
  font-family: 'Karantina';
  font-style: normal;
  font-weight: 700;
  font-size: 3em;
  color: #000000;
  text-align: center;
  @media (max-width: 414px) {
    border-right: none;
    border-bottom: ${(props) => props.borderBottom || 'auto'};
    font-size: 2rem;
  }
`
