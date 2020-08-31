console.log('Hola Mundo')
// debemos tener mucho cuidado con los error en NodeJS. IMPORTANTE
let i = 0;
setInterval(() => {
  console.log(i)
  i++
  if(i === 5) {
    let a = 3 + z; // Error Forzado
  }
}, 1000)
console.log('Segunda instrucción')
// Comprobamos asincronismo, en consola veremos
/*
Hola Mundo
Segunda instacia
Loop
*/