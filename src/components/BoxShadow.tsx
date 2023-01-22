import React, { useContext } from 'react'
import { shadows } from '../data/shadows'
import { ShadowContext } from './ShadwoContext'

type Props = {
  children: React.ReactNode
  style: string
  shadowColor?: string
}

const BoxShadow = ({ children, style, shadowColor }: Props) => {
  const contextStyleOptions = useContext(ShadowContext)

  // the box shadowColor takes priority, then the context
  // else we'll use the default shadow color
  const renderShadowColor = () => {
    return `${shadowColor || contextStyleOptions.shadowColor || shadows[style].color}`
  }

  const mainStyle = {
    boxShadow: `${renderShadowColor()} ${shadows[style].set}`,
    display: `inline-flex`,
  }

  return <span style={mainStyle}>{children}</span>
}

export default BoxShadow
