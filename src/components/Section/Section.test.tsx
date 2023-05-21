import { render, screen } from '@testing-library/react';
import Section from './Section';

describe('Section component', () => {
  test('renders with correct background color and data-testid', () => {
    const backgroundColor = 'red';
    const dataTestId = 'section-component';
    render(
      <Section backgroundColor={backgroundColor} dataTestId={dataTestId}>
        Section Content
      </Section>
    );

    const sectionContainer = screen.getByTestId(dataTestId);
    expect(sectionContainer).toBeInTheDocument();
    expect(sectionContainer).toHaveStyle(`background-color: ${backgroundColor}`);
  });

  test('renders with shadow when shadow prop is true', () => {
    const backgroundColor = 'blue';
    const dataTestId = 'section-component';
    const shadow = true;
    render(
      <Section backgroundColor={backgroundColor} dataTestId={dataTestId} shadow={shadow}>
        Section Content
      </Section>
    );

    const sectionContainer = screen.getByTestId(dataTestId);
    const sectionContainerStyles = window.getComputedStyle(sectionContainer);
    const expectedShadow = '13px 15px 24px rgba(0, 0, 0, 0.25), 15px 13px 24px rgba(0, 0, 0, 0.25)';
    const receivedShadow = sectionContainerStyles.boxShadow.replace(/\s/g, '');
    expect(receivedShadow).toEqual(expectedShadow.replace(/\s/g, ''));
  });
});
