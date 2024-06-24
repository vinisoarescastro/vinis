function carregar() {                               
    let letrasAleatorias = '0123456789ABCDEF';      // seleciona as letras e números que serão usados para gerar a cor
    let cor = '#';                 

    for (let i = 0; i < 6; i++) {               
        cor += letrasAleatorias[Math.floor(Math.random() * 16)];    
    }

    return cor;
}

function backgroundColor() {
    document.body.style.background = carregar();    // chama a função carregar e atribui a cor gerada a cor de fundo
}

function horas() {                                  // função que mostra as horas
    let data = new Date();                          // cria um objeto com a data e hora atual

    let horas = data.getHours();
    let minutos = data.getMinutes();
    let segundos = data.getSeconds(); 

    horas = ( horas < 10 ) ? '0' + horas : horas ;            // verifica se a hora é menor que 10, se for, adiciona um 0 a esquerda
    minutos = ( minutos < 10 ) ? '0' + minutos : minutos ;    // verifica se o minuto é menor que 10, se for, adiciona um 0 a esquerda
    segundos = ( segundos < 10 ) ? '0' + segundos : segundos ;// verifica se o segundo é menor que 10, se for, adiciona um 0 a esquerda

    let horaFormatada = `${horas}:${minutos}:${segundos}`;    // formata a hora para o padrao HH:MM:SS

    let msg = document.querySelector('p#msg');                // seleciona o elemento p com id msg
    msg.innerHTML = `Agora são ${horaFormatada}.`;            // adiciona a hora formatada ao elemento p com o format string
}

setInterval(backgroundColor, 1000);                           // chama a função backgroundColor a cada 2 segundos
setInterval(horas, 1000);                                     // chama a função horas a cada 1 segundo