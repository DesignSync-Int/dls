import React from 'react';

export interface AlertProps {
  children: React.ReactNode;
  variant?: 'info' | 'success' | 'warning' | 'error';
  className?: string;
}

export const Alert: React.FC<AlertProps> = ({ children, variant = 'info', className }) => {
  const variantStyles = {
    info: {
      backgroundColor: '#eff6ff',
      color: '#1d4ed8',
      borderColor: '#bfdbfe',
    },
    success: {
      backgroundColor: '#f0fdf4',
      color: '#15803d',
      borderColor: '#bbf7d0',
    },
    warning: {
      backgroundColor: '#fffbeb',
      color: '#d97706',
      borderColor: '#fed7aa',
    },
    error: {
      backgroundColor: '#fef2f2',
      color: '#dc2626',
      borderColor: '#fecaca',
    },
  };

  const baseStyles = {
    borderRadius: '6px',
    border: '1px solid',
    padding: '12px',
    fontSize: '14px',
    lineHeight: '1.4',
  };

  return (
    <div
      style={{
        ...baseStyles,
        ...variantStyles[variant],
      }}
      className={className}
    >
      {children}
    </div>
  );
};
