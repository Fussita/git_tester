import React from 'react'
import ReactDOM from 'react-dom/client'
import { Core } from './core-main'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Core/>
    </BrowserRouter>
  </React.StrictMode>
)
