import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './scss/styles.scss'

// * Nota: Si falla algunas funcionalidad de react-router-dom, instalar las siguientes librerias: localforage match-sorter sort-by
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
