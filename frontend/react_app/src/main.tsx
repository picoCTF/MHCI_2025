import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {HeroUIProvider} from '@heroui/react'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HeroUIProvider style={{width: "100%", height: "100%"}}>
      <App />
    </HeroUIProvider>    
  </StrictMode>,
)
