import { PropsWithChildren, ReactElement } from 'react'
import React from 'react'
import { ShadowProps } from './ShadowProps'

export type WithShadowProps = PropsWithChildren<ShadowStyleProps>

export const ShadowContext = React.createContext<ShadowProps>({})

const WithShadow = ({ children, ...styleOptions }: WithShadowProps): ReactElement => {
  return <ShadowContext.Provider value={styleOptions}>{children}</ShadowContext.Provider>
}

export default WithShadow
