import styled from 'styled-components';

export const Card = styled.div`
  width: 100%;
`

export const SkillName = styled.p<{ fontFamily: string }>`
  width: 100%;
  height: 16px;
  margin: 16px 0;
  font-family: ${props => props.fontFamily};
  font-size: 0.8em;
  text-align: center;
`
export const Percentage = styled.p<{ color: string, fontFamily: string }>`
  margin-top: 16px;
  font-family: ${props => props.fontFamily};
  font-size: 1em;
  text-align: center;
  color: ${props => props.color};
`

export const ProgressContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`