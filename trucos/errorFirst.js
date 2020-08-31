function asincrona(callback) {
  setTimeout(function() {
    try {
      let a = 3 + z
      callback(null, a)
    } catch(err) {
      callback(err)
    }
  }, 1000)
}

asincrona(function (err, data) {
  if (err) {
    console.error('Tenemos un error')
    console.error(err)
    // throw err; NO VA A FUNCIONAR
    return false
  }
  console.log("Todo ha ido bien, mi data es:", data);
})

