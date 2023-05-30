import styled from 'styled-components';

const Header = styled.p<{ textAlign?: string}>`
  font-family: 'Jura', sans-serif;
  font-weight: 300;
  font-size: 1.2em;
  color: #063320;
  text-align: ${(props) => props.textAlign}
`

export default function SkillsSectionName({ name, textAlign }: { name: string; textAlign: string; Top?: string; Left?: string; Right?: string; }) {
  return (
    <>
      <Header textAlign={textAlign}>{name}</Header>
    </>
  )
}
