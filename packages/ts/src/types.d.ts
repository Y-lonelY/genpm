export interface SayHelloProps {
  name: string
  count: number
}

export function sayHello({ name, count }: SayHelloProps): void
