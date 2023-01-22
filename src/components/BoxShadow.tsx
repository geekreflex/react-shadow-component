import React, { useContext } from 'react'
import { shadows } from '../data/box-shadows'
import { ShadowContext } from './ShadwoContext'

type Props = {
  children: React.ReactElement
  shadowStyle: string
  shadowColor?: string[]
}

const BoxShadow = ({ children, shadowStyle, shadowColor }: Props) => {
  const contextStyleOptions = useContext(ShadowContext)
  let shadowVal: string[] = []

  // the box shadowColor takes priority, then the context
  // else we'll use the default shadow color
  const renderShadowColor = () => {
    try {
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
    } catch (error) {
      throw new Error('Error invalid shadow style detected')
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
