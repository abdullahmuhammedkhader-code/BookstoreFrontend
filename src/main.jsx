import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { GoogleOAuthProvider } from '@react-oauth/google';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <GoogleOAuthProvider clientId='223128102956-s5n33q87r5ot08375hg89q2unid8nr3t.apps.googleusercontent.com'><App /></GoogleOAuthProvider>
    </BrowserRouter>
  </StrictMode>,
)
