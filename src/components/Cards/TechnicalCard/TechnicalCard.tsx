import { HTMLAttributes, ReactNode  } from "react";
import { Card, SkillName, Percentage, ProgressContainer } from './TechnicalCard.style'
import CircleProgress from '../../CircleProgress/CircleProgress';
import Hr from "../../Hr/Hr";

interface TechnicalCardProps extends HTMLAttributes<HTMLDivElement> {
  isvisible: boolean;
  children: ReactNode;
  progressColor: string;
  skillLabel: string;
  percentage: number;
}

export default function TechnicalCard({ isvisible, progressColor, skillLabel, percentage, children }: TechnicalCardProps) {
  return (
    <Card>
        <ProgressContainer>
          <CircleProgress 
            percentage={percentage} 
            isvisible={isvisible} 
            progressColor={progressColor}
          >
            {children}
          </CircleProgress>
        </ProgressContainer>
        <SkillName>{skillLabel}</SkillName>
        <Hr width="20%" />
        <Percentage>{percentage}%</Percentage>
    </Card>
  )
}
