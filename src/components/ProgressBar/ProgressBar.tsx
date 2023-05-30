import { useState, useEffect, forwardRef, HTMLAttributes } from 'react';
import {  CSSProperties } from 'styled-components';
import { ProgressBarContainer, Progress, BouncingCircle } from './ProgressBar.style'

export interface ProgressBarProps extends HTMLAttributes<HTMLDivElement> {
  progress: number;
  color: string;
  animate?: boolean;
  width?: {
    desktop?: CSSProperties['width'];
    tablet?: CSSProperties['width'];
    mobile?: CSSProperties['width'];
  };
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
