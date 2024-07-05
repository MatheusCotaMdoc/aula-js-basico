let anoAtual = Number(prompt("Em que ano estamos?"))
let anoNasc = Number(prompt("Em que ano voce nasceu?"))

let idade = anoAtual - anoNasc

alert("A sua idade é " + idade)

if(idade >= 16){
    alert("Voto opcional")

}else if(idade >= 18){
    alert("Voto obrigatorio")
}else {
    alert(`Voce nao pode votar`)
}