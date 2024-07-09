import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import "bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import "./assets/css/style.css"
import "bootstrap-icons/font/bootstrap-icons.css"
import "react-bootstrap"
import {Toaster} from "react-hot-toast";


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <App />
      <Toaster
          position="top-center"
          reverseOrder={false}
      />
  </React.StrictMode>,
)
