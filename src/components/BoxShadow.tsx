import React from 'react'
import { shadows } from '../data/shadows'

type Props = {
  children: React.ReactNode
  style: string
}

const BoxShadow = ({ children, style }: Props) => {
  return <div style={{ boxShadow: shadows[style] }}>{children}</div>
}

export default BoxShadow
