/*setInterval(funcion, tiempo);*/
var segundos = 0;

var tiempo = document.querySelector("#tiempo");

setInterval(function(){
    segundos++
    tiempo.innerHTML = segundos;
},1000);