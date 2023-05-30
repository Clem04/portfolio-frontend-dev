import styled, { css } from 'styled-components';
import { ProgressBarProps } from './ProgressBar';
import { slidingAnimation, GelatineAnimation } from '../Shared/Animation';

export const ProgressBarContainer = styled.div<Pick<ProgressBarProps, 'width' | 'transform'>>`
  width: ${({ width }) => width?.desktop};
  height: 20px;
  border-radius: 10px;
  overflow: hidden;
  display: flex;
  align-items: center;
  transform: ${({ transform }) => transform};
  @media (max-width: 414px) {
    width: ${({ width }) => width?.mobile};
  }
  @media (max-width: 1024px) {
    width: ${({ width }) => width?.tablet};
  }
`;

export const Progress = styled.div<{ 
    progress: number, 
    from: string, 
    to: string, 
    isVisible: boolean 
}>`
  display: ${({ isVisible }) => (isVisible ? 'block' : 'none')};
  width: ${({ progress }) => progress}%;
  height: 1px;
  background-color: ${({ color }) => color};
  animation: ${({ from, to, isVisible }) =>
    isVisible ? css`${slidingAnimation(from, to)} 1s ease-out` : 'none'};
  animation-fill-mode: forwards;
`;
  

export const BouncingCircle = styled.div<{ 
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
