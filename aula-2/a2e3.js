let quantidade = Number(prompt("Digite quantos livros gostaria: "))

if(quantidade <= 10){
    let total = quantidade * 12
    alert(`O valor total é ${total}`)
}else {
    let total = quantidade * 8
    alert(`O valor total ${total}`)
}