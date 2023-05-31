import { render, screen } from '@testing-library/react';
import Section from './Section';

describe('Section component', () => {
  it('renders with correct background color and data-testid', () => {
    const backgroundColor = 'red';
    const dataTestId = 'section-container';

    render(
      <Section
        backgroundColor={backgroundColor}
        dataTestId={dataTestId}
      >
        Any component
      </Section>
    );

    const sectionContainer = screen.getByTestId(dataTestId);
    expect(sectionContainer).toBeInTheDocument();
    expect(sectionContainer).toHaveStyle(`background-color: ${backgroundColor}`);
  });
});
