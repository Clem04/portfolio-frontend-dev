import styled from 'styled-components';
import { fadeInAnimation } from '../Shared/Animation'

export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  position: relative;
  align-content: space-between;
`
export const SectionDescription = styled.p<{ 
  isVisible: boolean, 
  fontFamily: string, 
  color: string,
  fontWeight: string
}>`
  width: 60%;
  font-family: ${props => props.fontFamily};
  color: ${props => props.color};
  font-weight: ${props => props.fontWeight};
  font-size: 1.5em;
  line-height: 36px;
  ${props => fadeInAnimation(props.isVisible)};
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
  ${props => fadeInAnimation(props.isVisible)};
  @media (max-width: 414px) {
    grid-template-columns: 1fr;
  }
`

export const Industry = styled.div<{ 
  borderRight?: string, 
  borderBottom?: string,
  fontFamily: string,
  fontWeight: string,
  color: string
}>`
  padding: 32px;
  border-right: 1px solid ${(props) => props.borderRight || 'auto'};
  font-family: ${props => props.fontFamily};
  color:${props => props.color};
  font-weight: ${props => props.fontWeight};
  font-size: 3rem;
  text-align: center;
  @media (max-width: 414px) {
    border-right: none;
    border-bottom: ${(props) => props.borderBottom || 'auto'};
  }
  @media (max-width: 1024px) {
    font-size: 1.4rem;
  }
`
