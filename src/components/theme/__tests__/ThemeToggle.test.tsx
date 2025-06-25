import { render, screen, act } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ThemeToggle } from '../ThemeToggle'
import { ThemeProvider } from '../ThemeProvider'

describe('ThemeToggle', () => {
  beforeEach(() => {
    localStorage.clear()
    vi.clearAllMocks()
    document.documentElement.classList.remove('dark')
  })

  it('should render toggle button', () => {
    render(
      <ThemeProvider>
        <ThemeToggle />
      </ThemeProvider>
    )

    const button = screen.getByRole('button')
    expect(button).toBeInTheDocument()
    expect(button).toHaveAttribute('aria-label')
  })

  it('should show sun icon in light mode', () => {
    // Mock localStorage to return 'light'
    localStorage.getItem = vi.fn().mockReturnValue('light')
    
    // Mock system preference 
    window.matchMedia = vi.fn().mockImplementation(() => ({
      matches: false,
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
    }))
    
    render(
      <ThemeProvider>
        <ThemeToggle />
      </ThemeProvider>
    )

    const button = screen.getByRole('button')
    expect(button).toHaveAttribute('aria-label', 'Switch to dark mode')
  })

  it('should show moon icon in dark mode', () => {
    // Mock localStorage to return 'dark'
    localStorage.getItem = vi.fn().mockReturnValue('dark')
    
    // Mock system preference 
    window.matchMedia = vi.fn().mockImplementation(() => ({
      matches: true,
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
    }))
    
    render(
      <ThemeProvider>
        <ThemeToggle />
      </ThemeProvider>
    )

    const button = screen.getByRole('button')
    expect(button).toHaveAttribute('aria-label', 'Switch to light mode')
  })

  it('should toggle theme when clicked', async () => {
    const user = userEvent.setup()
    
    // Mock localStorage to return 'light' initially
    localStorage.getItem = vi.fn().mockReturnValue('light')
    
    // Mock system preference for light mode
    window.matchMedia = vi.fn().mockImplementation(() => ({
      matches: false,
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
    }))

    render(
      <ThemeProvider>
        <ThemeToggle />
      </ThemeProvider>
    )

    const button = screen.getByRole('button')
    
    // Initially light mode
    expect(button).toHaveAttribute('aria-label', 'Switch to dark mode')

    // Click to switch to dark
    await act(async () => {
      await user.click(button)
    })

    expect(button).toHaveAttribute('aria-label', 'Switch to light mode')

    // Click to switch back to light
    await act(async () => {
      await user.click(button)
    })

    expect(button).toHaveAttribute('aria-label', 'Switch to dark mode')
  })

  it('should have proper accessibility attributes', () => {
    render(
      <ThemeProvider>
        <ThemeToggle />
      </ThemeProvider>
    )

    const button = screen.getByRole('button')
    expect(button).toHaveAttribute('aria-label')
    expect(button).toHaveAttribute('title')
  })
})