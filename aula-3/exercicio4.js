/*let letras = nome => nome.length
console.log(letras('Felipe'))*/
let dolar = 11
let real = 5.60
let conversao = (dolar,real) => dolar * real

console.log(`O valor de ${dolar} dolares convertido em reais fica ${conversao(dolar,real).toFixed(2)}`)