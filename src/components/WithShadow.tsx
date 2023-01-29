import { PropsWithChildren, ReactElement } from 'react'
import React from 'react'
import { ShadowContext } from './ShadowContext'
import { WithShadowProps } from './ShadowProps'
import { values } from './default'

export type Props = PropsWithChildren<WithShadowProps>

const WithShadow: React.FC<Props> = ({ children, ...styleOptions }): ReactElement => {
  return <ShadowContext.Provider value={styleOptions}>{children}</ShadowContext.Provider>
}

WithShadow.defaultProps = {
  blur: values.blur,
  spread: values.spread,
  color: values.color,
  offsetX: values.offsetX,
  offsetY: values.offsetY,
}

export default WithShadow
