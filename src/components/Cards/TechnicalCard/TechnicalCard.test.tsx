import { render, screen } from '@testing-library/react';
import TechnicalCard from './TechnicalCard';

describe('TechnicalCard component', () => {
  it('renders the skill label correctly', () => {
    const skillLabel = 'React Js';
    render(
      <TechnicalCard
        isvisible={true}
        progressColor="#123456"
        skillLabel={skillLabel}
        percentage={90}
        color="#000"
        fontFamily="Arial"
      >
        Icon
      </TechnicalCard>
    );
    const skillLabelElement = screen.getByText(skillLabel);
    expect(skillLabelElement).toBeInTheDocument();
  });

  it('renders the percentage correctly', () => {
    const percentage = 90;
    render(
      <TechnicalCard
        isvisible={true}
        progressColor="#123456"
        skillLabel="React Js"
        percentage={percentage}
        color="#000"
        fontFamily="Arial"
      >
        Icon
      </TechnicalCard>
    );
    const percentageElement = screen.getByText(`${percentage}%`);
    expect(percentageElement).toBeInTheDocument();
  });

  it('renders the children correctly', () => {
    const childrenText = 'Icon';
    render(
      <TechnicalCard
        isvisible={true}
        progressColor="#123456"
        skillLabel="React Js"
        percentage={90}
        color="#000"
        fontFamily="Arial"
      >
        {childrenText}
      </TechnicalCard>
    );
    const childrenElement = screen.getByText(childrenText);
    expect(childrenElement).toBeInTheDocument();
  });
});
