import React from 'react'

interface SelectOption {
  value: string
  label: string
  disabled?: boolean
}

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  options: SelectOption[]
  error?: string
  helperText?: string
  placeholder?: string
}

export const Select: React.FC<SelectProps> = ({
  options,
  error,
  helperText,
  placeholder,
  className = '',
  disabled = false,
  ...props
}) => {
  const baseClasses = 'block w-full rounded-md border-0 py-1.5 pl-3 pr-10 shadow-sm ring-1 ring-inset focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 transition-colors appearance-none bg-no-repeat bg-right bg-center'
  
  const stateClasses = error
    ? 'text-red-900 ring-red-300 focus:ring-red-500 dark:text-red-100 dark:ring-red-600 dark:focus:ring-red-500'
    : disabled
    ? 'bg-brand-50 text-brand-500 ring-brand-200 dark:bg-brand-800 dark:text-brand-400 dark:ring-brand-700 cursor-not-allowed'
    : 'text-brand-900 ring-brand-300 focus:ring-accent-600 dark:text-brand-100 dark:ring-brand-600 dark:focus:ring-accent-500 dark:bg-brand-800'
  
  const selectClasses = `${baseClasses} ${stateClasses} ${className}`
  
  // SVG chevron down icon as background
  const chevronIcon = `data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3e%3c/svg%3e`
  
  return (
    <div>
      <div className="relative">
        <select
          className={selectClasses}
          style={{
            backgroundImage: `url("${chevronIcon}")`,
            backgroundSize: '1.25rem 1.25rem',
            paddingRight: '2.5rem'
          }}
          disabled={disabled}
          aria-invalid={error ? 'true' : 'false'}
          aria-describedby={error ? `${props.id}-error` : helperText ? `${props.id}-helper` : undefined}
          {...props}
        >
          {placeholder && (
            <option value="" disabled>
              {placeholder}
            </option>
          )}
          {options.map((option) => (
            <option
              key={option.value}
              value={option.value}
              disabled={option.disabled}
            >
              {option.label}
            </option>
          ))}
        </select>
      </div>
      
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