import { useState, useEffect, forwardRef, HTMLAttributes } from 'react';
import styled, { css } from 'styled-components';
import { slidingAnimation, GelatineAnimation } from '../Shared/Animation'

const ProgressBarContainer = styled.div`
  width: 500px;
  height: 20px;
  border-radius: 10px;
  overflow: hidden;
  display: flex;
  align-items: center;
  margin-right: 24px;
`;

const Progress = styled.div<{ progress: number, from: string, to: string }>`
  width: ${({ progress }) => progress}%;
  height: 1px;
  background-color: ${({ color }) => color};
  animation: ${({ from, to }) => slidingAnimation(from, to)} 1s ease-out;
`;

const BouncingCircle = styled.div<{ animate: boolean; color: string }>`
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
  from: string;
  to: string;
  onAnimationFinish?: () => void;
}

const ProgressBar = forwardRef<HTMLDivElement, ProgressBarProps>(
  ({ progress, color, animate, from, to, onAnimationFinish }: ProgressBarProps, ref) => {
    const [animateBouncing, setAnimateBouncing] = useState(false);

    useEffect(() => {
      if (progress === 100) {
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
    }, [progress, onAnimationFinish]);

    return (
      <ProgressBarContainer ref={ref}>
        <Progress progress={progress} color={color} from={from} to={to} />
        {progress === 100 && <BouncingCircle animate={animate !== undefined ? animate : animateBouncing} color={color} />}
      </ProgressBarContainer>
    );
  }
);

export default ProgressBar;
