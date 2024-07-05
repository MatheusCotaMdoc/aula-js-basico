let velocidade = 0
let nave = prompt("Digite o nome da nave")

let opcao = true

while (opcao) {
    let menu = prompt("1- acelerar 5km \n 2- desacelerar 5km \n 3- imprimir resultado \n 4- sair")
    if (menu == 1) {
        acelerar()
    } else if (menu == 2) {
        desacelerar()
    } else if (menu == 3) {
        imprimir()
    } else if (menu == 4) {
        alert("Obrigado por viajar")
        opcao = false
    } else {
        alert("Opçao invalida")
        opcao = false
    }

}
function acelerar() {
    velocidade += 5
    return alert(velocidade)
}
function desacelerar(){
    velocidade -= 5
    return alert(velocidade)
}
function imprimir(){
    return alert("A nave é " +nave+" e a velocidade atual é "+velocidade)
}

