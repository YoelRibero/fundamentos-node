process.on("beforeExit", () => {
  console.log("el proceso va a terminar");
});

process.on('exit', () => {
  console.log('Ale, el proceso acabó')
  setTimeout(() => {
    console.log('No se verá nunca')
  }, 0)
})

setTimeout(() => {
  console.log("Esto si se verá");
}, 0);

process.on('uncaughtException', (err, origen) => {
  console.error('Vaya se nos olvidó capturar un error')
  console.error(err.message)
})

// process.on('uncaughtRejection');

functionQueNoExiste()

console.log('Esto si el error no se recoje, no sale')
