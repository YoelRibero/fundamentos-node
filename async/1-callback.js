function soyAsincrona(myCallback) {
  setTimeout(() => {
    console.log("Hola, soy asíncrona");
    myCallback()
  }, 1000)
}

console.log('Iniciando proceso...')
soyAsincrona(function () {
  console.log("Terminando proceso...");
})

function hola(nombre, myCallback) {
  setTimeout(() => {
    console.log('Hola ' + nombre)
    myCallback(nombre)
  }, 1000)
}

function adios(nombre, otroCallback) {
  setTimeout(() => {
    console.log("Adiós " + nombre);
    otroCallback();
  }, 1000);
}

hola('Yoel', function (nombre) {
  adios(nombre, function () {
    console.log("Terminando proceso...");
  });
})
