import './button.css';
import React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Is this the principal call to action on the page? */
  primary?: boolean;
  /** What background color to use */
  backgroundColor?: string;
  /** How large should the button be? */
  size?: 'small' | 'medium' | 'large';
  /** Button contents */
  children: React.ReactNode;
  /** Optional click handler */
  onClick?: () => void;
  /** Button type */
  type?: 'button' | 'submit' | 'reset';
  /** Disabled state */
  disabled?: boolean;
  /** Custom className */
  className?: string;
}

/** Primary UI component for user interaction */
export const Button = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  children,
  className,
  type = 'button',
  disabled,
  ...props
}: ButtonProps) => {
  const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
  const disabledClass = disabled ? 'storybook-button--disabled' : '';

  return (
    <button
      type={type}
      disabled={disabled}
      className={['storybook-button', `storybook-button--${size}`, mode, disabledClass, className]
        .filter(Boolean)
        .join(' ')}
      style={{ backgroundColor }}
      {...props}
    >
      {children}
    </button>
  );
};
