import React from 'react'

type Props = {
  children: React.ReactNode
}

const TextShadow = (props: Props) => {
  return <div>{props.children}</div>
}

export default TextShadow
