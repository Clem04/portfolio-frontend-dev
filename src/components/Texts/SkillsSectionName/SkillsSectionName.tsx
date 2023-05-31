import styled from 'styled-components';

const Header = styled.p<{ textAlign?: string, color: string, fontFamily: string;}>`
  font-family: ${(props) => props.fontFamily};
  font-size: 1.2em;
  color: ${(props) => props.color};
  text-align: ${(props) => props.textAlign};
`

export default function SkillsSectionName({ name, textAlign, color, fontFamily }: { name: string; textAlign: string; color: string; fontFamily: string }) {
  return (
    <>
      <Header textAlign={textAlign} color={color} fontFamily={fontFamily}>{name}</Header>
    </>
  )
}
