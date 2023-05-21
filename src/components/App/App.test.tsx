import { render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import App from './App';
import { greenTheme } from '../../theme';

describe('App component', () => {
  test('renders the sections with the theme', () => {
    render(
      <ThemeProvider theme={greenTheme}>
        <App />
      </ThemeProvider>
    );

    expect(screen.getByTestId('header-section')).toBeInTheDocument();
    expect(screen.getByTestId('skills-section')).toBeInTheDocument();
    expect(screen.getByTestId('industries-section')).toBeInTheDocument();
    expect(screen.getByTestId('education-section')).toBeInTheDocument();
    expect(screen.getByTestId('contact-section')).toBeInTheDocument();
  });
});
