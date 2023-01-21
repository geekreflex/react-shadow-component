import React from 'react'
import '../styles/shadow.css'

type Props = {
  children: React.ReactNode
  style: string
}

const BoxShadow = ({ children, style }: Props) => {
  return <div className={`__rsc-${style}`}>{children}</div>
}

export default BoxShadow
