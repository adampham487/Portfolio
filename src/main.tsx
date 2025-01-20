import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './components/NavBar/NavBar.css'
import "./components/Home/Home.css"
import "./components/About/About.css"
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
