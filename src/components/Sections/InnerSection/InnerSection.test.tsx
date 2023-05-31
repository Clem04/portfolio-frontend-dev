import { render, screen } from '@testing-library/react';
import { InnerSection } from './InnerSection';

describe('InnerSection component', () => {
  it('renders with provided props', () => {
    const height = {
      desktop: '200px',
      tablet: '150px',
      mobile: '100px',
    };
    const backgroundColor = 'red';
    const shadow = '1px 1px 2px black';
    const border = '1px solid black';
    const padding = {
      desktop: '20px',
      tablet: '15px',
      mobile: '10px',
    };
    const children = <div>Test Content</div>;

    render(
      <InnerSection
        height={height}
        backgroundColor={backgroundColor}
        shadow={shadow}
        border={border}
        padding={padding}
      >
        {children}
      </InnerSection>
    );

    const containerElement = screen.getByTestId('inner-section-container');
    expect(containerElement).toBeInTheDocument();
    expect(containerElement).toHaveStyle(`height: ${height.desktop};`);
    expect(containerElement).toHaveStyle(`background-color: ${backgroundColor};`);
    expect(containerElement).toHaveStyle(`box-shadow: ${shadow};`);
    expect(containerElement).toHaveStyle(`border: ${border};`);
    expect(containerElement).toHaveStyle(`padding: ${padding.desktop};`);

    const contentElement = screen.getByText('Test Content');
    expect(contentElement).toBeInTheDocument();
  });
});
