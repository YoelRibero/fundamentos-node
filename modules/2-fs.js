const fs = require('fs')
const { dirname } = require('path')

function leer(ruta, cb) {
  fs.readFile(ruta, (error, data) => {
    cb(data.toString())
  })
}

// leer(__dirname + '/file.txt', console.log)

function escribir(ruta, contenido, cb) {
  fs.writeFile(ruta, contenido, function(error) {
    if (error){
      console.error('No he podido escribirlo', err)
    } else {
      cb('Se ha escrito un archivo')
    }
  })
}

escribir(__dirname + '/file1.txt', 'Soy un archivo viejo', console.log)
leer(__dirname + '/file1.txt', console.log)

function borrar(ruta, cb) {
  fs.unlink(ruta, cb)
}

borrar(__dirname + '/file1.txt', console.log)
