import React from 'react'

interface CardProps {
  children: React.ReactNode
  className?: string
  padding?: 'sm' | 'md' | 'lg'
}

export const Card: React.FC<CardProps> = ({ 
  children, 
  className = '', 
  padding = 'md' 
}) => {
  const paddingClasses = {
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8'
  }
  
  const classes = `bg-white rounded-lg border border-brand-200 shadow-sm transition-shadow hover:shadow-md dark:bg-brand-800 dark:border-brand-700 ${paddingClasses[padding]} ${className}`
  
  return (
    <div className={classes}>
      {children}
    </div>
  )
}