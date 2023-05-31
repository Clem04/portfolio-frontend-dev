import styled from 'styled-components';

export const DesignSkillCard = styled.div`
  width: 100px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  justify-self: center;
`

export const DesignSkillName = styled.p<{ fontFamily: string }>`
  width: 100%;
  margin-top: 16px;
  font-family: ${props => props.fontFamily};
  font-size: 0.7em;
  text-align: center;
`
