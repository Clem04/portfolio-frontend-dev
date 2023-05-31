import { render, screen } from '@testing-library/react';
import ContactSection from './ContactSection';

describe('ContactSection', () => {
  const theme = {
    colors: {
      white: '#ffffff',
      primary: '#000000',
    },
  };

  test('renders the contact section with correct content and styles', () => {
    render(
      <ContactSection
        theme={theme}
        dataTestId="contact-section"
        isVisible={true}
      />
    );

    const contactSection = screen.getByTestId('contact-section');
    expect(contactSection).toBeInTheDocument();

    const sectionHeader = screen.getByText('Get in Touch!');
    expect(sectionHeader).toBeInTheDocument();
    expect(sectionHeader).toHaveStyle({ opacity: '1' });

    const contactButton = screen.getByText('CONTACT');
    expect(contactButton).toBeInTheDocument();

    const anchorElement = screen.getByRole('link', { name: 'CONTACT' });
    expect(anchorElement).toHaveAttribute(
      'href',
      'mailto:iphona.paiement@gmail.com'
    );

    const contactText = screen.getByText((content, element) => {
      if (!element || !content) return false;
      const elementText = element.textContent || '';
      return elementText.includes('Thank you for visiting my website!');
    });
    expect(contactText).toBeInTheDocument();
    expect(contactText).toHaveStyle({ opacity: '1' });
  });
});
