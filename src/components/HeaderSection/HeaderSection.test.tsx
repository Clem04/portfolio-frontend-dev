import { render, screen, fireEvent } from '@testing-library/react';
import { HeaderSection } from './HeaderSection';

describe('HeaderSection', () => {
  const theme = {
    colors: {
      primary: 'blue',
      white: 'white',
    },
    fonts: {
      topSection: 'Arial',
      industries: 'Roboto'
    },
    fontWeights: {
      light: '100',
      semiRegular: "400",
      bold: "700"
    }
  };

  const handleClick = jest.fn();

  test('renders the header section with correct content and styles', () => {
    render(
      <HeaderSection
        theme={theme}
        dataTestId="header-section"
        isvisible={true}
        onClick={handleClick}
        animate={true}
      />
    );

    const headerSection = screen.getByTestId('header-section');
    expect(headerSection).toBeInTheDocument();

    const nameElement = screen.getByText('Clémence Paiement.');
    expect(nameElement).toBeInTheDocument();
    expect(nameElement).toHaveStyle({ opacity: '1', color: 'white' });

    const professionElement = screen.getByText('Software Frontend Engineer');
    expect(professionElement).toBeInTheDocument();
    expect(professionElement).toHaveStyle({ opacity: '1' });

    const certificationElement = screen.getByText('Certified Ui/UX Designer');
    expect(certificationElement).toBeInTheDocument();
    expect(certificationElement).toHaveStyle({ opacity: '1' });

    const locationElement = screen.getByText('Canada');
    expect(locationElement).toBeInTheDocument();
    expect(locationElement).toHaveStyle({ opacity: '1' });

    const arrowDownIcon = screen.getByTestId('arrow-down-icon');
    expect(arrowDownIcon).toBeInTheDocument();

    fireEvent.click(arrowDownIcon);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
