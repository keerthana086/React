import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Ref from "./events.jsx"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Ref></Ref>
  </StrictMode>,
)
