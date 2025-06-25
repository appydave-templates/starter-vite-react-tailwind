import { render, screen, act } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ThemeProvider, ThemeContext } from '../ThemeProvider'
import { useContext } from 'react'

// Test component that uses the theme context
const TestComponent = () => {
  const context = useContext(ThemeContext)
  if (!context) return <div>No context</div>
  
  const { theme, toggleTheme, setTheme } = context
  
  return (
    <div>
      <span data-testid="current-theme">{theme}</span>
      <button data-testid="toggle-theme" onClick={toggleTheme}>
        Toggle Theme
      </button>
      <button data-testid="set-light" onClick={() => setTheme('light')}>
        Set Light
      </button>
      <button data-testid="set-dark" onClick={() => setTheme('dark')}>
        Set Dark
      </button>
    </div>
  )
}

describe('ThemeProvider', () => {
  beforeEach(() => {
    // Clear localStorage mock
    localStorage.clear()
    vi.clearAllMocks()
    
    // Reset document class
    document.documentElement.classList.remove('dark')
  })

  it('should provide theme context to children', () => {
    render(
      <ThemeProvider>
        <TestComponent />
      </ThemeProvider>
    )

    expect(screen.getByTestId('current-theme')).toBeInTheDocument()
    expect(screen.getByTestId('toggle-theme')).toBeInTheDocument()
  })

  it('should default to light theme when no saved preference and system prefers light', () => {
    // Mock system preference for light mode
    window.matchMedia = vi.fn().mockImplementation(() => ({
      matches: false, // false means light mode
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
    }))

    render(
      <ThemeProvider>
        <TestComponent />
      </ThemeProvider>
    )

    expect(screen.getByTestId('current-theme')).toHaveTextContent('light')
  })

  it('should default to dark theme when no saved preference and system prefers dark', () => {
    // Mock system preference for dark mode
    window.matchMedia = vi.fn().mockImplementation(() => ({
      matches: true, // true means dark mode
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
    }))

    render(
      <ThemeProvider>
        <TestComponent />
      </ThemeProvider>
    )

    expect(screen.getByTestId('current-theme')).toHaveTextContent('dark')
  })

  it('should use saved theme from localStorage', () => {
    localStorage.setItem('theme', 'dark')

    render(
      <ThemeProvider>
        <TestComponent />
      </ThemeProvider>
    )

    expect(screen.getByTestId('current-theme')).toHaveTextContent('dark')
  })

  it('should toggle theme correctly', async () => {
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
        <TestComponent />
      </ThemeProvider>
    )

    const currentTheme = screen.getByTestId('current-theme')
    const toggleButton = screen.getByTestId('toggle-theme')

    expect(currentTheme).toHaveTextContent('light')

    await act(async () => {
      await user.click(toggleButton)
    })

    expect(currentTheme).toHaveTextContent('dark')

    await act(async () => {
      await user.click(toggleButton)
    })

    expect(currentTheme).toHaveTextContent('light')
  })

  it('should persist theme changes to localStorage', async () => {
    const user = userEvent.setup()

    render(
      <ThemeProvider>
        <TestComponent />
      </ThemeProvider>
    )

    const setDarkButton = screen.getByTestId('set-dark')

    await act(async () => {
      await user.click(setDarkButton)
    })

    expect(localStorage.setItem).toHaveBeenCalledWith('theme', 'dark')
  })

  it('should apply dark class to document when theme is dark', async () => {
    const user = userEvent.setup()

    render(
      <ThemeProvider>
        <TestComponent />
      </ThemeProvider>
    )

    const setDarkButton = screen.getByTestId('set-dark')

    await act(async () => {
      await user.click(setDarkButton)
    })

    expect(document.documentElement.classList.contains('dark')).toBe(true)
  })

  it('should remove dark class from document when theme is light', async () => {
    const user = userEvent.setup()
    localStorage.setItem('theme', 'dark')

    render(
      <ThemeProvider>
        <TestComponent />
      </ThemeProvider>
    )

    const setLightButton = screen.getByTestId('set-light')

    await act(async () => {
      await user.click(setLightButton)
    })

    expect(document.documentElement.classList.contains('dark')).toBe(false)
  })
})