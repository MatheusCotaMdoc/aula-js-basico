let usuario = prompt("Digite seu usuario: ")
let senha = prompt("Digite a senha: ")
let msg;

function verificador(){
    if(usuario == "admin" && senha == "1234"){
        msg = "Bem vindo " + usuario
    }else{
        msg = "Usuario ou senha incorretos"
    }
   
alert(msg)
}




