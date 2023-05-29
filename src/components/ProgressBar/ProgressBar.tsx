import { useState, useEffect, forwardRef, HTMLAttributes } from 'react';
import styled, { css } from 'styled-components';
import { slidingAnimation, GelatineAnimation } from '../Shared/Animation';

const ProgressBarContainer = styled.div<{ 
  width: string, 
  transform: string | 'none' | undefined }
>`
  width: ${({ width }) => width};
  height: 20px;
  border-radius: 10px;
  overflow: hidden;
  display: flex;
  align-items: center;
  transform: ${(props) => props.transform || ""};
`;

const Progress = styled.div<{ 
  progress: number, 
  from: string, 
  to: string, 
  isVisible: boolean 
}>`
  width: ${({ progress }) => progress}%;
  height: 1px;
  background-color: ${({ color }) => color};
  animation: ${(
    { from, to, isVisible }) => 
      isVisible ? css`${slidingAnimation(from, to)} 1s ease-out` : 'none'
  };
  animation-fill-mode: forwards;
`;

const BouncingCircle = styled.div<{ 
  animate: boolean; 
  color: string 
}>`
  width: 20px;
  height: 20px;
  background-color: ${({ color }) => color};
  border-radius: 50%;
  opacity: ${({ animate }) => (animate ? 1 : 0)};
  transform: ${({ animate }) => (animate ? 'scale(1)' : 'scale(0)')};
  transition: opacity 0.5s, transform 0.5s;
  animation: ${({ animate }) =>
    animate
      ? css`
          ${GelatineAnimation} 2s linear 1
        `
      : 'none'};
`;

export interface ProgressBarProps extends HTMLAttributes<HTMLDivElement> {
  progress: number;
  color: string;
  animate?: boolean;
  width: string;
  from: string;
  to: string;
  transform?: string;
  onAnimationFinish?: () => void;
  isVisible: boolean;
}

const ProgressBar = forwardRef<HTMLDivElement, ProgressBarProps>(
  ({ 
      progress, 
      color, 
      animate, 
      width, 
      from, 
      to, 
      onAnimationFinish, 
      transform, 
      isVisible 
    }: ProgressBarProps,
    ref) => {
    const [animateBouncing, setAnimateBouncing] = useState(false);

    useEffect(() => {
      if (isVisible && progress === 100) {
        const timer = setTimeout(() => {
          setAnimateBouncing(true);
          if (onAnimationFinish) {
            onAnimationFinish();
          }
        }, 1000);
        return () => clearTimeout(timer);
      } else {
        setAnimateBouncing(false);
      }
    }, [isVisible, progress, onAnimationFinish]);

    return (
      <ProgressBarContainer 
        ref={ref} 
        width={width} 
        transform={transform} 
      >
        <Progress 
          progress={progress} 
          color={color} 
          from={from} 
          to={to} 
          isVisible={isVisible} 
        />
        {
          progress === 100 && 
            <BouncingCircle 
              animate={animate !== undefined ? animate : animateBouncing} 
              color={color} 
            />
        }
      </ProgressBarContainer>
    );
  }
);

export default ProgressBar;
