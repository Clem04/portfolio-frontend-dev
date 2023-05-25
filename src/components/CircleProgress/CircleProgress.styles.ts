import styled, { keyframes, css, Keyframes } from 'styled-components';

interface CircleProgressProps {
  circumference: number;
  progressOffset: number;
  circleColor: string;
  strokeWidth: number;
  progressColor: string;
}

const createProgressAnimation = (props: CircleProgressProps): Keyframes => keyframes`
  from {
    stroke-dashoffset: ${props.circumference};
  }
  to {
    stroke-dashoffset: ${props.progressOffset};
  }
`;

export const Svg = styled.svg`
  width: 100px;
  height: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const OuterCircle = styled.circle<CircleProgressProps>`
  fill: none;
  stroke: ${(props) => props.circleColor};
  stroke-width: ${(props) => props.strokeWidth}px;
`;

export const ProgressCircle = styled.circle<CircleProgressProps & { animate: boolean }>`
  fill: none;
  stroke: ${(props) => props.progressColor};
  stroke-width: ${(props) => props.strokeWidth}px;
  stroke-dasharray: ${(props) => props.circumference} ${(props) => props.circumference};
  stroke-dashoffset: ${(props) => props.progressOffset};
  transform: rotate(-90deg);
  transform-origin: 50% 50%;
  animation: ${({ animate, ...props }) =>
    animate ? css`${createProgressAnimation(props as CircleProgressProps)} 1s forwards` : 'none'};
`;
