import React from 'react'
export interface BoxShadowProps {
  blur?: number
  spread?: number
  color?: string
  offsetX?: number
  offsetY?: number
  children: React.ReactElement
}

export interface WithShadowProps {
  blur?: number
  spread?: number
  color?: string
  offsetX?: number
  offsetY?: number
}
