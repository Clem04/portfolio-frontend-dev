import { HTMLAttributes } from "react";
import styled from 'styled-components';

export const Section = styled.p`
  width: 100%;
  text-align: left;
  color: ${(props) => props.theme.colors.primary};
  font-family: 'League Gothic';
  font-style: normal;
  font-weight: 400;
  font-size: 4.2em;
  text-shadow: -9px 6px 14px rgba(0, 0, 0, 0.25);
  position: absolute;
  top: -88px;
  left: -88px;
`

interface SectionNameProps extends HTMLAttributes<HTMLDivElement> {
    label: string;
  }

export default function SectionName({ label }: SectionNameProps) {
  return (
    <Section>{label}</Section>
  )
}
