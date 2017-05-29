var botones = document.querySelectorAll("#slide ol li");
var imagenes = document.querySelectorAll("#slide ul li");
var numero = 0;
var formatearIntervalo = false;



//Array...  var nombre = [ "li", "li"] 
// nombre[0,1]

for(var i  = 0;i<botones.length;i++){


botones[i].addEventListener("click",paginacion);
}


///Paginacion
function paginacion(e){

for(var i  = 0;i<botones.length;i++){
botones[i].style.opacity =".6";
e.target.style.opacity = "1";
imagenes[i].style.opacity = "0";
imagenes[e.target.innerHTML-1].style.opacity = "1";
numero = e.target.innerHTML -1;
formatearIntervalo = true;

}

}

///Pasar Pagina

function avanzar(){

if(numero >= botones.length -1){

    numero = 0;
}else{

numero++;


}

for(var i  = 0;i<botones.length;i++){
botones[i].style.opacity =".6";
botones[numero].style.opacity = "1";
imagenes[i].style.opacity = "0";
imagenes[numero].style.opacity = "1";

}


}


///pAGINA Atras

function retroceder(){

if(numero <= 0){

    numero = botones.length -1;;
}else{

numero--;


}

for(var i  = 0;i<botones.length;i++){
botones[i].style.opacity =".6";
botones[numero].style.opacity = "1";
imagenes[i].style.opacity = "0";
imagenes[numero].style.opacity = "1";

}


}


///Paginacion automatica

setInterval(function(){
    
    if(formatearIntervalo == false){
    
    avanzar();

}else{

    formatearIntervalo = false;
}



}, 3000);