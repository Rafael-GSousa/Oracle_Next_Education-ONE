var loginCadastrado = "alura";
var senhaCadastrada = "alura321";


var tentativaAtual = 1;
var maxTentativas = 3;

while(tentativaAtual <= maxTentativas){
    var loginInformado = prompt("Informe seu login");
    var senhaInformada = prompt("Informe sua senha");

    if( loginCadastrado == loginInformado && senhaCadastrada == senhaInformada ) {

        alert("Bem-vindo ao sistema " + loginInformado);
        tentativaAtual = maxTentativas;
    } else {
        if(tentativaAtual == 3){
            alert("Seu acesso foi bloqueado! Você atingiu o limite de 3 tentativas.")
        }else{
            alert("Login inválido. Tente novamente");
        }
        
        
    }

    tentativaAtual++;

}
