import styled from 'styled-components';
import { fadeInAnimation } from '../Shared/Animation'

export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

export const TopSection = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-wrap: wrap;
`

export const IconContainer = styled(TopSection)<{ isVisible: boolean }>`
  ${props => fadeInAnimation(props.isVisible)}
`

export const LinkedInDiv = styled.div`
  margin-left: 8px;
`

export const SectionHeader = styled.p<{ 
  isVisible: boolean, 
  fontFamily: string, 
  color: string,
  fontWeight: string
}>`
  width: 100%;
  margin: 16px 0;
  height: fit-content;
  font-family: ${props => props.fontFamily};
  color: ${props => props.color};
  font-weight: ${props => props.fontWeight};
  font-size: 2em;
  text-align: center;
  ${props => fadeInAnimation(props.isVisible)};
`

export const Text = styled.p<{ 
  isVisible: boolean, 
  fontFamily: string, 
  color: string,
  fontWeight: string
}>`
  margin-top: 40px;
  padding: 0 72px;
  font-family: ${props => props.fontFamily};
  color: ${props => props.color};
  font-weight: ${props => props.fontWeight};
  font-size: 1rem;
  line-height: 24px;
  text-align: center;
  ${props => fadeInAnimation(props.isVisible)}
  @media (max-width: 414px) {
    text-align: left;
    padding: 0px;
  }
`

export const ButtonContainer = styled.div<{ isVisible: boolean }>`
  width: 20%;
  margin: 24px 0;
  ${props => fadeInAnimation(props.isVisible)}
  @media (max-width: 414px) {
    width: 100%;
  }
`
