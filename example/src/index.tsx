import React from 'react'
import ReactDOM from 'react-dom/client'
import { BoxShadow } from 'react-shadow-component'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <div>
      <BoxShadow style='shadow2'>
        <div style={{ width: '400px', height: '400px', border: '1px solid red' }}>Hello</div>
      </BoxShadow>
    </div>
  </React.StrictMode>,
)
