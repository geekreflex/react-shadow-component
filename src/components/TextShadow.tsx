import React from 'react'

type Props = {
  children: React.ReactNode
}

const TextShadow = (props: Props) => {
  return <span>{props.children}</span>
}

export default TextShadow
