const { exec, spawn } = require('child_process')

exec('node modules/3-console.js', (err, stdout, sterr) => { // Invocando un proceso nuevo
  if (err) {
    console.error(err)
    return false
  }
  console.log(stdout)
})

let proceso = spawn('dir')

console.log(proceso.pid)

proceso.stdout.on('data', function (dato) {
  console.log('Está muerto?')
  console.log(proceso.killed)
  console.log(dato.toString())
})

proceso.on('exit', function() {
  console.log('El proceso terminó')
  console.log(proceso.killed)
})
