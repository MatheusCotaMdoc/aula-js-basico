let catalogo = require('./database/catalogo.json')
/*
function adicionarFilme(codigo, titulo, duracao, atores, anoDeLancamento, emCartaz){
let novoMovie = {
    "codigo": codigo,
    "titulo": titulo,
    "duracao": duracao,
    "atores": atores,
    "anoDeLancamento": anoDeLancamento,
    "emCartaz": emCartaz

};

catalogo.filmes.push(novoMovie);


return catalogo;
}

function buscarFilme(codigo){
    for(i = 0; i < catalogo.lenght; i++){
        if(catalogo[i].codigo === codigo){
            return catalogo[i]
        }
    }
}



const buscarFilme = (codigo) => catalogo.find((filme)=>filme.codigo == codigo)
buscarFilme(1)

const novoCatalogo = adicionarFilme(5,"Free Willy", 2, "Baleia", 1993, false);

console.log(novoCatalogo)
*/
function alterarStatusEmCartaz(codigo,emCartaz){
    for(let i = 0; i < catalogo.lenght; i++){
        if(catalogo[i].codigo == codigo){
            catalogo[i].emCartaz = emCartaz
            console.log(`Filme com código ${codigo} teve sua propriedade em cartaz alterada`)
        }
    }
}
alterarStatusEmCartaz(1,true) 


