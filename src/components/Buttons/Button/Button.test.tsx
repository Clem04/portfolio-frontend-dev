import { render, fireEvent, screen } from '@testing-library/react';
import Button from './Button';

describe('Button component', () => {
  it('renders button with correct text content', () => {
    render(
      <Button 
        width="100%"
        backgroundColor="#000"
        color="#FFF"
        fontFamily="Arial"
        fontWeight="100"
      >
        Click me
      </Button>
    );
    const button = screen.getByText('Click me');
    expect(button).toBeInTheDocument();
  });

  it('calls onClick handler when clicked', () => {
    const handleClick = jest.fn();
    render(
      <Button 
        width="100%" 
        backgroundColor="#000"
        color="#FFF"
        fontFamily="Arial"
        fontWeight="100"
        onClick={handleClick}
      >
        Click me
      </Button>
    );
    const button = screen.getByText('Click me');
    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('has correct width style', () => {
    render(
      <Button 
        width="200px"
        backgroundColor="#000"
        color="#FFF"
        fontFamily="Arial"
        fontWeight="100"
      >
        Click me
      </Button>
    );
    const button = screen.getByText('Click me');
    expect(button).toHaveStyle('width: 200px');
  });
});
