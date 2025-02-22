import './App.css'
import { ChangeThemeButton } from './components/button'
import { ThemeProvider } from './contexts/themeContext'

function App() {

  return (
    <ThemeProvider>
      <div
      style={{
        display:"flex",
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center",
        height:"100vh",
        backgrouond:"var(--bg)",
        color:"var(--text)",
        transition:"all 0.25s linear"
      }}
        >
        <ChangeThemeButton/>
        <ChangeThemeButton/>
        <button>Help me</button>
      </div>
    </ThemeProvider>
    
  )
}

export default App
