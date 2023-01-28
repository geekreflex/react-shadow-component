import React, { useContext } from 'react'
import { ShadowContext } from './ShadowContext'
import { BoxShadowProps } from './ShadowProps'

const BoxShadow: React.FC<BoxShadowProps> = ({ blur, spread, color, offsetY, offsetX, children }) => {
  const c = useContext(ShadowContext)

  color = color || c.color || 'rgba(0,0,0,0.45)'
  blur = blur || c.blur || 20
  spread = spread || c.spread || -20
  offsetX = offsetX || c.offsetX || 0
  offsetY = offsetY || c.offsetY || 25

  const styles = {
    boxShadow: `${offsetX}px ${offsetY}px ${blur}px ${spread}px ${color || c.color}`,
  }

  const child = React.Children.only(children)
  const objectStyles = Object.assign({}, styles)

  return <React.Fragment>{React.cloneElement(child, { style: objectStyles })}</React.Fragment>
}

export default BoxShadow
