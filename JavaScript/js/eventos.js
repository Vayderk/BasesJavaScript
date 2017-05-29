var boton = document.querySelector("#boton");
var caja2 = document.querySelector("#caja2");

boton.addEventListener("click",moverCaja);

function moverCaja(){

caja2.style.left = 0;

}

function cambiarColor(){

caja2.style.background = "red";

}