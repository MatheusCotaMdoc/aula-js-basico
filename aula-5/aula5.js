/*let numeros = [4,20,8,16,100]

//for in
for (posicao in numeros){
    console.log(`O valor é ${numeros[posicao]} esta na posicao ${posicao}`)
}

//for off
for(let numero of numeros){
    console.log(`O valor é ${numero}`)
}
*/
/*
const data = new Date()
console.log(data.getDay())
console.log(data.getMonth())
console.log(data.getFullYear())
console.log(data.getDate())
*/

const pessoa = {
    nome: 'Felipe',
    idade: 16
}
console.log(pessoa)
// desestruturando pessoa
//const nome = pessoa.nome
const idade = pessoa.idade
const {nome} = pessoa
console.log(nome)
//alterando nome da propriedade
const {idade:age} = pessoa
console.log(age)
// desestruturando arrays
/*const frutas = ["Banana","Melancia","Abacaxi"]
const [item1, item2, item3] = frutas
console.log(item2)*/

//desestruturando funcoes

const frutas = {
    f1:"banana",
    f2:"uva",
    f3:"pitaya"
}
function liquidificador({f1}){
    console.log(f1)
}
liquidificador(frutas)