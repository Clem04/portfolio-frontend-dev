import { render, screen } from '@testing-library/react';
import { SectionName } from './SectionName';

describe('SectionName component', () => {
  it('renders the section name with the provided props', () => {
    const textAlign = 'center';
    const children = 'Section Name';
    const isVisible = true;
    const color = "green"

    render(
      <SectionName textAlign={textAlign} isvisible={isVisible} color={color}>
        {children}
      </SectionName>
    );

    const sectionNameElement = screen.getByText(children);
    expect(sectionNameElement).toBeInTheDocument();
    expect(sectionNameElement).toHaveStyle(`text-align: ${textAlign};`);
  });

  it('applies the fade-in class when isVisible is true', () => {
    const textAlign = 'center';
    const children = 'Section Name';
    const isVisible = true;
    const color = "green"

    render(
      <SectionName textAlign={textAlign} isvisible={isVisible} color={color}>
        {children}
      </SectionName>
    );

    const sectionNameElement = screen.getByText(children);
    expect(sectionNameElement).toHaveClass('fade-in');
  });

  it('does not apply the fade-in class when isVisible is false', () => {
    const textAlign = 'center';
    const children = 'Section Name';
    const isVisible = false;
    const color = "green"

    render(
      <SectionName textAlign={textAlign} isvisible={isVisible} color={color}>
        {children}
      </SectionName>
    );

    const sectionNameElement = screen.getByText(children);
    expect(sectionNameElement).not.toHaveClass('fade-in');
  });
});
