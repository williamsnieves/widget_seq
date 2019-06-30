import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

ReactDOM.render(
  <App
    ref={widgetComponent => {
      window.widgetComponent = widgetComponent
    }}
  />,
  document.getElementById('widget')
)