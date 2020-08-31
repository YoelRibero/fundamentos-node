const fs = require('fs')
const stream = require('stream')
const util = require('util')

let data = ''

// Stream de lectura
let readableStream = fs.createReadStream(__dirname + '/input.txt')

readableStream.setEncoding('UTF8')

readableStream.on('data', function (chunk) {
  // console.log(chunk)
  data += chunk
})

readableStream.on('end', function() {
  console.log(data)
})

// Strem de escritura
process.stdout.write('hola')
process.stdout.write("que");
process.stdout.write("tal");

// Stream de transformación

const Transform = stream.Transform

function Mayus() {
  Transform.call(this)
}

util.inherits(Mayus, Transform)

Mayus.prototype._transform = function(chunk, codi, cb) {
  chunkMayus = chunk.toString().toUpperCase()
  this.push(chunkMayus)
  cb();
}

let mayus = new Mayus()

readableStream
  .pipe(mayus)
  .pipe(process.stdout)
