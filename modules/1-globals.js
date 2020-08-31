let i = 0
let interval = setInterval(function () {
  console.log('Hola')
  if(i === 3) {
    clearInterval(interval)
  }
  i++
}, 1000)

setImmediate(function () {
  console.log('Hola')
})

// reqire() Otro de los módulos globales para importar módulos

// console.log(process)

// console.log(__dirname)

// console.log(__filename)

global.miVariable = 'elValor'

console.log(miVariable)
