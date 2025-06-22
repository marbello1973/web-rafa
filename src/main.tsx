import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import { PersonalizationProvider } from './component/context/personalization.context.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <PersonalizationProvider>
      <BrowserRouter basename='/web-rafa'>
        <App />
      </BrowserRouter>
    </PersonalizationProvider>
  </StrictMode>,
)
