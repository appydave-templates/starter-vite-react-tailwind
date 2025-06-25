import React from 'react'

interface SpinnerProps {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  className?: string
}

export const Spinner: React.FC<SpinnerProps> = ({ 
  size = 'md', 
  className = '' 
}) => {
  const sizeClasses = {
    xs: 'w-3 h-3',
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6',
    xl: 'w-8 h-8'
  }
  
  const classes = `animate-spin rounded-full border-2 border-current border-t-transparent ${sizeClasses[size]} ${className}`
  
  return (
    <div 
      role="status" 
      aria-label="Loading"
      className={classes}
    >
      <span className="sr-only">Loading...</span>
    </div>
  )
}