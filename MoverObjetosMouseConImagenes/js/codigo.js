var c1 = document.querySelector("#c1");
var c2 = document.querySelector("#c2");
var c3 = document.querySelector("#c3");
var posX = 0;
var posY = 0;

document.addEventListener("mousemove", moverMouse);


function moverMouse(e){

posX = -e.clientX;
posY = -e.clientY;

c1.style.backgroundPosition = posX/60 + "px " + posY/20 + "px";
c2.style.backgroundPosition = posX/60 + "px " + posY/50 + "px";
c3.style.backgroundPosition = posX/100 + "px " + 0 + "px";





}