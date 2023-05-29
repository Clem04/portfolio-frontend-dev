import { HTMLAttributes } from "react";
import styled from 'styled-components';

const Header = styled.p<SkillsSectionNameProps>`
  font-family: 'Jura', sans-serif;
  font-weight: 300;
  font-size: 1.2em;
  color: #063320;
  text-align: ${(props) => props.textAlign}
`

const Hr = styled.hr`
  width: 100%;
  color: black;
  margin-bottom: 2%;
`

interface SkillsSectionNameProps extends HTMLAttributes<HTMLDivElement> {
  textAlign: string;
}

export default function SkillsSectionName({ name, textAlign }: { name: string; textAlign: string; Top?: string; Left?: string; Right?: string; }) {
  return (
    <>
      <Header textAlign={textAlign}>{name}</Header>
      <Hr />
    </>
  )
}
