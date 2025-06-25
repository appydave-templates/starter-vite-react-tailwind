import React from 'react'

interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  children: React.ReactNode
  required?: boolean
  disabled?: boolean
}

export const Label: React.FC<LabelProps> = ({
  children,
  required = false,
  disabled = false,
  className = '',
  ...props
}) => {
  const baseClasses = 'block text-sm font-medium leading-6'
  const stateClasses = disabled 
    ? 'text-brand-400 dark:text-brand-500' 
    : 'text-brand-900 dark:text-brand-100'
  
  const classes = `${baseClasses} ${stateClasses} ${className}`
  
  return (
    <label className={classes} {...props}>
      {children}
      {required && <span className="text-red-500 ml-1" aria-label="required">*</span>}
    </label>
  )
}