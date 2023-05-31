import { render, screen } from '@testing-library/react';
import SkillsSection from './SkillsSection';
import '@testing-library/jest-dom/extend-expect';

describe('SkillsSection', () => {
  const theme = {
    colors: {
      primary: '#000000',
      white: '#ffffff',
    },
  };

  test('renders the skills section with correct content and styles', () => {
    render(
      <SkillsSection
        theme={theme}
        dataTestId="skills-section"
        isVisible={true}
      />
    );

    const skillsSection = screen.getByTestId('skills-section');
    expect(skillsSection).toBeInTheDocument();

    const sectionName = screen.getByText('Skills');
    expect(sectionName).toBeInTheDocument();

    const sectionStyles = window.getComputedStyle(sectionName);
    expect(sectionStyles.getPropertyValue('opacity')).toBe('1');

    const progressBar = screen.getByTestId('progress-bar');
    expect(progressBar).toBeInTheDocument();
    expect(progressBar).toHaveStyle('width: 30%');

    const technicalSkillsSection = screen.getByText('Technical');
    expect(technicalSkillsSection).toBeInTheDocument();
    expect(technicalSkillsSection).toHaveStyle({ color: '#000000' });

    const technicalSkillLabels = [
      'React Js',
      'React Testing Library',
      'Javascript',
      'HTML5',
      'CSS',
      'Typescript',
      'Ruby on Rails',
    ];

    technicalSkillLabels.forEach((label) => {
      const technicalSkillCard = screen.getByText(label);
      expect(technicalSkillCard).toBeInTheDocument();
    });

    const downloadButtons = screen.getAllByText('Resume');
    expect(downloadButtons.some((button) => button instanceof HTMLElement)).toBeTruthy();


    const languageSkills = ['English', 'French'];
    languageSkills.forEach((skill) => {
      const languageSkill = screen.getByText(skill);
      expect(languageSkill).toBeInTheDocument();
    });

    const designSkills = [
      'Wireframe Prototypes',
      'InVision',
      'DesignPrincipls & Design Systems',
      'Figma',
      'Sketch Design',
      'Responsive Design',
    ];
    designSkills.forEach((skill) => {
      const designSkillCard = screen.getByText(skill);
      expect(designSkillCard).toBeInTheDocument();
    });
  });
});
