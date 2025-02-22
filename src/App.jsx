import './App.css'
import { ChangeThemeButton } from './components/button'
import { ThemeProvider } from './contexts/themeContext'

function App() {

  return (
    <ThemeProvider>
      <ChangeThemeButton/>
    </ThemeProvider>
    
  )
}

export default App
