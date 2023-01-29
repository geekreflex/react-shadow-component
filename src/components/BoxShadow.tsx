import React, { useContext } from 'react'
import { ShadowContext } from './ShadowContext'
import { BoxShadowProps } from './ShadowProps'
import { values } from './default'

const BoxShadow: React.FC<BoxShadowProps> = ({ blur, spread, color, offsetY, offsetX, children }) => {
  const c = useContext(ShadowContext)

  color = color || c.color || values.color
  blur = blur || c.blur || values.blur
  spread = spread || c.spread || values.spread
  offsetX = offsetX || c.offsetX || values.offsetX
  offsetY = offsetY || c.offsetY || values.offsetY

  const styles = {
    boxShadow: `${offsetX}px ${offsetY}px ${blur}px ${spread}px ${color || c.color}`,
  }

  const child = React.Children.only(children)
  const objectStyles = Object.assign({}, styles)

  return <React.Fragment>{React.cloneElement(child, { style: objectStyles })}</React.Fragment>
}

export default BoxShadow
