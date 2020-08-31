function hola(nombre, myCallback) {
  setTimeout(() => {
    console.log("Hola " + nombre);
    myCallback(nombre);
  }, 1000);
}

function hablar(callbackHablar) {
  setTimeout(() => {
    console.log('Bla Bla Bla Bla...')
    callbackHablar()
  }, 1000)
}

function adios(nombre, otroCallback) {
  setTimeout(() => {
    console.log("Adiós " + nombre);
    otroCallback();
  }, 1000);
}

console.log('Iniciando proceso...')

// hola("Yoel", function (nombre) {
//   hablar(function () {
//     hablar(function () {
//       adios(nombre, function () {
//         console.log("Terminando proceso..."); // Así se crea el callbackHell
//       });
//     })
//   })
// });

// Solución a CallbackHell
function conversacion(nombre, veces, callback) {
  if (veces > 0) {
    hablar(function () {
      conversacion(nombre, --veces, callback) // Función recursiva
    });
  } else {
    adios(nombre, callback)
  }
}

hola('Yoel', function (nombre) {
  conversacion(nombre, 5, function() {
    console.log('Proceso terminado!')
  })
})
