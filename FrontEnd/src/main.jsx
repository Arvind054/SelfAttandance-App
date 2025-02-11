import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import  { Toaster } from 'react-hot-toast';
import { UserProvider } from './Context/UserContext.jsx';
import { SubjectProvider } from './Context/SubjectContext.jsx';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserProvider>
      <SubjectProvider>
    <App />
    </SubjectProvider>
    </UserProvider>
    <Toaster/>
  </StrictMode>,
)
