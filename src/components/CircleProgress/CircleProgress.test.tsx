import { render, screen } from '@testing-library/react';
import CircleProgress from './CircleProgress';

describe('CircleProgress component', () => {
  it('renders the percentage correctly', () => {
    const percentage = 75;
    render(
      <CircleProgress
        percentage={percentage}
        strokeWidth={4}
        circleColor="#eaeaea"
        progressColor="#f44336"
        isvisible={true}
      >
        Icon
      </CircleProgress>
    );
  });

  it('renders the children correctly', () => {
    const childrenText = 'Icon';
    render(
      <CircleProgress
        percentage={50}
        strokeWidth={4}
        circleColor="#eaeaea"
        progressColor="#f44336"
        isvisible={true}
      >
        {childrenText}
      </CircleProgress>
    );
    const childrenElement = screen.getByText(childrenText);
    expect(childrenElement).toBeInTheDocument();
  });
});
