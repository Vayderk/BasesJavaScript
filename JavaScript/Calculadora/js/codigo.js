var resultados = document.querySelector("#operaciones");
var numero = 0;
var signos = "";
var cantidadSignos = 0;



///Calculadora con teclado

document.addEventListener("keydown", oprimirTecla)

function oprimirTecla(e) {

    console.log(e.keyCode);

    ////TECLA 1

    if (e.keyCode == 49 || e.keyCode == 97) {

        cantidadSignos = 0;

        if (resultados.innerHTML == "0") {
            resultados.innerHTML = 1;
        } else {

            resultados.innerHTML += 1;
        }
    }
    ////Fin TECLA 1


    ////TECLA 2

    if (e.keyCode == 50 || e.keyCode == 98) {

        cantidadSignos = 0;

        if (resultados.innerHTML == "0") {
            resultados.innerHTML = 2;
        } else {

            resultados.innerHTML += 2;
        }
    }
    ////Fin TECLA 2


    ////TECLA 3

    if (e.keyCode == 51 || e.keyCode == 99) {
        cantidadSignos = 0;

        if (resultados.innerHTML == "0") {
            resultados.innerHTML = 3;
        } else {

            resultados.innerHTML += 3;
        }
    }
    ////Fin TECLA 3


    ////TECLA 4

    if (e.keyCode == 52 || e.keyCode == 100) {

        cantidadSignos = 0;

        if (resultados.innerHTML == "0") {
            resultados.innerHTML = 4;
        } else {

            resultados.innerHTML += 4;
        }
    }
    ////Fin TECLA 4


    ////TECLA 5

    if (e.keyCode == 53 || e.keyCode == 101) {

        cantidadSignos = 0;

        if (resultados.innerHTML == "0") {
            resultados.innerHTML = 5;
        } else {

            resultados.innerHTML += 5;
        }
    }
    ////Fin TECLA 5


    ////TECLA 6

    if (e.keyCode == 54 || e.keyCode == 102) {

        cantidadSignos = 0;

        if (resultados.innerHTML == "0") {
            resultados.innerHTML = 6;
        } else {

            resultados.innerHTML += 6;
        }
    }
    ////Fin TECLA 6


    ////TECLA 7

    if (e.keyCode == 55 || e.keyCode == 103) {

        cantidadSignos = 0;

        if (resultados.innerHTML == "0") {
            resultados.innerHTML = 7;
        } else {

            resultados.innerHTML += 7;
        }
    }
    ////Fin TECLA 7


    ////TECLA 8

    if (e.keyCode == 56 || e.keyCode == 104) {

        cantidadSignos = 0;

        if (resultados.innerHTML == "0") {
            resultados.innerHTML = 8;
        } else {

            resultados.innerHTML += 8;
        }
    }
    ////Fin TECLA 8


    ////TECLA 9

    if (e.keyCode == 57 || e.keyCode == 105) {

        cantidadSignos = 0;

        if (resultados.innerHTML == "0") {
            resultados.innerHTML = 9;
        } else {

            resultados.innerHTML += 9;
        }
    }
    ////Fin TECLA 9


    ////TECLA 0

    if (e.keyCode == 48 || e.keyCode == 96) {

        cantidadSignos = 0;

        if (resultados.innerHTML == "0") {
            resultados.innerHTML = 0;
        } else {

            resultados.innerHTML += 0;
        }
    }
    ////Fin TECLA 0


    ////Tecla SUMA

    if (e.keyCode == 187 || e.keyCode == 107) {

        cantidadSignos++;

        if (cantidadSignos == 1) {

            if (resultados.innerHTML == 0) {

                resultados.innerHTML = 0;
            } else {

                resultados.innerHTML += "+";

            }

        }
    }
        ////Fin TECLA SUMA

        ////Tecla Resta

        if (e.keyCode == 189 || e.keyCode == 109) {

            cantidadSignos++;

            if (cantidadSignos == 1) {

                if (resultados.innerHTML == 0) {

                    resultados.innerHTML = 0;
                } else {

                    resultados.innerHTML += "-";

                }

            }
        }
            ////Fin TECLA RESTA


            ////Tecla Multiplicar

            if (e.keyCode == 88 || e.keyCode == 106) {

                cantidadSignos++;

                if (cantidadSignos == 1) {

                    if (resultados.innerHTML == 0) {

                        resultados.innerHTML = 0;
                    } else {

                        resultados.innerHTML += "*";

                    }

                }
            }
                ////Fin TECLA SUMA


                ////Tecla DIVIDIR

                if (e.keyCode == 191 || e.keyCode == 111) {

                    cantidadSignos++;

                    if (cantidadSignos == 1) {

                        if (resultados.innerHTML == 0) {

                            resultados.innerHTML = 0;
                        } else {

                            resultados.innerHTML += "/";

                        }

                    }
                }
                    ////Fin TECLA DIVIDIR

                      ////Tecla Decimal

                if (e.keyCode == 190 || e.keyCode == 110) {

                            resultados.innerHTML += ".";

                }
                    ////Fin TECLA DECIMAL

                           ////Tecla BORRAR

                if (e.keyCode == 8  || e.keyCode == 46) {

                            resultados.innerHTML += 0;

                }
                    ////Fin TECLA BORRAR

                     ////Tecla Resultado

                if (e.keyCode == 13) {

                           resultados.innerHTML = eval(resultados.innerHTML);

                }
                    ////Fin TECLA Resultado





                
            }


            //////////

            //Agregar numeros
            function operaciones(e) {
                cantidadSignos = 0;

                numero = e.innerHTML;

                if (resultados.innerHTML == "0") {
                    resultados.innerHTML = numero;
                } else {

                    resultados.innerHTML += numero;
                }

            }
            ////


            //Agregar digitos

            function digitos(e) {

                cantidadSignos++;

                signos = e.innerHTML;
                if (cantidadSignos == 1) {
                    if (resultados.innerHTML == 0) {

                        resultados.innerHTML = 0;
                    } else {

                        resultados.innerHTML += signos;

                    }

                }
            }

            ///////


            //Borrar calculadora
            function borrar() {

                resultados.innerHTML = 0;

            }

            //////

            //Resultado

            function resultado() {

                resultados.innerHTML = eval(resultados.innerHTML);

            }

            /////

            ///Decimales

            function decimales() {

                resultados.innerHTML += ".";

            }