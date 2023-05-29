import { HTMLAttributes, ReactNode  } from "react";
import styled from 'styled-components';

const DesignSkillCard = styled.div`
  width: 100px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  justify-self: center;
`

const DesignSkillName = styled.p`
  width: 100%;
  font-family: 'Kai';
  font-size: 0.7em;
  text-align: center;
  margin-top: 16px;
`

interface DesignCardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  skill: string;
}

export default function DesignCard({ children, skill }: DesignCardProps) {
  return (
    <DesignSkillCard>
      {children}
      <DesignSkillName>{skill}</DesignSkillName>
    </DesignSkillCard>
  )
}
