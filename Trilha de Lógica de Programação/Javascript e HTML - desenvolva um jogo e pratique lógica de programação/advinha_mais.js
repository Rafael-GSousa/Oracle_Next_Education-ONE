function sorteia(){

    return Math.round(Math.random() * 1000);
}

function sorteiaNumeros(quantidade){
    var segredos = [];
    var numero = 1;

    while(numero <= quantidade){
        var numeroAleatorio = sorteia();

        if(numeroAleatorio != 0){
            var achou = false;

            for(var pos = 0; pos < segredos.length; pos++){
                if(segredos[pos] == numeroAleatorio){
                    achou = true;
                    break;
                }
            }
            if(!achou){
                segredos.push(numeroAleatorio);
                numero++;
            }
        }
    }
    return segredos;
}

var segredos = sorteiaNumeros(parseInt(prompt("Quantos valores no array:")));
console.log(segredos);

var input = document.querySelector("input");
input.focus();
function verifica(){
    var achou = false;
    for(var pos = 0; pos < segredos.length; pos++){
        if(input.value == segredos[pos]){
            achou = true;
            alert("Você acertou!");
            break;
        }
    }

    if(!achou){
        alert("Você errou!")
    }
    input.value = "";       
    input.focus();
    
}
var button = document.querySelector("button");
button.onclick = verifica;
