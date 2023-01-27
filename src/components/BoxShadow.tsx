import React, { useContext } from 'react'
import { shadows } from '../data/box-shadows'
import { ShadowContext } from './ShadwoContext'

type Props = {
  children: React.ReactElement
  shadowStyle?: string
  shadowColor?: string[]
}

const BoxShadow = ({ children, shadowStyle = 'shadow1_1', shadowColor }: Props) => {
  const contextStyleOptions = useContext(ShadowContext)
  const shadowVal: string[] = []

  // the box shadowColor takes priority, then the context
  // else we'll use the default shadow color
  const renderShadowColor = () => {
    if (shadowStyle in shadows) {
      const colorLength = shadows?.[shadowStyle].color.length
      const selectedShadowStyle = shadows?.[shadowStyle]

      for (let i = 0; i < colorLength; i++) {
        shadowVal.push(
          `${selectedShadowStyle.offset[i]} ${
            shadowColor?.[i] || contextStyleOptions.shadowColor || selectedShadowStyle.color[i]
          }`,
        )
      }
      return shadowVal.join(', ')
    } else {
      return `${shadows['shadow1_1'].offset} ${shadows['shadow1_1'].color}`
    }
  }

  const mainStyle = {
    boxShadow: `${renderShadowColor()}`,
  }

  const child = React.Children.only(children)
  const objectStyle = Object.assign({}, mainStyle)

  return <React.Fragment>{React.cloneElement(child, { style: objectStyle })}</React.Fragment>
}

export default BoxShadow
