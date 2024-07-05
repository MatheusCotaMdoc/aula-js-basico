
/*

let nome = "Matheus e Marcos"

const bemVindo = nome => "Seja bem vindo "+nome+"!!!";

alert(bemVindo(nome))

*/

function comidas(cafe,pQueijo){
    let totalItens = cafe + pQueijo

    alert("Novo preço: " + totalItens.toFixed(2))
}

comidas(4.00, 8.00)
comidas(5.00, 9.00)
/* função com reorno*/ 
function soma(x,y){
    return x + y
}
console.log(soma(10,10))

/*função anonima*/ 
let sum = function(x,y) {return x + y} //console.log(sum(10,10))

// arrow function
let somar = (x,y) => x + y

console.log(somar(15,15))

let letras = nome => nome.length
console.log(letras('Felipe'))
