import './index.css'

import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import { App } from './App.tsx'
import { LinksContextProvider } from './contexts/LinksContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <LinksContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </LinksContextProvider>
  </React.StrictMode>
)
