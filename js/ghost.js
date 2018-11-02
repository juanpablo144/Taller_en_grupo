//Obtenemos el fantasma
var fantasma = document.getElementById("fantasma");

//Eventos
document.addEventListener("mousemove", obtenerPosicion);
document.addEventListener("mouseover", displayMouse);

function displayMouse(){
 setTimeout(function(){
     document.getElementById("fantasma").style.display ='none';
 },1000)
}

var posicion = {x:0, y:0};

//Funcion que ejecuta instantaneamente el metodo de seguir Fantasma
setInterval(seguirFantasma, 50);

var mouse = {x:0, y:0}; //mouse.x, mouse.y
var dir = "right";


function obtenerPosicion(e){
document.getElementById("fantasma").style.display ='block';
mouse.x = e.pageX;
mouse.y = e.pageY;
}

function seguirFantasma(){

// Encontramos la distancia
var distX = mouse.x - posicion.x;
var distY = mouse.y - posicion.y;

//Progressive reduction of distance
posicion.x += distX /2;
posicion.y += distY /2;

//Definimos la posicion
fantasma.style.left = posicion.x + "px";
fantasma.style.top = posicion.y + "px";

}