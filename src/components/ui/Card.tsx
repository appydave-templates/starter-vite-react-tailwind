import React from 'react'

interface CardProps {
  children: React.ReactNode
  className?: string
  padding?: 'none' | 'sm' | 'md' | 'lg'
  variant?: 'default' | 'elevated' | 'outlined'
  hoverable?: boolean
}

interface CardSubComponentProps {
  children: React.ReactNode
  className?: string
}

const CardHeader: React.FC<CardSubComponentProps> = ({ children, className = '' }) => (
  <div className={`border-b border-brand-200 pb-4 mb-4 dark:border-brand-700 ${className}`}>
    {children}
  </div>
)

const CardBody: React.FC<CardSubComponentProps> = ({ children, className = '' }) => (
  <div className={className}>
    {children}
  </div>
)

const CardFooter: React.FC<CardSubComponentProps> = ({ children, className = '' }) => (
  <div className={`border-t border-brand-200 pt-4 mt-4 dark:border-brand-700 ${className}`}>
    {children}
  </div>
)

const CardComponent: React.FC<CardProps> = ({ 
  children, 
  className = '', 
  padding = 'md',
  variant = 'default',
  hoverable = false
}) => {
  const paddingClasses = {
    none: '',
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8'
  }
  
  const variantClasses = {
    default: 'bg-white border border-brand-200 shadow-sm dark:bg-brand-800 dark:border-brand-700',
    elevated: 'bg-white shadow-lg border-0 dark:bg-brand-800',
    outlined: 'bg-transparent border-2 border-brand-300 shadow-none dark:border-brand-600'
  }
  
  const hoverClasses = hoverable ? 'transition-shadow hover:shadow-md cursor-pointer' : ''
  
  const classes = `rounded-lg ${variantClasses[variant]} ${paddingClasses[padding]} ${hoverClasses} ${className}`
  
  return (
    <div className={classes}>
      {children}
    </div>
  )
}

export const Card = Object.assign(CardComponent, {
  Header: CardHeader,
  Body: CardBody,
  Footer: CardFooter
})