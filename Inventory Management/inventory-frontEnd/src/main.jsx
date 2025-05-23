import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import "./assets/css/bootstrap.css"
import "./assets/css/style.css"
import "./assets/css/amimate.min.css"
import {Provider} from "react-redux";
import store from "./redux/store/store.js";
import {Toaster} from "react-hot-toast";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
        <Toaster/>
    </Provider>
  </React.StrictMode>,
)
