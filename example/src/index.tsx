import React from 'react'
import ReactDOM from 'react-dom/client'
import { BoxShadow } from 'react-shadow-component'

const styles: any = {
  with: '400px',
  border: '1px solid red',
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <div>
      <BoxShadow color='red'>
        <div style={styles}>Hello</div>
      </BoxShadow>
    </div>
  </React.StrictMode>,
)
