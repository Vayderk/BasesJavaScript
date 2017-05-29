var itemImg = document.querySelectorAll("#seccion1 ul li img");
var lightbox = document.querySelector("#lightbox");
var cajaForm = '   <div id="form"><h1>Registro de Usuarios<span onclick="cerrar()">x</span></h1><input type="text"  placeholder="Usuario"><input type="password"  placeholder="Contraseña"><input type="email"  placeholder="Email"><button id="Enviar">Enviar</button></div>'

for(var i = 0; i < itemImg.length;i++){

itemImg[i].addEventListener("click", mostrarImagen)

}

function mostrarImagen(e){

var atributo = e.target.src;
lightbox.style.display = "block";
lightbox.innerHTML = "<img src=' "+atributo+" '><div id='cerrar' onClick='cerrar()'>X</div>";


setTimeout(function() {
   document.querySelector("#lightbox img").style.left = 0; 
   document.querySelector("#lightbox #cerrar").style.opacity = 1; 
}, 1000);


}

function cerrar(){


lightbox.style.display = "none";

}

function mostrarForm(){

lightbox.style.display = "block";
lightbox.innerHTML = cajaForm;

}