'use strict';

window.addEventListener('DOMContentLoaded', function () {

//document.getElementsByClassName('letras1').setAttribute('disabled', true);
    
});

// Lista de palabras que elegirá de forma aleatoria
let listaPalabras = ['coche', 'cazar', 'grupo', 'salto', 'lanza', 'cajón', 'grano', 'silla', 'tecla'];
let palabraParaAdivinar = listaPalabras[Math.floor(Math.random() * listaPalabras.length)];

// Convierte a minúsuclas para evitar errores
palabraParaAdivinar = palabraParaAdivinar.toLowerCase();

// Muestra la palabra elegida en la consola
console.log('La palabra es: ' + palabraParaAdivinar);
var backUpPalabar = palabraParaAdivinar;




function juegoAdivinanza(letra1, letra2, letra3, letra4, letra5, letra6, letra7, letra8, letra9, letra10, letra11, letra12, letra13, letra14, letra15, letra16, letra17, letra18, letra19, letra20, letra21, letra22, letra23, letra24, letra25) {

    let acertados = 0;
    let fila = document.getElementById("onclick").value;

    var letrasIntroducisdasFila1 = [letra1, letra2, letra3, letra4, letra5];
    var letrasIntroducisdasFila2 = [letra6, letra7, letra8, letra9, letra10];
    var letrasIntroducisdasFila3 = [letra11, letra12, letra13, letra14, letra15];
    var letrasIntroducisdasFila4 = [letra16, letra17, letra18, letra19, letra20];
    var letrasIntroducisdasFila5 = [letra21, letra22, letra23, letra24, letra25];

    var letras = document.querySelectorAll('.letras' + document.getElementById("onclick").value);
    console.log(letras);
    var resultadoPalabraAdivinar = null;

    if (fila == 0) {

        for (let z = 0; z < letrasIntroducisdasFila1.length; z++) {
            if (letrasIntroducisdasFila1[z] == palabraParaAdivinar.charAt(z)) {
                document.getElementById(letras[z].id).style.backgroundColor = "lightgreen";
                resultadoPalabraAdivinar = palabraParaAdivinar.replace(letrasIntroducisdasFila1[z], '0');
                palabraParaAdivinar = resultadoPalabraAdivinar;
                letrasIntroducisdasFila1[z] = '1';
                acertados = acertados + 1;
            }
        }

        // console.log('Lista FINAL de letras introducidas: ' + letrasIntroducisdasFila1);
        // console.log('Resultado FINAL de la palabraParaAdivinar: ' + palabraParaAdivinar);

        for (let z = 0; z < letrasIntroducisdasFila1.length; z++) {
            for (let i = 0; i < letrasIntroducisdasFila1.length; i++) {
                if (letrasIntroducisdasFila1[z] != '1' && palabraParaAdivinar.charAt(i) != '0') {
                    if (letrasIntroducisdasFila1[z] == palabraParaAdivinar.charAt(i)) {
                        document.getElementById(letras[z].id).style.backgroundColor = "orange";
                        break;
                    } else {
                        document.getElementById(letras[z].id).style.backgroundColor = "grey";
                    }
                }
            }
        }


    } else if (fila == 1) {

        palabraParaAdivinar = backUpPalabar;

        for (let z = 0; z < letrasIntroducisdasFila2.length; z++) {
            if (letrasIntroducisdasFila2[z] == palabraParaAdivinar.charAt(z)) {
                document.getElementById(letras[z].id).style.backgroundColor = "lightgreen";
                resultadoPalabraAdivinar = palabraParaAdivinar.replace(letrasIntroducisdasFila2[z], '0');
                palabraParaAdivinar = resultadoPalabraAdivinar;
                letrasIntroducisdasFila2[z] = '1';
                acertados = acertados + 1;
            }
        }

        // console.log('Lista FINAL de letras introducidas: ' + letrasIntroducisdasFila1);
        // console.log('Resultado FINAL de la palabraParaAdivinar: ' + palabraParaAdivinar);

        for (let z = 0; z < letrasIntroducisdasFila2.length; z++) {
            for (let i = 0; i < letrasIntroducisdasFila2.length; i++) {
                if (letrasIntroducisdasFila2[z] != '1' && palabraParaAdivinar.charAt(i) != '0') {
                    if (letrasIntroducisdasFila2[z] == palabraParaAdivinar.charAt(i)) {
                        document.getElementById(letras[z].id).style.backgroundColor = "orange";
                        break;
                    } else {
                        document.getElementById(letras[z].id).style.backgroundColor = "grey";
                    }
                }
            }
        }

    } else if (fila == 2) {

        palabraParaAdivinar = backUpPalabar;

        for (let z = 0; z < letrasIntroducisdasFila3.length; z++) {
            if (letrasIntroducisdasFila3[z] == palabraParaAdivinar.charAt(z)) {
                document.getElementById(letras[z].id).style.backgroundColor = "lightgreen";
                resultadoPalabraAdivinar = palabraParaAdivinar.replace(letrasIntroducisdasFila3[z], '0');
                palabraParaAdivinar = resultadoPalabraAdivinar;
                letrasIntroducisdasFila3[z] = '1';
                acertados = acertados + 1;
            }
        }

        // console.log('Lista FINAL de letras introducidas: ' + letrasIntroducisdasFila1);
        // console.log('Resultado FINAL de la palabraParaAdivinar: ' + palabraParaAdivinar);

        for (let z = 0; z < letrasIntroducisdasFila3.length; z++) {
            for (let i = 0; i < letrasIntroducisdasFila3.length; i++) {
                if (letrasIntroducisdasFila3[z] != '1' && palabraParaAdivinar.charAt(i) != '0') {
                    if (letrasIntroducisdasFila3[z] == palabraParaAdivinar.charAt(i)) {
                        document.getElementById(letras[z].id).style.backgroundColor = "orange";
                        break;
                    } else {
                        document.getElementById(letras[z].id).style.backgroundColor = "grey";
                    }
                }
            }
        }

    } else if (fila == 3) {

        palabraParaAdivinar = backUpPalabar;

        for (let z = 0; z < letrasIntroducisdasFila4.length; z++) {
            if (letrasIntroducisdasFila4[z] == palabraParaAdivinar.charAt(z)) {
                document.getElementById(letras[z].id).style.backgroundColor = "lightgreen";
                resultadoPalabraAdivinar = palabraParaAdivinar.replace(letrasIntroducisdasFila4[z], '0');
                palabraParaAdivinar = resultadoPalabraAdivinar;
                letrasIntroducisdasFila4[z] = '1';
                acertados = acertados + 1;
            }
        }

        // console.log('Lista FINAL de letras introducidas: ' + letrasIntroducisdasFila1);
        // console.log('Resultado FINAL de la palabraParaAdivinar: ' + palabraParaAdivinar);

        for (let z = 0; z < letrasIntroducisdasFila4.length; z++) {
            for (let i = 0; i < letrasIntroducisdasFila4.length; i++) {
                if (letrasIntroducisdasFila4[z] != '1' && palabraParaAdivinar.charAt(i) != '0') {
                    if (letrasIntroducisdasFila4[z] == palabraParaAdivinar.charAt(i)) {
                        document.getElementById(letras[z].id).style.backgroundColor = "orange";
                        break;
                    } else {
                        document.getElementById(letras[z].id).style.backgroundColor = "grey";
                    }
                }
            }
        }

    } else if (fila == 4) {

        palabraParaAdivinar = backUpPalabar;

        for (let z = 0; z < letrasIntroducisdasFila5.length; z++) {
            if (letrasIntroducisdasFila5[z] == palabraParaAdivinar.charAt(z)) {
                document.getElementById(letras[z].id).style.backgroundColor = "lightgreen";
                resultadoPalabraAdivinar = palabraParaAdivinar.replace(letrasIntroducisdasFila5[z], '0');
                palabraParaAdivinar = resultadoPalabraAdivinar;
                letrasIntroducisdasFila5[z] = '1';
                acertados = acertados + 1;
            }
        }

        // console.log('Lista FINAL de letras introducidas: ' + letrasIntroducisdasFila1);
        // console.log('Resultado FINAL de la palabraParaAdivinar: ' + palabraParaAdivinar);

        for (let z = 0; z < letrasIntroducisdasFila5.length; z++) {
            for (let i = 0; i < letrasIntroducisdasFila5.length; i++) {
                if (letrasIntroducisdasFila5[z] != '1' && palabraParaAdivinar.charAt(i) != '0') {
                    if (letrasIntroducisdasFila5[z] == palabraParaAdivinar.charAt(i)) {
                        document.getElementById(letras[z].id).style.backgroundColor = "orange";
                        break;
                    } else {
                        document.getElementById(letras[z].id).style.backgroundColor = "grey";
                    }
                }
            }
        }

    }

    let contador = parseInt(fila);
    contador = contador + 1;

    document.getElementById("onclick").setAttribute("value", contador)



    if (acertados == 5) {
        todoAcertado = true;
        alert('¡Enhorabuena, has acertado la palabra!');
    } else if (contador == 5) {
        todoAcertado = false;
        alert("Otra vez será...");
    }
}