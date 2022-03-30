const { sayHello } = require('../dist/index')

const name = sayHello({
  name: 'World',
})

console.log(name)
