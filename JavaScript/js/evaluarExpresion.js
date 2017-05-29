/*switch(expresion){

case valor1:
    //Accion a ejecutar
    break;

    case valor2:
        //Accion a ejecutar
        break;

}*/

var logo = document.querySelector("#logo");

var expresion = 0;

expresion = Math.round(Math.random());

console.log(expresion);

switch(expresion){

    case 0:
    logo.style.background = "green";
    break;
    case 1:
    logo.style.background = "yellow";
    break;
}