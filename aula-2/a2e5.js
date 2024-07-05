let a = Number(prompt("Digite o valor de A"))
let b = Number(prompt("Digite o valor de B"))
let c = Number(prompt("Digite o valor de C"))
let d = Number(prompt("Digite o valor de D"))

if (b > c && d > a && c + d > a + b && c >=0 && d >= 0){
alert("Valores aceitos")
}else{
    alert("Valores nao aceitos")
}