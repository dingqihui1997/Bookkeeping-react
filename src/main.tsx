import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { ConfigProvider } from 'zarm'
ReactDOM.render(
  <ConfigProvider primaryColor="#007FFF">
    <App />
  </ConfigProvider>,
  document.getElementById('root')
)
