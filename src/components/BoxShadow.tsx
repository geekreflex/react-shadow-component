import React, { useContext } from 'react'
import { shadows } from '../data/shadows'
import { ShadowContext } from './ShadwoContext'

type Props = {
  children: React.ReactNode
  style: string
  shadowColor: string
}

const BoxShadow = ({ children, style }: Props) => {
  const contextStyleOptions = useContext(ShadowContext)

  return <div style={{ boxShadow: shadows[style], display: 'inline-flex' }}>{children}</div>
}

export default BoxShadow
