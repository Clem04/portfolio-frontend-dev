import { HTMLAttributes, ReactNode  } from "react";
import styled from 'styled-components';
import CircleProgress from '../../CircleProgress/CircleProgress';

const Card = styled.div`
  width: 100%;
`

const SkillName = styled.p`
  width: 100%;
  height: 16px;
  font-size: 0.8em;
  margin-top: 16px;
  text-align: center;
`
const Percentage = styled.p`
  margin-top: 24px;
  font-family: 'Kai';
  font-style: normal;
  font-weight: 400;
  font-size: 1em;
  text-align: center;
  color: #063320;
  margin-top: 24px;
`

interface TechnicalCardProps extends HTMLAttributes<HTMLDivElement> {
  isVisible: boolean;
  children: ReactNode;
  progressColor: string;
  skillLabel: string;
  percentage: number;
}

export default function TechnicalCard({ isVisible, progressColor, skillLabel, percentage, children }: TechnicalCardProps) {
  return (
    <Card>
        <CircleProgress 
          percentage={percentage} 
          isVisible={isVisible} 
          progressColor={progressColor}
        >
          {children}
        </CircleProgress>
        <SkillName>{skillLabel}</SkillName>
        <Percentage>{percentage}%</Percentage>
    </Card>
  )
}