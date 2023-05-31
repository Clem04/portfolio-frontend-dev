import { render, screen } from '@testing-library/react';
import EducationSection from './EducationSection';

describe('EducationSection', () => {
  const theme = {
    colors: {
      primary: '#000000',
      black: '#000000',
      white: '#ffffff',
    },
    fonts: {
      sectionHeader: 'Arial',
      body: 'Roboto'
    }
  };

  test('renders the education section with correct content and styles', () => {
    render(
      <EducationSection
        theme={theme}
        dataTestId="education-section"
        isvisible={true}
      />
    );

    const educationSection = screen.getByTestId('education-section');
    expect(educationSection).toBeInTheDocument();

    const sectionName = screen.getByText('Education');
    expect(sectionName).toBeInTheDocument();
    expect(sectionName).toHaveStyle({ opacity: '1', color: '#000000' });

    const uxDesignDegree = screen.getAllByText('Certificate Program');
    expect(uxDesignDegree.length).toBeGreaterThan(0);

    const uxDesignDegreeType = screen.getByText('User Experience (UX) Design');
    expect(uxDesignDegreeType).toBeInTheDocument();
  });
});
