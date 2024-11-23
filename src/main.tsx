import React from 'react'
import { createRoot } from 'react-dom/client'
// @ts-ignore
import { Home } from './pages/Home/Home.jsx'
// @ts-ignore
import { GlobalStyles } from "./Styles/globalStyles"



createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GlobalStyles />
    <Home />
  </React.StrictMode>,
)
