import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// Component
import GifsApp from './GifsApp'

import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GifsApp />
  </StrictMode>,
)
