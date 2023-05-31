import { render, screen } from '@testing-library/react';
import DesignCard from './DesignCard';

describe('DesignCard component', () => {
  it('renders the skill text correctly', () => {
    const skillText = 'Wireframe Prototypes';
    render(<DesignCard skill={skillText} fontFamily="Arial">Icon</DesignCard>);
    const skillElement = screen.getByText(skillText);
    expect(skillElement).toBeInTheDocument();
  });

  it('renders the children correctly', () => {
    const childrenText = 'Icon';
    render(<DesignCard skill="Skill" fontFamily="Arial">{childrenText}</DesignCard>);
    const childrenElement = screen.getByText(childrenText);
    expect(childrenElement).toBeInTheDocument();
  });
});
