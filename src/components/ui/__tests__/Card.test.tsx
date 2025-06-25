import { render, screen } from '@testing-library/react'
import { Card } from '../Card'

describe('Card', () => {
  it('renders with default props', () => {
    render(<Card>Card content</Card>)
    const card = screen.getByText('Card content')
    expect(card).toBeInTheDocument()
    expect(card).toHaveClass('bg-white', 'rounded-lg', 'border')
  })

  it('renders different variants', () => {
    const { rerender } = render(<Card variant="elevated">Elevated</Card>)
    expect(screen.getByText('Elevated')).toHaveClass('shadow-lg', 'border-0')
    
    rerender(<Card variant="outlined">Outlined</Card>)
    expect(screen.getByText('Outlined')).toHaveClass('bg-transparent', 'border-2')
  })

  it('renders different padding sizes', () => {
    const { rerender } = render(<Card padding="none">No padding</Card>)
    expect(screen.getByText('No padding')).not.toHaveClass('p-4', 'p-6', 'p-8')
    
    rerender(<Card padding="sm">Small padding</Card>)
    expect(screen.getByText('Small padding')).toHaveClass('p-4')
    
    rerender(<Card padding="lg">Large padding</Card>)
    expect(screen.getByText('Large padding')).toHaveClass('p-8')
  })

  it('renders with hover effect when hoverable', () => {
    render(<Card hoverable>Hoverable card</Card>)
    expect(screen.getByText('Hoverable card')).toHaveClass('transition-shadow', 'hover:shadow-md', 'cursor-pointer')
  })

  it('renders subcomponents correctly', () => {
    render(
      <Card>
        <Card.Header>Header content</Card.Header>
        <Card.Body>Body content</Card.Body>
        <Card.Footer>Footer content</Card.Footer>
      </Card>
    )
    
    expect(screen.getByText('Header content')).toBeInTheDocument()
    expect(screen.getByText('Body content')).toBeInTheDocument()
    expect(screen.getByText('Footer content')).toBeInTheDocument()
  })

  it('applies custom className', () => {
    render(<Card className="custom-class">Custom card</Card>)
    expect(screen.getByText('Custom card')).toHaveClass('custom-class')
  })
})