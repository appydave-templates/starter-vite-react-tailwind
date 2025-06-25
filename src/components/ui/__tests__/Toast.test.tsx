import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import { ToastProvider, useToast } from '../Toast'

// Test component that uses the toast hook
const ToastTestComponent = () => {
  const { addToast, clearToasts } = useToast()

  return (
    <div>
      <button
        onClick={() => addToast({ message: 'Success message', type: 'success' })}
        data-testid="add-success-toast"
      >
        Add Success Toast
      </button>
      <button
        onClick={() => addToast({ message: 'Error message', type: 'error' })}
        data-testid="add-error-toast"
      >
        Add Error Toast
      </button>
      <button
        onClick={clearToasts}
        data-testid="clear-toasts"
      >
        Clear All
      </button>
    </div>
  )
}

describe('Toast', () => {
  it('renders and adds toasts', async () => {
    render(
      <ToastProvider>
        <ToastTestComponent />
      </ToastProvider>
    )

    const addButton = screen.getByTestId('add-success-toast')
    fireEvent.click(addButton)

    await waitFor(() => {
      expect(screen.getByText('Success message')).toBeInTheDocument()
    })

    expect(screen.getByRole('alert')).toBeInTheDocument()
  })

  it('renders different toast types', async () => {
    render(
      <ToastProvider>
        <ToastTestComponent />
      </ToastProvider>
    )

    // Add success toast
    fireEvent.click(screen.getByTestId('add-success-toast'))
    await waitFor(() => {
      const successToast = screen.getByText('Success message').closest('[role="alert"]')
      expect(successToast).toHaveClass('bg-green-600')
    })

    // Add error toast
    fireEvent.click(screen.getByTestId('add-error-toast'))
    await waitFor(() => {
      const errorToast = screen.getByText('Error message').closest('[role="alert"]')
      expect(errorToast).toHaveClass('bg-red-600')
    })
  })

  it('auto-removes toasts after duration', async () => {
    // Custom test component with shorter duration for testing
    const QuickToastComponent = () => {
      const { addToast } = useToast()
      return (
        <button
          onClick={() => addToast({ message: 'Quick message', type: 'info', duration: 100 })}
          data-testid="add-quick-toast"
        >
          Add Quick Toast
        </button>
      )
    }

    render(
      <ToastProvider>
        <QuickToastComponent />
      </ToastProvider>
    )

    fireEvent.click(screen.getByTestId('add-quick-toast'))
    
    await waitFor(() => {
      expect(screen.getByText('Quick message')).toBeInTheDocument()
    })

    // Toast should auto-remove after 100ms
    await waitFor(() => {
      expect(screen.queryByText('Quick message')).not.toBeInTheDocument()
    }, { timeout: 1000 })
  })

  it('manually closes toasts', async () => {
    render(
      <ToastProvider>
        <ToastTestComponent />
      </ToastProvider>
    )

    fireEvent.click(screen.getByTestId('add-success-toast'))
    
    await waitFor(() => {
      expect(screen.getByText('Success message')).toBeInTheDocument()
    })

    // Click close button
    const closeButton = screen.getByLabelText('Close notification')
    fireEvent.click(closeButton)

    await waitFor(() => {
      expect(screen.queryByText('Success message')).not.toBeInTheDocument()
    })
  })

  it('clears all toasts', async () => {
    render(
      <ToastProvider>
        <ToastTestComponent />
      </ToastProvider>
    )

    // Add multiple toasts
    fireEvent.click(screen.getByTestId('add-success-toast'))
    fireEvent.click(screen.getByTestId('add-error-toast'))

    await waitFor(() => {
      expect(screen.getByText('Success message')).toBeInTheDocument()
      expect(screen.getByText('Error message')).toBeInTheDocument()
    })

    // Clear all toasts
    fireEvent.click(screen.getByTestId('clear-toasts'))

    await waitFor(() => {
      expect(screen.queryByText('Success message')).not.toBeInTheDocument()
      expect(screen.queryByText('Error message')).not.toBeInTheDocument()
    })
  })

  it('throws error when used outside provider', () => {
    // Suppress console.error for this test
    const consoleSpy = vi.spyOn(console, 'error').mockImplementation(() => {})

    expect(() => {
      render(<ToastTestComponent />)
    }).toThrow('useToast must be used within a ToastProvider')

    consoleSpy.mockRestore()
  })
})