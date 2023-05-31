import styled from 'styled-components';
import { fadeInAnimation } from '../Shared/Animation'

export const Content = styled.div`
  width: 100%;
  position: relative;
  padding: 64px;
  @media (max-width: 414px) {
    padding: 48px;
  }
  @media (max-width: 1024px) {
    padding: 0;
  }
`

export const DegreesGrid = styled.div<{ isvisible: boolean }>`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 10px;
  margin-top: 32px;
  ${props => fadeInAnimation(props.isvisible)}
  @media (max-width: 414px) {
    grid-template-columns: repeat(1, 1fr);
    grid-row-gap: 64px;
  }
`

export const DegreeCard = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  @media (max-width: 414px) {
    width: 100%;
  }
  @media (min-width: 768px) {
    width: 23vw;
  }
`

export const DegreeType = styled.p<{ 
  marginTop?: string, 
  fontFamily: string, 
  color: string,
  fontWeight: string
}>`
  width: 100%;
  margin-top: ${(props) => props.marginTop || ''};
  font-family: ${(props) => props.fontFamily};
  font-weight: ${(props) => props.fontWeight};
  font-size: 1.2em;
  line-height: 24px;
  color: ${(props) => props.color};
  text-align: center;
`

export const Degree = styled(DegreeType)`
  font-size: 0.9em;
`
