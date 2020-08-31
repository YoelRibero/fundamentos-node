let saludo = 'hola'
console.log(saludo)

let nombre = process.env.NOMBRE || 'Sin Nombre'; // Así pasamos una variable de entorno
let web = process.env.WEB || 'No tiene web'
console.log('Hola ' + nombre)
console.log('Mi web era: ' + web)