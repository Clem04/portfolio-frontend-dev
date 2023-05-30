import React, { ReactNode } from 'react';
import styled, { CSSProperties } from 'styled-components';

interface SectionNameProps {
  children: ReactNode;
  textAlign: string;
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
}

export const Name = styled.p<SectionNameProps>`
  width: 100%;
  text-align: ${(props) => props.textAlign};
  color: ${(props) => props.theme.colors.primary};
  font-family: 'League Gothic';
  font-style: normal;
  font-weight: 400;
  font-size: 4.2em;
  text-shadow: -9px 6px 14px rgba(0, 0, 0, 0.25);
  position: absolute;
  top: ${(props) => props.top?.desktop};
  left: ${(props) => props.left?.desktop};
  right: ${(props) => props.right?.desktop};

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
`


export const SectionName: React.FC<SectionNameProps> = ({ textAlign, top, left, right, children }) => {
  return (
    <Name textAlign={textAlign} top={top} left={left} right={right}>
      {children}
    </Name>
  );
};
