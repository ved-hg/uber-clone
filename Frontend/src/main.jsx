import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'  
import UserContext from './context/UserContext.jsx'
import CaptainContext from './context/Captaincontext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CaptainContext>
    <UserContext>
    {/* // wrap the App component with BrowserRouter */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </UserContext>
    </CaptainContext>
  </StrictMode>,
)
