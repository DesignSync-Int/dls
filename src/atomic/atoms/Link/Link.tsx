import React from 'react';

export interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  className?: string;
}

export const Link: React.FC<LinkProps> = ({
  children,
  variant = 'primary',
  className,
  ...props
}) => {
  const variantStyles = {
    primary: {
      color: '#2563eb',
      fontWeight: '500',
      textDecoration: 'none',
    },
    secondary: {
      color: '#4b5563',
      fontWeight: 'normal',
      textDecoration: 'none',
    },
  };

  const baseStyles = {
    cursor: 'pointer',
    transition: 'color 0.2s ease',
  };

  const handleMouseEnter = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.currentTarget.style.textDecoration = 'underline';
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.currentTarget.style.textDecoration = 'none';
  };

  return (
    <a
      style={{
        ...baseStyles,
        ...variantStyles[variant],
      }}
      className={className}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      {children}
    </a>
  );
};
