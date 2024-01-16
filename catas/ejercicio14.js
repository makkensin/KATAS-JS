
//*Contador de repeticiones: Crea una función que nos devuelva el número de veces que se repite cada una de las palabras que lo conforma. Puedes usar este array para probar tu función:

const counterWords = [
  'code',
  'repeat',
  'eat',
  'sleep',
  'code',
  'enjoy',
  'sleep',
  'code',
  'enjoy',
  'upgrade',
  'code'
]

function repeatCounter(param) {
 
  let counter = {}
  for (let i = 0; i < param.length; i++) {
    const word = param[i];
    if (counter[word]) {
      counter[word]++;
    } else {
      counter[word] = 1
    }

    
  }return counter
}


console.log(repeatCounter(counterWords));
