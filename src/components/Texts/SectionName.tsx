import { HTMLAttributes } from "react";
import styled from 'styled-components';

export const Name = styled.p<SectionNameProps>`
  width: 100%;
  text-align: ${(props) => props.textAlign};
  color: ${(props) => props.theme.colors.primary};
  font-family: 'League Gothic';
  font-style: normal;
  font-weight: 400;
  font-size: 4.2em;
  text-shadow: -9px 6px 14px rgba(0, 0, 0, 0.25);
  position: absolute;
  top: ${(props) => props.Top || 'auto'};
  left: ${(props) => props.Left || 'auto'};
  right: ${(props) => props.Right || 'auto'};
`

interface SectionNameProps extends HTMLAttributes<HTMLDivElement> {
  textAlign: string;
  Top?: string;
  Left?: string;
  Right?: string;
}

export default function SectionName({ label, textAlign, Top, Left, Right }: { label: string; textAlign: string; Top?: string; Left?: string; Right?: string; }) {
  return (
    <Name textAlign={textAlign} Top={Top} Left={Left} Right={Right}>{label}</Name>
  )
}
