
////Validar Usuario


var validarUsuario = false;


function focusUsuario() {

    document.querySelector("#nombre").style.background = "rgba(255,255,0,1)"
    document.querySelector("label#labelUsuario").innerHTML = 'Ingrese su Usuario:<p style = "color:blue">Escriba su usuario con minimo 2 caracteres, maximo 6 caracteres</p>';


}

function blurUsuario() {

    document.querySelector("#nombre").style.background = "rgba(255,255,255,1)"

    if (validarUsuario == false) {
        document.querySelector("label#labelUsuario").innerHTML = 'Ingrese su Usuario:';

    }

}

function changeUsuario() {

    var usuario = document.querySelector("#nombre").value;

    if (usuario != "") {

        if (usuario.length < 2 || usuario.length > 6) {
            document.querySelector("label#labelUsuario").innerHTML = 'Ingrese su Usuario:<p style = "color:red">Usuario mal escrito.Escriba su usuario con minimo 2 caracteres, maximo 6 caracteres</p>';

            validarUsuario = true;
        } else {

            document.querySelector("label#labelUsuario").innerHTML = 'Ingrese su Usuario:';

        }

    }

}


///Validar password



var validarPassword = false;




function focusPassword() {

    document.querySelector("#password").style.background = "rgba(255,255,0,1)"
    document.querySelector("label#labelPassword").innerHTML = 'Ingrese su Contraseña:<p style = "color:blue">Escriba su contraseña que contenga Mayusculas, minusculas y numeros.</p>';


}

function blurPassword() {

    document.querySelector("#password").style.background = "rgba(255,255,255,1)"

    if (validarUsuario == false) {
        document.querySelector("label#labelPassword").innerHTML = 'Ingrese su Contraseña:';

    }

}

function changePassword() {

    var password = document.querySelector("#password").value;

    if (password != "") {

        var expresion = /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/;

        if (!expresion.test(password)) {

            document.querySelector("label#labelPassword").innerHTML = 'Ingrese su Contraseña:<p style = "color:red">Contraseña mal escrito.Escriba su contraseña que contenga Mayusculas, minusculas y numeros, minimo 8 caracteres.</p>';

            validarPassword = true;
        } else {

            document.querySelector("label#labelPassword").innerHTML = 'Ingrese su Contraseña:';

        }

    }

}


//VALIDAD formulario

function validarFormulario() {


///validar usuario
    var usuario = document.querySelector("#nombre").value;

    if (usuario != "") {

        if (usuario.length < 2 || usuario.length > 6) {
            document.querySelector("label#labelEnviar").innerHTML = 'Ingrese su Usuario:<p style = "color:red">Usuario mal escrito.Escriba su usuario con minimo 2 caracteres, maximo 6 caracteres</p>';

           return false;

        }
    }

//validad contraseña
      var password = document.querySelector("#password").value;

    if (password != "") {

        var expresion = /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/;

        if (!expresion.test(password)) {

            document.querySelector("label#labelEnviar").innerHTML = 'Ingrese su Contraseña:<p style = "color:red">Contraseña mal escrito.Escriba su contraseña que contenga Mayusculas, minusculas y numeros, minimo 8 caracteres.</p>';

            return false;
        }
 
 var seleccion =  document.querySelector("#color").value;

  if(seleccion == "Seleccione"){

    
            document.querySelector("label#labelEnviar").innerHTML = '<p style = "color:red"> Por favor seleccione un color</p>';

            return false;
  }

var terminos = document.querySelector("#terminos").checked;

if(!terminos){

  document.querySelector("label#labelEnviar").innerHTML = '<p style = "color:red"> Por favor acepte los terminos</p>';

            return false;

}

 return true;
    
   
}

}