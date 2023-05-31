import React from 'react';
import styled, { CSSProperties } from 'styled-components';

interface SectionNameProps {
  children: React.ReactNode;
  textAlign: string;
  color: string;
  fontFamily: string;
  top?: {
    desktop?: CSSProperties['top'];
    tablet?: CSSProperties['top'];
    mobile?: CSSProperties['top'];
  };
  left?: {
    desktop?: CSSProperties['left'];
    tablet?: CSSProperties['left'];
    mobile?: CSSProperties['left'];
  };
  right?: {
    desktop?: CSSProperties['right'];
    tablet?: CSSProperties['right'];
    mobile?: CSSProperties['right'];
  };
  isvisible: boolean;
}

const Name = styled.p<SectionNameProps>`
  width: 100%;
  text-align: ${(props) => props.textAlign};
  color: ${(props) => props.color};
  font-family: ${(props) => props.fontFamily};
  font-style: normal;
  font-weight: 400;
  font-size: 4.2em;
  text-shadow: -9px 6px 14px rgba(0, 0, 0, 0.25);
  position: absolute;
  opacity: 0;
  transition: opacity 1s, transform 1s;
  top: ${(props) => props.top?.desktop};
  left: ${(props) => props.left?.desktop};
  right: ${(props) => props.right?.desktop};
  transform: translateX(${(props) =>
    props.isvisible ? '0' : props.left ? '-50%' : props.right ? '50%' : '0'});

  @media (max-width: 414px) {
    font-size: 2.3em;
    top: ${(props) => props.top?.mobile};
    left: ${(props) => props.left?.mobile};
    right: ${(props) => props.right?.mobile};
  }

  @media (min-width: 415px) and (max-width: 768px) {
    font-size: 2.3em;
    top: ${(props) => props.top?.tablet};
    left: ${(props) => props.left?.tablet};
    right: ${(props) => props.right?.tablet};
  }

  @media (max-width: 1024px) {
    transform: translateX(${(props) =>
      props.isvisible ? '0' : props.left ? '-5%' : props.right ? '5%' : '0'});
  }

  &.fade-in {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const SectionName: React.FC<SectionNameProps> = ({
  textAlign,
  top,
  left,
  right,
  children,
  isvisible,
  fontFamily,
  color
}) => {
  return (
    <Name
      textAlign={textAlign}
      top={top}
      left={left}
      right={right}
      isvisible={isvisible}
      className={isvisible ? 'fade-in' : ''}
      fontFamily={fontFamily}
      color={color}
    >
      {children}
    </Name>
  );
};
