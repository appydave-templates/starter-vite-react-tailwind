import { ThemeProvider } from './components/theme/ThemeProvider'
import { Header } from './components/layout/Header'
import { Footer } from './components/layout/Footer'
import { ExamplePage } from './pages/ExamplePage'

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <ExamplePage />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default App