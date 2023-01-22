import { PropsWithChildren, ReactElement } from 'react'
import { ShadowStyleProps } from './ShadowStyleProps'
import React from 'react'
import { ShadowContext } from './ShadwoContext'

export type WithShadowProps = PropsWithChildren<ShadowStyleProps>

const WithShadow = ({ children, ...styleOptions }: WithShadowProps): ReactElement => {
  return <ShadowContext.Provider value={styleOptions}>{children}</ShadowContext.Provider>
}

export default WithShadow
