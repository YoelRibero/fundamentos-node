function hola(nombre) {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      console.log("Hola " + nombre);
      resolve(nombre);
    }, 1000);
  })
}

function hablar(nombre) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Bla Bla Bla Bla...");
      // resolve(nombre);
      reject('Hay un error')
    }, 1000);
  }) 
}

function adios(nombre) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Adiós " + nombre);
      resolve();
    }, 1000);
  })
}

console.log("Iniciando proceso...");
hola("Yoel")
  .then(hablar)
  .then(hablar)
  .then(hablar)
  .then(hablar)
  .then(hablar)
  .then(adios)
  .then((nombre) => console.log("Terminado el proceso!"))
  .catch(error => console.error(`Ha habido un error ${error}`))
