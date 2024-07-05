let salario = Number(prompt("Digite seu salario: "))


if(salario >= 0 && salario < 400.01){
    let porcentagem = salario * 0.15
    let tot = porcentagem + salario
    alert(`Novo salario: ${tot} reajuste: ${porcentagem} em percentual: 15%`)

} else if(salario > 400.01 && salario < 800.01){
    let porcentagem = salario * 0.12
    let tot = porcentagem + salario
    alert(`Novo salario: ${tot} reajuste: ${porcentagem} em percentual: 12%`)
} else if(salario > 800.01 && salario < 1200.01){
    let porcentagem = (salario * 0.10)
    let tot = porcentagem + salario
    alert(`Novo salario: ${tot} reajuste: ${porcentagem} em percentual: 10%`)
} else if(salario > 1200.01 && salario < 2000.01){
    let porcentagem = (salario * 0.07)
    let tot = porcentagem + salario
    alert(`Novo salario: ${tot} reajuste: ${porcentagem} em percentual: 7%`)
} else {
    let porcentagem = (salario * 0.04)
    let tot = porcentagem + salario
    alert(`Novo salario: ${tot} reajuste: ${porcentagem} em percentual: 4%`)
}