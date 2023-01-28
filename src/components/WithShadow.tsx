import { PropsWithChildren, ReactElement } from 'react'
import React from 'react'
import { ShadowContext } from './ShadowContext'
import { WithShadowProps } from './ShadowProps'

export type Props = PropsWithChildren<WithShadowProps>

const WithShadow: React.FC<Props> = ({ children, ...styleOptions }): ReactElement => {
  return <ShadowContext.Provider value={styleOptions}>{children}</ShadowContext.Provider>
}

export default WithShadow
