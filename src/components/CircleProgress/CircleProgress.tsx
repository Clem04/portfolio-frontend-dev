import React, { ReactNode } from 'react';
import { Svg, OuterCircle, ProgressCircle } from './CircleProgress.styles';

interface CircleProgressProps {
  percentage: number;
  strokeWidth?: number;
  circleColor?: string;
  progressColor?: string;
  isvisible: boolean;
  children: ReactNode
}

const CircleProgress: React.FC<CircleProgressProps> = ({
  percentage,
  strokeWidth = 4,
  circleColor = '#eaeaea',
  progressColor = '#f44336',
  isvisible,
  children
}) => {
  const radius = 50 - strokeWidth;
  const circumference = 2 * Math.PI * radius;
  const progressOffset = ((100 - percentage) / 100) * circumference;

  return (
    <Svg>
      <OuterCircle
        r={radius}
        cx={50}
        cy={50}
        strokeWidth={strokeWidth}
        circleColor={circleColor}
        circumference={circumference}
        progressOffset={progressOffset}
        progressColor={progressColor}
      />
      <ProgressCircle
        r={radius}
        cx={50}
        cy={50}
        strokeWidth={strokeWidth}
        circleColor={circleColor}
        progressColor={progressColor}
        circumference={circumference}
        progressOffset={progressOffset}
        animate={isvisible}
      />
      {children}
    </Svg>
  );
};

export default CircleProgress;
