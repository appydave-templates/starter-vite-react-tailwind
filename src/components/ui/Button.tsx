import React from 'react'
import { Spinner } from './Spinner'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  loading?: boolean
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
  children: React.ReactNode
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  loading = false,
  leftIcon,
  rightIcon,
  className = '',
  disabled,
  children,
  ...props
}) => {
  const baseClasses = 'inline-flex items-center justify-center font-medium rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed gap-2'
  
  const variantClasses = {
    primary: 'bg-accent-600 text-white hover:bg-accent-700 focus:ring-accent-500 dark:bg-accent-500 dark:hover:bg-accent-600',
    secondary: 'bg-brand-100 text-brand-900 hover:bg-brand-200 focus:ring-brand-500 dark:bg-brand-800 dark:text-brand-100 dark:hover:bg-brand-700',
    outline: 'border border-brand-300 text-brand-700 hover:bg-brand-50 focus:ring-brand-500 dark:border-brand-600 dark:text-brand-300 dark:hover:bg-brand-800',
    ghost: 'text-brand-700 hover:bg-brand-100 focus:ring-brand-500 dark:text-brand-300 dark:hover:bg-brand-800'
  }
  
  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-sm',
    lg: 'px-6 py-3 text-base'
  }
  
  const spinnerSizes = {
    sm: 'xs' as const,
    md: 'sm' as const,
    lg: 'md' as const
  }
  
  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`
  
  const isDisabled = disabled || loading
  
  return (
    <button className={classes} disabled={isDisabled} {...props}>
      {loading ? (
        <Spinner size={spinnerSizes[size]} />
      ) : (
        leftIcon && <span className="flex-shrink-0">{leftIcon}</span>
      )}
      <span className={loading ? 'opacity-0' : ''}>{children}</span>
      {!loading && rightIcon && <span className="flex-shrink-0">{rightIcon}</span>}
    </button>
  )
}