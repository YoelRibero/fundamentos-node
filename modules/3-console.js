console.log('Algo')
console.info('Algo más')
console.error('Ha ocurrito un error')
console.warn('Ojo! potencial error')
const table = [
  {
    a: 1,
    b: 'Z'
  },
  {
    a: 2,
    b: 'Otra'
  }
]
console.table(table)
console.group('Conversación')
console.log('Hola')
console.log('BlaBlaBlaBla')
console.log('Adiós')
console.groupEnd('Conversación')

function function1() {
  console.group('function 1')
  console.log('Esto es de la function 1')
  console.log('Esto también')
  function2()
  console.log('Hemos vuelto a la 1')
  console.groupEnd('function 1')
}

function function2() {
  console.group("function 2");
  console.log('ahora estamos en la function 2')
  console.groupEnd("function 2");
}

console.log('empezamos')
function1()

console.count('veces')
console.count("veces");
console.count("veces");
console.countReset("veces");
console.count("veces");
console.count("veces");
