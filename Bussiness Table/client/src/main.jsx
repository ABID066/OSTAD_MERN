import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx';
import "./assets/css/bootstrap.css";
import "./assets/css/animate.min.css";
import "./assets/css/style.css";
import "react-bootstrap"
import "../src/assets/css/data-table.css"
import "../src/assets/css/progress.css"

import {Provider} from "react-redux";
import store from "./redux/store/store";


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <Provider store={store}>
          <App />
      </Provider>
  </React.StrictMode>,
)
