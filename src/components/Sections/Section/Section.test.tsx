import { render, screen } from '@testing-library/react';
import Section from './Section';

describe('Section component', () => {
  test('renders with correct background color and data-testid', () => {
    const backgroundColor = 'red';
    const dataTestId = 'section-component';
    render(
      <Section dataTestId={dataTestId}>
        Section Content
      </Section>
    );

    const sectionContainer = screen.getByTestId(dataTestId);
    expect(sectionContainer).toBeInTheDocument();
    expect(sectionContainer).toHaveStyle(`background-color: ${backgroundColor}`);
  });
});
