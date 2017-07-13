// import dependencies
import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter } from 'react-router-dom'

// import components
import './Styles/Css/index.css'
import App from './App'

ReactDOM.render((
  <HashRouter>
    <App />
  </HashRouter>
), document.getElementById('root'))
