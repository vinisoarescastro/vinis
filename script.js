function carregar() {
    let letrasAleatorias = '0123456789ABCDEF';
    let cor = '#';

    for (let i = 0; i < 6; i++) {
        cor += letrasAleatorias[Math.floor(Math.random() * 16)];
    }

    return cor;
}

function backgroundColor() {
    document.body.style.background = carregar();
}

function horas() {
    let data = new Date();

    let horas = data.getHours();
    let minutos = data.getMinutes();
    let segundos = data.getSeconds(); 

    horas = ( horas < 10 ) ? '0' + horas : horas ;
    minutos = ( minutos < 10 ) ? '0' + minutos : minutos ;
    segundos = ( segundos < 10 ) ? '0' + segundos : segundos ;

    let horaFormatada = `${horas}:${minutos}:${segundos}`;

    let msg = document.querySelector('p#msg');
    msg.innerHTML = `Agora são ${horaFormatada}.`;
}

setInterval(backgroundColor, 2000);
setInterval(horas, 1000);


/*

function carregar() {

    let data = new Date();
    let horas = data.getHours();
    let minutos = data.getMinutes();
    let segundos = data.getSeconds();
 
    horas = (horas < 10) ? '0' + horas : horas ;
    minutos = (minutos < 10) ? '0' + minutos : minutos ;
    segundos = (segundos < 10) ? '0' + segundos : segundos ;

    let horaFormatada = `${horas}:${minutos}:${segundos}`;

    let msg = document.querySelector('p#msg');
    let img = document.querySelector('img#img');

    msg.innerHTML = `Olá, agora são ${horaFormatada}.`;

    if ( horas >= 6 && horas < 12) {
        img.src = 'ft-dia.png';
        document.body.style.background = '#e0dfdc'
    } else if ( horas >= 12 && horas < 18) {
        img.src = 'ft-tarde.png';
        document.body.style.background = '#bc9c03'
    } else {
        img.src = 'ft-noite.png';
        document.body.style.background = '#090e0c'
    }

}

setInterval (carregar, 1000);

*/