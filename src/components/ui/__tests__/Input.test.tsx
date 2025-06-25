import { render, screen, fireEvent } from '@testing-library/react'
import { Input } from '../Input'

describe('Input', () => {
  it('renders with default props', () => {
    render(<Input placeholder="Enter text" />)
    const input = screen.getByPlaceholderText('Enter text')
    expect(input).toBeInTheDocument()
    expect(input).toHaveClass('block', 'w-full', 'rounded-md')
  })

  it('displays error message', () => {
    render(<Input id="test-input" error="This field is required" />)
    const input = screen.getByRole('textbox')
    const errorMessage = screen.getByText('This field is required')
    
    expect(input).toHaveAttribute('aria-invalid', 'true')
    expect(input).toHaveAttribute('aria-describedby', 'test-input-error')
    expect(errorMessage).toBeInTheDocument()
    expect(errorMessage).toHaveClass('text-red-600')
  })

  it('displays helper text', () => {
    render(<Input id="test-input" helperText="Enter your email address" />)
    const input = screen.getByRole('textbox')
    const helperText = screen.getByText('Enter your email address')
    
    expect(input).toHaveAttribute('aria-describedby', 'test-input-helper')
    expect(helperText).toBeInTheDocument()
    expect(helperText).toHaveClass('text-brand-600')
  })

  it('renders with left and right icons', () => {
    render(
      <Input
        leftIcon={<span data-testid="left-icon">@</span>}
        rightIcon={<span data-testid="right-icon">✓</span>}
        placeholder="Email"
      />
    )
    
    expect(screen.getByTestId('left-icon')).toBeInTheDocument()
    expect(screen.getByTestId('right-icon')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Email')).toHaveClass('pl-10', 'pr-10')
  })

  it('handles disabled state', () => {
    render(<Input disabled placeholder="Disabled input" />)
    const input = screen.getByPlaceholderText('Disabled input')
    
    expect(input).toBeDisabled()
    expect(input).toHaveClass('cursor-not-allowed')
  })

  it('handles change events', () => {
    const handleChange = vi.fn()
    render(<Input onChange={handleChange} />)
    const input = screen.getByRole('textbox')
    
    fireEvent.change(input, { target: { value: 'test value' } })
    expect(handleChange).toHaveBeenCalledTimes(1)
  })

  it('applies custom className', () => {
    render(<Input className="custom-class" />)
    expect(screen.getByRole('textbox')).toHaveClass('custom-class')
  })
})