import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import HistoryCounter from './components/HistoryCounter.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {/* <HistoryCounter /> */}
  </StrictMode>,
)
