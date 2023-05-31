import { render, screen } from '@testing-library/react';
import IndustriesSection from './IndustriesSection';

describe('IndustriesSection', () => {
  const theme = {
    colors: {
      primary: '#000',
      secondary: "#6DC19E",
      white: '#ffffff',
      black: "#000"
    },
    fonts: {
      sectionHeader: 'Arial',
      body: 'Kai',
      industries: 'Roboto'
    }
  };

  test('renders the industries section with correct content and styles', () => {
    render(
      <IndustriesSection
        theme={theme}
        dataTestId="industries-section"
        isvisible={true}
      />
    );

    const industriesSection = screen.getByTestId('industries-section');
    expect(industriesSection).toBeInTheDocument();

    const sectionName = screen.getByText('Industries');
    expect(sectionName).toBeInTheDocument();
    expect(sectionName).toHaveStyle({ opacity: '1', color: '#000000' });

    const sectionDescription = screen.getByText(/On my resume/i);
    expect(sectionDescription).toBeInTheDocument();
    expect(sectionDescription).toHaveStyle({ opacity: '1' });

    const eCommerceIndustry = screen.getByText('e-commerce');
    expect(eCommerceIndustry).toBeInTheDocument();

    const financeIndustry = screen.getByText('finance');
    expect(financeIndustry).toBeInTheDocument();

    const healthIndustry = screen.getByText('health');
    expect(healthIndustry).toBeInTheDocument();
  });
});
