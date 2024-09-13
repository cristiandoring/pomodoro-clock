var segundos = 0;
var minutos = 50;
var horas = 0;

/*
const audio = new Audio();

audio.src="./sons/button-9-88354.mp3";
*/
function iniciar(){

    cronometro()
    //chama a função contador a cada 1s (1000ms)
     intervalo = setInterval(cronometro,1000)

     //desabilita o botão iniciar após clicar 1x nele
     document.querySelector('#iniciar').disabled = true;

     
}


function cronometro(){
    if (segundos == 0) {
        if (minutos == 0) {
            if (horas == 0) {
                // Para o cronômetro quando chegar a zero
                clearInterval(intervalo);
                alert("Tempo esgotado!");
                return;
            } else {
                horas--;
                minutos = 59;
                segundos = 59;
            }
        } else {
            minutos--;
            segundos = 59;
        }
    } else {
        segundos--;
    }
    
    document.getElementById('relogio').innerText = formatar(horas) + ":" + formatar(minutos) + ":" + formatar(segundos)

    
}

function formatar(digito){
    if(digito <10){
        return("0" + digito)
    }
    else{
        return(digito)
    }
   
}