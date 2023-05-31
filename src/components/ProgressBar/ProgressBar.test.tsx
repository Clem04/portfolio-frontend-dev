import { render, screen, waitFor } from '@testing-library/react';
import ProgressBar from './ProgressBar';

describe('ProgressBar component', () => {
  it('renders with the correct progress and color', () => {
    const progress = 50;
    const color = 'blue';
    const isVisible = true;
    const from = '0';
    const to = '-356px';
    render(
      <ProgressBar
        progress={progress}
        color={color}
        isvisible={isVisible}
        from={from}
        to={to}
      />
    );

    const progressBarElement = screen.getByTestId('progress-bar');
    const progressElement = screen.getByTestId('progress');

    expect(progressBarElement).toBeInTheDocument();
    expect(progressElement).toBeInTheDocument();

    const progressStyle = window.getComputedStyle(progressElement);

    expect(progressStyle.backgroundColor).toBe(color);
    expect(progressStyle.width).toBe(`${progress}%`);
  });

  it('renders a bouncing circle when progress is 100 and isVisible is true', async () => {
    const progress = 100;
    const color = 'green';
    const isVisible = true;
    const from = '0';
    const to = '-356px';
    render(
      <ProgressBar
        progress={progress}
        color={color}
        isvisible={isVisible}
        from={from}
        to={to}
      />
    );

    const bouncingCircleElement = screen.getByTestId('bouncing-circle');

    expect(bouncingCircleElement).toBeInTheDocument();

    await waitFor(() => {
      const bouncingCircleStyle = window.getComputedStyle(bouncingCircleElement);
      expect(bouncingCircleStyle.backgroundColor).toBe(color);
    });
  });

  it('does not render a bouncing circle when progress is 100 but isVisible is false', () => {
    const progress = 100;
    const color = 'green';
    const isVisible = false;
    const from = '0';
    const to = '-356px';
    render(
      <ProgressBar
        progress={progress}
        color={color}
        isvisible={isVisible}
        from={from}
        to={to}
      />
    );

    const bouncingCircleElement = screen.queryByTestId('bouncing-circle');

    expect(bouncingCircleElement).not.toBeInTheDocument();
  });
});
