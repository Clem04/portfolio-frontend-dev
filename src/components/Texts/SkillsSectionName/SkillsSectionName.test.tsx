import { render, screen } from '@testing-library/react';
import SkillsSectionName from './SkillsSectionName';

describe('SkillsSectionName component', () => {
  it('renders the section name with the provided props', () => {
    const name = 'Skills Section';
    const textAlign = 'center';
    const color = "#000000"

    render(<SkillsSectionName name={name} textAlign={textAlign} color={color}/>);

    const sectionNameElement = screen.getByText(name);
    expect(sectionNameElement).toBeInTheDocument();
    expect(sectionNameElement).toHaveStyle(`text-align: ${textAlign};`);
  });
});
