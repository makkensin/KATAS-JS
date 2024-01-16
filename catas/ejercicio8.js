//* Buscar la palabra más larga. Completa la función que tomando un array de strings como argumento devuelva el más largo, en caso de que dos strings tenga la misma longitud deberá devolver el primero.
//* Puedes usar este array para probar tu función

const avengers = [
  'Hulk',
  'Thor',
  'IronMan',
  'Captain A.',
  'Spiderman',
  'Captain M.'
]

function findLongestWord(array) {
  let long = array[0]
  let longs = long.length
  for (let i = 1; i < array.length; i++) {
    let longer = array[i]
    let longers = longer.length
    if (longers > longs) {
      long = longers
    }
  }
  return long
}

console.log(findLongestWord(avengers))
