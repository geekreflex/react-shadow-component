import { PropsWithChildren, ReactElement } from 'react'
import React from 'react'
import { ShadowContext } from './ShadowContext'
import { WithShadowProps } from './ShadowProps'

export type Props = PropsWithChildren<WithShadowProps>

const WithShadow: React.FC<Props> = ({ children, ...styleOptions }): ReactElement => {
  return <ShadowContext.Provider value={styleOptions}>{children}</ShadowContext.Provider>
}

WithShadow.defaultProps = {
  blur: 20,
  spread: -20,
  color: 'navy',
  offsetX: 0,
  offsetY: 25,
}

export default WithShadow
