/*let contador = 0

alert("Responda 1 = sim e 0 = nao")

let r1 = Number(prompt("Telefonou para a vitma?"))
let r2 = Number(prompt("Esteve no local do crime?"))
let r3 = Number(prompt("Mora perto da vitma?"))
let r4 = Number(prompt("Devia para a vitma?"))
let r5 = Number(prompt("Ja trabalhou com a vitma?"))

if(r1+r2+r3+r4+r5 >= 2){
alert("Suspeito")
}



alert(contador)
*/

let positivos = 0

let telefonou = prompt("Telefonou para a vitima ? ").toUpperCase()

if(telefonou == "SIM"){

    positivos+=1
    //positivo = positivo+1
}

let crime = prompt("Esteve no local do crime?").toUpperCase()

if(crime == "SIM"){
    positivos+=1
}

let mora = prompt("Mora perto da vitima?").toUpperCase()
if(mora == "SIM"){
    positivos+=1
}

let devia = prompt("Devia para a vitima?").toUpperCase()
if(devia == "SIM"){
    positivos+=1
}

let trabalhou = prompt("Trabalhou para a vitima?").toUpperCase()
if(trabalhou == "SIM"){
    positivos+=1
}

if (positivos < 2){
    alert("Inocente")
} else if(positivos == 2){
    alert("Suspeito")
}else if(positivos < 5){
    alert("Cumplice")
} else{
    alert("Assasino")
}