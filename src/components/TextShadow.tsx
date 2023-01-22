import React from 'react'
import { shadows } from '../data/text-shadows'

type Props = {
  children: React.ReactElement
  shadowStyle?: string
  shadowOffsetX?: string
  shadowOffsetY?: string
  shadowBlur?: string
  shadowColor?: string
  other?: any
}

const TextShadow = ({
  children,
  shadowStyle,
  shadowOffsetX,
  shadowOffsetY,
  shadowBlur,
  shadowColor,
  ...other
}: Props) => {
  const renderTextShadow = () => {
    if (shadowStyle) {
      return `${shadows[shadowStyle]}`
    }
    return `${shadowOffsetX} ${shadowOffsetY} ${shadowBlur} ${shadowColor}`
  }

  const mainStyleObject = {
    textShadow: renderTextShadow(),
  }

  return (
    <span {...other} style={mainStyleObject}>
      {children}
    </span>
  )
}

export default TextShadow
