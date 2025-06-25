import { renderHook } from '@testing-library/react'
import { useTheme } from '../useTheme'
import { ThemeProvider } from '../../components/theme/ThemeProvider'

describe('useTheme', () => {
  it('should throw error when used outside ThemeProvider', () => {
    // Suppress console.error for this test
    const consoleSpy = vi.spyOn(console, 'error').mockImplementation(() => {})
    
    expect(() => {
      renderHook(() => useTheme())
    }).toThrow('useTheme must be used within a ThemeProvider')
    
    consoleSpy.mockRestore()
  })

  it('should return theme context when used within ThemeProvider', () => {
    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <ThemeProvider>{children}</ThemeProvider>
    )

    const { result } = renderHook(() => useTheme(), { wrapper })

    expect(result.current).toHaveProperty('theme')
    expect(result.current).toHaveProperty('toggleTheme')
    expect(result.current).toHaveProperty('setTheme')
    expect(typeof result.current.toggleTheme).toBe('function')
    expect(typeof result.current.setTheme).toBe('function')
  })
})