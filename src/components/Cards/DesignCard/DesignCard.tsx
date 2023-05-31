import { HTMLAttributes, ReactNode  } from "react";
import { DesignSkillCard, DesignSkillName } from './DesignCard.style'

interface DesignCardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  skill: string;
  fontFamily: string;
}

export default function DesignCard({ children, skill, fontFamily }: DesignCardProps) {
  return (
    <DesignSkillCard>
      {children}
      <DesignSkillName fontFamily={fontFamily}>{skill}</DesignSkillName>
    </DesignSkillCard>
  )
}
