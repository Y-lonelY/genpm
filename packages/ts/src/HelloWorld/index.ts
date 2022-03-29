import type { SayHelloProps } from '../types'

export function sayHello(props: SayHelloProps) {
  const { name, count } = props
  for (let i = 0; i < count; i++) {
    console.log(`${name} say: Hello world!`)
  }
}
