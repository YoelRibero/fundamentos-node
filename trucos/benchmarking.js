console.time('todo')

let suma = 0;

console.time('bucle')

for (let i = 0; i < 1000000000; i++) {
  suma ++;
}

console.timeEnd('bucle')

let suma2 = 0;

console.time("bucle2");

for (let j = 0; j < 100000; j++) {
  suma2++;
}

console.timeEnd("bucle2");

console.time('asíncrono')
console.log('Comienza proceso asíncrono')
asincrona()
  .then(() => {
    console.timeEnd('asíncrono')
  })

console.timeEnd('todo')

function asincrona() {
  return new Promise(resolve => {
    setTimeout(function () {
      console.log('Termina el proceso asíncrono')
      resolve()
    })
  })
}