import styled from 'styled-components';
import { fadeInAnimation } from '../Shared/Animation'

export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  position: relative;
  align-content: space-between;
`
export const SectionDescription = styled.p<{ isVisible: boolean }>`
  width: 60%;
  font-family: 'Kai';
  font-style: normal;
  font-weight: 400;
  font-size: 1.5em;
  line-height: 36px;
  color: #000000;
  ${props => fadeInAnimation(props.isVisible)}
  @media (max-width: 414px) {
    width: 100%;
    font-size: 1em;
    line-height: 24px;
  }
`

export const GridIndustries = styled.div<{ isVisible: boolean }>`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  height: fit-content;
  margin-top: 32px;
  ${props => fadeInAnimation(props.isVisible)}
  @media (max-width: 414px) {
    grid-template-columns: 1fr;
  }
`

export const Industry = styled.div<{borderRight?: string, borderBottom?: string}>`
  padding: 32px;
  border-right: ${(props) => props.borderRight || 'auto'};
  font-family: 'Karantina';
  font-style: normal;
  font-weight: 700;
  font-size: 3rem;
  color: #000000;
  text-align: center;
  @media (max-width: 414px) {
    border-right: none;
    border-bottom: ${(props) => props.borderBottom || 'auto'};
  }
  @media (max-width: 1024px) {
    font-size: 1.4rem;
  }
`
