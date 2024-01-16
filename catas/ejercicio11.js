//* Calcular promedio de strings: Crea una función que reciba por parámetro un array y cuando es un valor number lo sume y de lo contrario cuente la longitud del string y lo sume. Puedes usar este array para probar tu función:

const mixedElements = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub']

function averageWord(param) {
  let total = 0
  //let total1 = 0
  for (let i = 0; i < param.length; i++) {
    const para = param[i]
    if (typeof para === 'string') {
      total += para.length
    } else {
      total += para
    }
  }
  return total
}

console.log(averageWord(mixedElements))
