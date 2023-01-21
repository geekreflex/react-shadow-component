import React from 'react'

type Props = {
  children: React.ReactNode
}

const BoxShadow = (props: Props) => {
  return <div>{props.children}</div>
}

export default BoxShadow
