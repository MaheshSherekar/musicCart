import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ContextAPI from './components/contextAPI/ContextAPI.jsx'

createRoot(document.getElementById('root')).render(

    <ContextAPI>
      <App />
    </ContextAPI>

)
