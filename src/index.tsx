import React from 'react'
import { WrapperProps } from './index.d'

const Wrapper: React.FC<WrapperProps> = (props) => {
  const { name } = props
  return (
    <>
      <div>hello, {name}</div>
      {props.children}
    </>
  )
}

export default Wrapper