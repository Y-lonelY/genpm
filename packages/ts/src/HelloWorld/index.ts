import type { SayHelloProps } from '../types'

export function sayHello(props: SayHelloProps) {
  const { name } = props
  return `Hello${name}`
}
