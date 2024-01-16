//* Calcular un promedio (media) es una tarea extremadamente común. Puedes usar este array para probar tu función:

const numbers = [12, 21, 38, 5, 45, 37, 6]
function average(param) {
  let sum = 0
  let media = 0
  for (let i = 0; i < param.length; i++) {
    let para = param[i]
    sum += para
    media = sum / param.length
  }
  return media
}

console.log(average(numbers))
