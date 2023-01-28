import React, { useContext } from 'react'
import { ShadowContext } from './ShadowContext'
import { BoxShadowProps } from './ShadowProps'

const BoxShadow: React.FC<BoxShadowProps> = ({ blur, spread, color, offsetY, offsetX, children }) => {
  const {} = useContext(ShadowContext)

  const styles = {
    boxShadow: `${offsetX}px ${offsetY}px ${blur}px ${spread}px ${color}`,
  }

  const child = React.Children.only(children)
  const objectStyles = Object.assign({}, styles)

  return <React.Fragment>{React.cloneElement(child, { style: objectStyles })}</React.Fragment>
}

BoxShadow.defaultProps = {
  blur: 20,
  spread: -20,
  color: 'rgba(0,0,0,0.45)',
  offsetX: 0,
  offsetY: 25,
}

export default BoxShadow
