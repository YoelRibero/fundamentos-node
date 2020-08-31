let buffer = Buffer.alloc(4)
let bufferTwo = Buffer.from([1, 2, 5])
let bufferThree = Buffer.from('Hola')

console.log(bufferThree)
console.log(bufferThree.toString())

let abc = Buffer.alloc(26)
console.log(abc)

for (let i = 0; i < 26; i++) {
  abc[i] = i + 97;
}

console.log(abc.toString())
