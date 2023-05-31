import { HTMLAttributes, ReactNode  } from "react";
import { DesignSkillCard, DesignSkillName } from './DesignCard.style'

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
