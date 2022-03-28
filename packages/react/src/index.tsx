import React from 'react'
import { WrapperProps } from './index.d'

const Wrapper: React.FC<WrapperProps> = (props) => {
  const { name, children } = props
  return (
    <>
      <div>hi, {name}</div>
      {children}
    </>
  )
}

export default Wrapper
