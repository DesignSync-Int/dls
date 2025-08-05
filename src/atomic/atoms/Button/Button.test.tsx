import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Button } from './Button';
describe('Button Component', () => {
  it('renders with children', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByRole('button', { name: 'Click me' })).toBeInTheDocument();
  });
  it('handles click events', async () => {
    const user = userEvent.setup();
    const mockClick = vi.fn();
    render(<Button onClick={mockClick}>Click me</Button>);
    await user.click(screen.getByRole('button'));
    expect(mockClick).toHaveBeenCalledTimes(1);
  });
  it('applies primary styling', () => {
    render(<Button primary>Primary</Button>);
    const button = screen.getByRole('button');
    expect(button).toHaveClass('storybook-button--primary');
  });
  it('applies secondary styling by default', () => {
    render(<Button>Secondary</Button>);
    const button = screen.getByRole('button');
    expect(button).toHaveClass('storybook-button--secondary');
  });
  it('applies custom background color', () => {
    render(<Button backgroundColor="#ff0000">Custom</Button>);
    const button = screen.getByRole('button');
    expect(button).toHaveStyle({
      backgroundColor: '#ff0000',
    });
  });
  it('applies custom size', () => {
    render(<Button size="large">Large</Button>);
    const button = screen.getByRole('button');
    expect(button).toHaveClass('storybook-button--large');
  });
  it('applies medium size by default', () => {
    render(<Button>Medium</Button>);
    const button = screen.getByRole('button');
    expect(button).toHaveClass('storybook-button--medium');
  });
  it('passes through additional props', () => {
    render(<Button data-testid="custom-button">Test</Button>);
    expect(screen.getByTestId('custom-button')).toBeInTheDocument();
  });
});
