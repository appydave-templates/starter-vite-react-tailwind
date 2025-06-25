import React from 'react'

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: string
  helperText?: string
  resize?: 'none' | 'vertical' | 'horizontal' | 'both'
}

export const Textarea: React.FC<TextareaProps> = ({
  error,
  helperText,
  resize = 'vertical',
  className = '',
  disabled = false,
  rows = 4,
  ...props
}) => {
  const baseClasses = 'block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset placeholder:text-brand-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 transition-colors'
  
  const stateClasses = error
    ? 'text-red-900 ring-red-300 placeholder:text-red-300 focus:ring-red-500 dark:text-red-100 dark:ring-red-600 dark:placeholder:text-red-400 dark:focus:ring-red-500'
    : disabled
    ? 'bg-brand-50 text-brand-500 ring-brand-200 dark:bg-brand-800 dark:text-brand-400 dark:ring-brand-700 cursor-not-allowed'
    : 'text-brand-900 ring-brand-300 focus:ring-accent-600 dark:text-brand-100 dark:ring-brand-600 dark:focus:ring-accent-500 dark:bg-brand-800'
  
  const resizeClasses = {
    none: 'resize-none',
    vertical: 'resize-y',
    horizontal: 'resize-x',
    both: 'resize'
  }
  
  const textareaClasses = `${baseClasses} ${stateClasses} ${resizeClasses[resize]} px-3 ${className}`
  
  return (
    <div>
      <textarea
        rows={rows}
        className={textareaClasses}
        disabled={disabled}
        aria-invalid={error ? 'true' : 'false'}
        aria-describedby={error ? `${props.id}-error` : helperText ? `${props.id}-helper` : undefined}
        {...props}
      />
      
      {error && (
        <p id={`${props.id}-error`} className="mt-2 text-sm text-red-600 dark:text-red-400">
          {error}
        </p>
      )}
      
      {!error && helperText && (
        <p id={`${props.id}-helper`} className="mt-2 text-sm text-brand-600 dark:text-brand-400">
          {helperText}
        </p>
      )}
    </div>
  )
}