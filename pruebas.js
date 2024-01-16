//! EJERCICIO 8

// const avengers = [
//   'Hulk',
//   'Thor',
//   'IronMan',
//   'Captain A.',
//   'Spiderman',
//   'Captain M.'
// ]

// function findLongestWord(param) {
//   let longestWord = param[0]
//   console.log(longestWord.length)

//   for (let i = 1; i < param.length; i++) {
//     const element = param[i]
//     console.log(element.length)

//     if (element.length > longestWord.length) {
//       longestWord = element
//     }
//   }

//   return console.log(longestWord)
// }

// findLongestWord(avengers)

//! EJERCICIO 9
// const numbers = [1, 2, 3, 5, 45, 37, 58]

// function sumAll(param) {
//   let suma = 0
//   for (let i = 0; i < param.length; i++) {
//     suma += param[i]
//     console.log(suma)
//   }
//   return suma
// }
// console.log(sumAll(numbers))

//! EJERCICIO 11
//* Calcular promedio de strings: Crea una función que reciba por parámetro un array y cuando es un valor number lo sume y de lo contrario cuente la longitud del string y lo sume. Puedes usar este array para probar tu función:

// const mixedElements = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub']
// function averageWord(param) {
//   const numbers = 0
//   const strings = 0
//   for (let i = 0; i < param.length; i++) {
//     let para = param[i]
//     console.log(typeof para.length)
//     if (typeof para.length === undefined) {
//     } else {
//     }
//   }
// }
// averageWord(mixedElements)

//const mixed = [1, 3, 5, 7, 'hola', 'adios', 'amigo']
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

// for (let i = 0; i < products.length; i++) {
//   if(products[i].includes('Camiseta')){
//     console.log(`estos productos incluyen ${products[i]}`);
//   }else{
    
//   }

// const products = ['Camiseta de Pokemon', 'Pantalón coquinero', 'Gorra de gansta', 'Camiseta de Basket', 'Cinrurón de Orión', 'AC/DC Camiseta']


  
// function incluye (param, string){
//   for (let i = 0; i < param.length; i++) {
//     if (param[i].includes(string)) {
//       console.log(`estos productos incluyen ${param[i]}`); 
//     }  
//   }
// }


// console.log(incluye(products, 'Camiseta'));
//let numbers = []
const numbers =[75,19,10,90,25,110]


console.log(numbers[numbers.length-1]);
console.log(numbers.at(-5));
for (let i = numbers.length-1; i > 0; i--) {
  const element = numbers[i];
  console.log(element);
  
}
