import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import {BrowserRouter} from "react-router-dom";

// import { GeistSans } from 'geist/font/sans'
// import { GeistMono } from 'geist/font/mono'

import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
