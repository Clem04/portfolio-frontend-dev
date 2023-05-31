import { HTMLAttributes, ReactNode  } from "react";
import { Card, SkillName, Percentage, ProgressContainer } from './TechnicalCard.style'
import CircleProgress from '../../CircleProgress/CircleProgress';
import Hr from "../../Hr/Hr";

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
        <ProgressContainer>
          <CircleProgress 
            percentage={percentage} 
            isVisible={isVisible} 
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
