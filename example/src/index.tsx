import React from 'react'
import ReactDOM from 'react-dom/client'
import { MyCounter } from 'react-shadow-component'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <div>
      <h2>Default counter</h2>
      <MyCounter />
    </div>
    <hr />
    <div>
      <h2>Counter with predefined value</h2>
      <MyCounter value={5} />
    </div>
  </React.StrictMode>,
)
