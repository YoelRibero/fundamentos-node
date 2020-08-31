function otraFunction() {
  serompe()
}

function serompe() {
  return 3 + z
}

function seRompeAsincrona(cb) {
  setTimeout(function () {
    try {
      return 3 + z;
    } catch (error) {
      console.error('Error en mi función asíncrona')
      cb(error)
    }
    
  }, 1000)
}

try {
  // otraFunction();
  seRompeAsincrona(function (error) {
    console.log(error.message)
  })
  sero
} catch(err) {
  console.error('Vaya algo se ha roto')
  console.error(err.message)
}

console.log('Esto va después')
