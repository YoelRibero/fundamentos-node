async function hola(nombre) {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      console.log("Hola " + nombre);
      resolve(nombre);
    }, 1000);
  });
}

async function hablar(nombre) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Bla Bla Bla Bla...");
      resolve(nombre);
      // reject("Hay un error");
    }, 1000);
  });
}

async function adios(nombre) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Adiós " + nombre);
      resolve();
    }, 1000);
  });
}

async function main () {
  let nombre = await hola('Yoel')
  await hablar()
  await hablar();
  hablar(); // Ver que pasa si no está await
  hablar();
  await adios(nombre);
}

console.log('Empezando proceso...')
main()
console.log('Terminando Proceso...')