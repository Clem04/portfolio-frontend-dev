import { render, screen } from '@testing-library/react';
import Hr from './Hr';

describe('Hr component', () => {
  it('renders with the correct width', () => {
    const width = '50%';
    render(<Hr width={width} />);
    const hrElement = screen.getByTestId('hr-line');
    expect(hrElement).toHaveStyle(`width: ${width}`);
  });
});
