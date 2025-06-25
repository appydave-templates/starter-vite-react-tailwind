import { render, screen, fireEvent } from '@testing-library/react'
import { Modal } from '../Modal'

describe('Modal', () => {
  const mockOnClose = vi.fn()

  beforeEach(() => {
    mockOnClose.mockClear()
  })

  it('does not render when closed', () => {
    render(
      <Modal isOpen={false} onClose={mockOnClose}>
        <Modal.Body>Modal content</Modal.Body>
      </Modal>
    )
    
    expect(screen.queryByText('Modal content')).not.toBeInTheDocument()
  })

  it('renders when open', () => {
    render(
      <Modal isOpen={true} onClose={mockOnClose}>
        <Modal.Body>Modal content</Modal.Body>
      </Modal>
    )
    
    expect(screen.getByText('Modal content')).toBeInTheDocument()
    expect(screen.getByRole('dialog')).toBeInTheDocument()
  })

  it('renders different sizes', () => {
    const { rerender } = render(
      <Modal isOpen={true} onClose={mockOnClose} size="sm">
        <Modal.Body>Small modal</Modal.Body>
      </Modal>
    )
    
    expect(screen.getByRole('dialog')).toHaveClass('max-w-sm')
    
    rerender(
      <Modal isOpen={true} onClose={mockOnClose} size="lg">
        <Modal.Body>Large modal</Modal.Body>
      </Modal>
    )
    
    expect(screen.getByRole('dialog')).toHaveClass('max-w-lg')
  })

  it('renders subcomponents correctly', () => {
    render(
      <Modal isOpen={true} onClose={mockOnClose}>
        <Modal.Header>Modal Header</Modal.Header>
        <Modal.Body>Modal Body</Modal.Body>
        <Modal.Footer>Modal Footer</Modal.Footer>
      </Modal>
    )
    
    expect(screen.getByText('Modal Header')).toBeInTheDocument()
    expect(screen.getByText('Modal Body')).toBeInTheDocument()
    expect(screen.getByText('Modal Footer')).toBeInTheDocument()
  })

  it('closes on escape key when enabled', () => {
    render(
      <Modal isOpen={true} onClose={mockOnClose} closeOnEscape={true}>
        <Modal.Body>Modal content</Modal.Body>
      </Modal>
    )
    
    fireEvent.keyDown(document, { key: 'Escape' })
    expect(mockOnClose).toHaveBeenCalledTimes(1)
  })

  it('does not close on escape key when disabled', () => {
    render(
      <Modal isOpen={true} onClose={mockOnClose} closeOnEscape={false}>
        <Modal.Body>Modal content</Modal.Body>
      </Modal>
    )
    
    fireEvent.keyDown(document, { key: 'Escape' })
    expect(mockOnClose).not.toHaveBeenCalled()
  })

  it('has proper ARIA attributes', () => {
    render(
      <Modal isOpen={true} onClose={mockOnClose}>
        <Modal.Body>Modal content</Modal.Body>
      </Modal>
    )
    
    const modal = screen.getByRole('dialog')
    expect(modal).toHaveAttribute('aria-modal', 'true')
    expect(modal).toHaveAttribute('role', 'dialog')
  })

  it('applies custom className', () => {
    render(
      <Modal isOpen={true} onClose={mockOnClose} className="custom-modal">
        <Modal.Body>Modal content</Modal.Body>
      </Modal>
    )
    
    expect(screen.getByRole('dialog')).toHaveClass('custom-modal')
  })
})