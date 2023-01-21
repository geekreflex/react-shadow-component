import React from 'react'
import { shadows } from '../data/shadows'

type Props = {
  children: React.ReactNode
  style: string
}

const BoxShadow = ({ children, style }: Props) => {
  return <span style={{ boxShadow: shadows[style] }}>{children}</span>
}

export default BoxShadow
