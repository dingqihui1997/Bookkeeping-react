import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { ConfigProvider } from 'zarm'
ReactDOM.render(
  <ConfigProvider primaryColor="#1890ff">
    <App />
  </ConfigProvider>,
  document.getElementById('root')
)
