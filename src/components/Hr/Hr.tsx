import { HTMLAttributes } from "react";
import styled from 'styled-components';

const Line = styled.hr<HrProps>`
  width: ${(props) => props.width};
  color: black;
`

interface HrProps extends HTMLAttributes<HTMLDivElement> {
   width: string;
}

export default function Hr({ width }: HrProps) {
  return (
    <Line width={width} data-testid="hr-line" />
  )
}
