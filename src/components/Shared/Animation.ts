import { keyframes } from 'styled-components';

export const fadeInAnimation = (from: string, to: string) => keyframes`
  from {
    opacity: ${from};
  }
  to {
    opacity: ${to};
  }
`;

export const slidingAnimation = (from: string, to: string) => keyframes`
  0% {
    transform: translateX(${from});
  }
  100% {
    transform: translateX(${to});
  }
`;

export const GelatineAnimation = keyframes`
  from, to { transform: scale(1, 1); }
  25% { transform: scale(0.5, 1.1); }
  50% { transform: scale(1.1, 0.5); }
  75% { transform: scale(0.95, 1.05); }
`;

export const BouncingAnimation = keyframes`
  70% { transform:translateY(0%); }
  80% { transform:translateY(-15%); }
  90% { transform:translateY(0%); }
  95% { transform:translateY(-7%); }
  97% { transform:translateY(0%); }
  99% { transform:translateY(-3%); }
  100% { transform:translateY(0); }
`
