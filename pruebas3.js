

// let array = []

// for (let i = 0; i < 10; i++) {
//   array.push(Math.random())
// }
// console.log(array);




// const numbers = [12, 21, 38, 5, 45, 37, 6]

// console.log(numbers.sort());
// function minMax (array){
//   let min = array[0]
//   for (let i = 1; i < array.length; i++) {
//     if (min > array[i]) {
     
//     } else {
      
//     }
    
//   }

// }

// let numbers = [1,5,23,4,12,45,78,8,8.9,10,11,3.4,10.1,84,6]

// let greaterTen = [];

// for (let i = 0; i<numbers.length; i++) {
//   var currentNumber = numbers[i];
//   if (currentNumber > 10) {
//     greaterTen.push(currentNumber)
//   }
// }

// console.log(greaterTen); 

// let greaterTen2 = numbers.filter(number => number > 10 );
// console.log(greaterTen2);



// const counterWords = [
//   'code',
//   'repeat',
//   'eat',
//   'sleep',
//   'code',
//   'enjoy',
//   'sleep',
//   'code',
//   'enjoy',
//   'upgrade',
//   'code'
// ]


// function repeatCounter(param) {
 
//   let counter = {}
//   for (let i = 0; i < param.length; i++) {
//     const word = param[i];
//     if (counter[word]) {
//       counter[word]++;
//     } else {
//       counter[word] = 1
//     }

    
//   }return counter
// }


// console.log(repeatCounter(counterWords));








// var indices = [];
// var array = ["a", "b", "a", "c", "a", "d"];
// var element = "a";
// var idx = array.indexOf(element);
// while (idx != -1) {
//   indices.push(idx);
//   idx = array.indexOf(element, idx + 1);
// }
// console.log(indices);

// function factorial (numero){
//   if (numero === 0) {
//     return 1
//   } else {
//     return factorial(numero -1) * numero
//   }
// }  

//console.log(factorial(10));


// function calcularFactorial(num){
//   let resultado = 1
// for (let i = 1; i <= num ; i++) {
//   console.log(i);
//   resultado = resultado*i 
// }
// return resultado
// }


// console.log(calcularFactorial(4));


// let cadena = 'La version mas reciente de JavaScript es ES6'

// let indice = cadena.indexOf('JavaScript')
// let regex = /[A-Z]/g;

// let found = cadena.match(regex)
// console.log(found);




// console.log(cadena.indexOf('programacion'));
// console.log(cadena.search(/\w+$/));

// for (let i = 0; i < cadena.length; i++) {
//   const element = cadena[i];
//   console.log(element);
// }

// console.log(cadena.length);
// for (let i = 0; i < cadena.length; i++) {
//   let cade = cadena[i]
//   let space = ''
//  if (cade.includes('')) {
//     space = cade ++ 
//     console.log(space);
//  }
// }
//let cadena = 'JavaScript es un lenguaje de programacion';



let array = ['3', '123124234' ,undefined, 'needle', 'world', 'hay', 2, '3', true, false, 'needle', 'manolo', 'needle', 'needle', 'world', 2];

function findNeedle(array , x){
  let suma = []
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    if (element === x) {
      suma.push(x)
    }
  }return suma.length
}

console.log(findNeedle(array, 2));

// let palabra = 'manoeeaopao'
// function solve (s){
// let cur = 0
// let max = 0
// debugger
// for (let i = 0; i < s.length; i++) {
//   if('aeiou'.includes(s[i])){
//     cur ++
//     if(cur > max){
//       max = cur
//     }
//   }else{
//     cur = 0
//   }
// }
//  return max
// }

// console.log(solve(palabra));
