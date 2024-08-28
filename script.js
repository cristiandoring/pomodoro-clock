var segundos = 0;
var minutos = 0;
var horas = 0;

/*
const audio = new Audio();

audio.src="./sons/button-9-88354.mp3";
*/
function iniciar(){

    cronometro()
    //chama a função contador a cada 1s (1000ms)
     intervalo = setInterval(cronometro,1000)

     document.querySelector('.iniciar').disabled = true;

     //desabilita o botão iniciar após clicar 1x nele
}


function cronometro(){
    segundos++
    if(segundos == 60){
        minutos++
        segundos=0
    }

    if(minutos == 60){
        horas++
        minutos=0
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