var segundos = 0;
var minutos = 50;
var horas = 0;
var cronometroAtivo = false;
var pomodoroAtivo = false;
var intervaloCurtoAtivo = false;
var intervaloLongoAtivo = false;
/*
const audio = new Audio();

audio.src="./sons/button-9-88354.mp3";
*/
function iniciar(){
// Iniciar apenas se não estiver ativo
    if (!cronometroAtivo) { 
        cronometroAtivo = true;
        
    //chama a função contador a cada 1s (1000ms)
     intervalo = setInterval(cronometro,1000)

     //desabilita o botão iniciar após clicar 1x nele
     document.querySelector('#iniciar').disabled = true;

    }
}

function reiniciar(){
        
        clearInterval(intervalo)
        pomodoroAtivo = true
        intervaloCurtoAtivo = false
        intervaloLongoAtivo = false

        horas = 0
        minutos = 50
        segundos = 0

        cronometroAtivo = false; // Define como não ativo
        document.getElementById('relogio').innerText = formatar(horas) + ":" + formatar(minutos) + ":" + formatar(segundos);
    
        // Habilita/desabilita os botões
        document.querySelector('#iniciar').disabled = false; // Habilita o botão iniciar
        document.querySelector('#pausar').disabled = true; // Desabilita o botão pausar
}


function pausar() {
    if (cronometroAtivo) {
        clearInterval(intervalo); // Para o intervalo
        cronometroAtivo = false; // Define como não ativo
        document.querySelector('#iniciar').disabled = false; // Habilita o botão iniciar
        document.querySelector('#pausar').disabled = true; // Desabilita o botão pausar
    }
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

function reiniciar_intervalo_curto(){
    clearInterval(intervalo)

    pomodoroAtivo = false
    intervaloCurtoAtivo = true
    intervaloLongoAtivo = false
        
        
    horas = 0
    minutos = 10
    segundos = 0

    cronometroAtivo = false; // Define como não ativo
    document.getElementById('relogio').innerText = formatar(horas) + ":" + formatar(minutos) + ":" + formatar(segundos);

    // Habilita/desabilita os botões
    document.querySelector('#iniciar').disabled = false; // Habilita o botão iniciar
    document.querySelector('#pausar').disabled = true; // Desabilita o botão pausar
}

function reiniciar_intervalo_longo(){
    clearInterval(intervalo)
    
    pomodoroAtivo = false
    intervaloCurtoAtivo = false
    intervaloLongoAtivo = true
        
    horas = 0
    minutos = 15
    segundos = 0

    cronometroAtivo = false; // Define como não ativo
    document.getElementById('relogio').innerText = formatar(horas) + ":" + formatar(minutos) + ":" + formatar(segundos);

    // Habilita/desabilita os botões
    document.querySelector('#iniciar').disabled = false; // Habilita o botão iniciar
    document.querySelector('#pausar').disabled = true; // Desabilita o botão pausar
}
/*
function passar_intervalo(){
    //se cronometro não está ativo
    if(!cronometroAtivo){
        if(minutos == 50){
            minutos = 15
            document.getElementById('relogio').innerText = formatar(horas) + ":" + formatar(minutos) + ":" + formatar(segundos);
        }
        else if(minutos == 15){
                minutos = 10
                document.getElementById('relogio').innerText = formatar(horas) + ":" + formatar(minutos) + ":" + formatar(segundos);
            }
        else if(minutos==10){
                minutos = 50
                document.getElementById('relogio').innerText = formatar(horas) + ":" + formatar(minutos) + ":" + formatar(segundos);
            }
        }

        //se está ativo
    else{
        if(pomodoroAtivo == true){
            horas = 0
            minutos = 10
            segundos = 0

            cronometroAtivo = false
            document.getElementById('relogio').innerText = formatar(horas) + ":" + formatar(minutos) + ":" + formatar(segundos);
        }
        else if(intervaloCurtoAtivo){
            horas = 0
            minutos = 15
            segundos = 0

            cronometroAtivo = false

            document.getElementById('relogio').innerText = formatar(horas) + ":" + formatar(minutos) + ":" + formatar(segundos);
        }
        else if(intervaloLongoAtivo){
            horas = 0
            minutos = 50
            segundos = 0

            cronometroAtivo = false
            document.getElementById('relogio').innerText = formatar(horas) + ":" + formatar(minutos) + ":" + formatar(segundos);
        }
    }
    }
*/
function formatar(digito){
    if(digito <10){
        return("0" + digito)
    }
    else{
        return(digito)
    }
   
}