// pegando os id's do arquivo index.html e utilziando no .js
const turnOn = document.getElementById('turnOn');
const turnOff = document.getElementById('turnOff');
const lamp = document.getElementById('lamp');

// função que verifica se a lampada foi quebrada ou nao 
function isBroken(){
    return lamp.src.indexOf ( 'quebrada' ) > -1;
}
// função que verifica se a lampada está acessa e não esta quebrada
function lampOn() {
    if( !isBroken ()){
        lamp.src = './img/ligada.jpg';
    }
}
// função que verifica se a lampada está apagada e não esta quebrada
function lampOff() {
    if(!isBroken() ){
        lamp.src = './img/desligada.jpg';
    }
}
// função que verfica se a lampada foi quebrada
function brokelamp(){
    lamp.src = './img/quebrada.jpg'
}

turnOn.addEventListener('click', lampOn );
turnOff.addEventListener('click', lampOff);
lamp.addEventListener('mouseover', lampOn);
lamp.addEventListener('mouseleave', lampOff);
lamp.addEventListener('dblclick', brokelamp);




