var c1 = document.querySelector("#c1");
var c2 = document.querySelector("#c2");
var c3 = document.querySelector("#c3");
var posX = 0;
var posY = 0;

document.addEventListener("mousemove", moverMouse);


function moverMouse(e){

posX = e.clientX;
posY = e.clientY;

c1.style.left = 350 + posX/7 + "px";
c1.style.top =100 + posY/3 + "px";

c2.style.left = 450 + -posX/2 + "px";
c2.style.top =300 + posY/2 + "px";

c3.style.left = 750 + -posX + "px";
c3.style.top =100 + -posY/20 + "px";


}