

//*Usa includes: Haz un bucle y muestra por consola todos aquellos valores del array que incluyan la palabra "Camiseta". Usa la función .includes de javascript.

const products = ['Camiseta de Pokemon', 'Pantalón coquinero', 'Gorra de gansta', 'Camiseta de Basket', 'Cinturón de Orión', 'AC/DC Camiseta']

function incluir (param , string) {
 let newArray = [];
 for (let i = 0; i < param.length; i++) {
  if(param[i].includes(string)){
    newArray.push(param[i])
  } 
} return newArray
}

console.log(incluir(products, 'Camiseta'));



//(`esto incluye ${param[i]}`); 