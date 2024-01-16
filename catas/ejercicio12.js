//*Valores únicos: Crea una función que reciba por parámetro un array y compruebe si existen elementos duplicados, en caso que existan los elimina para retornar un array sin los elementos duplicados. Puedes usar este array para probar tu función:

//*pista (cuando eliminamos algo de un array, su longitud se verá afectada)

const duplicates = [
  'sushi',
  'pizza',
  'burger',
  'potatoe',
  'pasta',
  'ice-cream',
  'pizza',
  'chicken',
  'onion rings',
  'pasta',
  'soda'
]

function removeDuplicates(param) {
  let newArray = []
  for (let i = 0; i < param.length; i++) {
    if (newArray.includes(param[i])) {
      console.log(`se repite ${param[i]}`)
    } else {
      newArray.push(param[i])
    }
  }
  return newArray
}

console.log(removeDuplicates(duplicates))
