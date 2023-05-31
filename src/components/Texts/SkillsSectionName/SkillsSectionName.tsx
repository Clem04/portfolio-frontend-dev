import styled from 'styled-components';

const Header = styled.p<{ textAlign?: string, color: string}>`
  font-family: 'Jura', sans-serif;
  font-weight: 300;
  font-size: 1.2em;
  color: ${(props) => props.color};
  text-align: ${(props) => props.textAlign};
`

export default function SkillsSectionName({ name, textAlign, color }: { name: string; textAlign: string; color: string; }) {
  return (
    <>
      <Header textAlign={textAlign} color={color}>{name}</Header>
    </>
  )
}
