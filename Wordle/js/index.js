

// Lista de palabras que elegirá de forma aleatoria
let listaPalabras = ['coche', 'cazar', 'grupo', 'salto', 'lanza', 'cajón', 'grano', 'silla', 'tecla'];
let palabraParaAdivinar = listaPalabras[Math.floor(Math.random() * listaPalabras.length)];

// Convierte a minúsuclas para evitar errores
palabraParaAdivinar = palabraParaAdivinar.toLowerCase();

// Muestra la palabra elegida en la consola
console.log('La palabra es: ' + palabraParaAdivinar);

function juegoAdivinanza(letra1, letra2, letra3, letra4, letra5, letra6, letra7, letra8, letra9, letra10, letra11, letra12, letra13, letra14, letra15, letra16, letra17, letra18, letra19, letra20, letra21, letra22, letra23, letra24, letra25) {

    let acertados = 0;
    let todoAcertado = false;
    let fila = document.getElementById("onclick").value;

    var letrasIntroducisdasFila1 = [letra1, letra2, letra3, letra4, letra5];
    var letrasIntroducisdasFila2 = [letra6, letra7, letra8, letra9, letra10];
    var letrasIntroducisdasFila3 = [letra11, letra12, letra13, letra14, letra15];
    var letrasIntroducisdasFila4 = [letra16, letra17, letra18, letra19, letra20];
    var letrasIntroducisdasFila5 = [letra21, letra22, letra23, letra24, letra25];

    var letras = document.querySelectorAll('.letras' + document.getElementById("onclick").value);

    if (fila == 0) {

        for (let z = 0; z < letrasIntroducisdasFila1.length; z++) {
            if (letrasIntroducisdasFila1[z] == palabraParaAdivinar.charAt(z)) {
                document.getElementById(letras[z].id).style.backgroundColor = "lightgreen";
                acertados = acertados + 1;
            } else if (letrasIntroducisdasFila1[z] != palabraParaAdivinar.charAt(z)) {
                for (let i = 0; i < letrasIntroducisdasFila1.length; i++) {
                    if (letrasIntroducisdasFila1[z] == palabraParaAdivinar.charAt(i)) {
                        document.getElementById(letras[z].id).style.backgroundColor = "orange";
                        break;
                    } else {
                        document.getElementById(letras[z].id).style.backgroundColor = "lightgrey";
                    }
                }
            }
        }

    } else if (fila == 1) {
        for (let z = 0; z < letrasIntroducisdasFila2.length; z++) {
            if (letrasIntroducisdasFila2[z] == palabraParaAdivinar.charAt(z)) {
                document.getElementById(letras[z].id).style.backgroundColor = "lightgreen";
                acertados = acertados + 1;
            } else if (letrasIntroducisdasFila2[z] != palabraParaAdivinar.charAt(z)) {
                for (let i = 0; i < letrasIntroducisdasFila2.length; i++) {
                    if (letrasIntroducisdasFila2[z] == palabraParaAdivinar.charAt(i)) {
                        document.getElementById(letras[z].id).style.backgroundColor = "orange";
                        break;
                    } else {
                        document.getElementById(letras[z].id).style.backgroundColor = "lightgrey";
                    }
                }
            }
        }

    } else if (fila == 2) {

        for (let z = 0; z < letrasIntroducisdasFila3.length; z++) {
            if (letrasIntroducisdasFila3[z] == palabraParaAdivinar.charAt(z)) {
                document.getElementById(letras[z].id).style.backgroundColor = "lightgreen";
                acertados = acertados + 1;
            } else if (letrasIntroducisdasFila3[z] != palabraParaAdivinar.charAt(z)) {
                for (let i = 0; i < letrasIntroducisdasFila3.length; i++) {
                    if (letrasIntroducisdasFila3[z] == palabraParaAdivinar.charAt(i)) {
                        document.getElementById(letras[z].id).style.backgroundColor = "orange";
                        break;
                    } else {
                        document.getElementById(letras[z].id).style.backgroundColor = "lightgrey";
                    }
                }
            }
        }

    } else if (fila == 3) {

        for (let z = 0; z < letrasIntroducisdasFila4.length; z++) {
            if (letrasIntroducisdasFila4[z] == palabraParaAdivinar.charAt(z)) {
                document.getElementById(letras[z].id).style.backgroundColor = "lightgreen";
                acertados = acertados + 1;
            } else if (letrasIntroducisdasFila4[z] != palabraParaAdivinar.charAt(z)) {
                for (let i = 0; i < letrasIntroducisdasFila4.length; i++) {
                    if (letrasIntroducisdasFila4[z] == palabraParaAdivinar.charAt(i)) {
                        document.getElementById(letras[z].id).style.backgroundColor = "orange";
                        break;
                    } else {
                        document.getElementById(letras[z].id).style.backgroundColor = "lightgrey";
                    }
                }
            }
        }

    } else if (fila == 4) {

        for (let z = 0; z < letrasIntroducisdasFila5.length; z++) {
            if (letrasIntroducisdasFila5[z] == palabraParaAdivinar.charAt(z)) {
                document.getElementById(letras[z].id).style.backgroundColor = "lightgreen";
                acertados = acertados + 1;
            } else if (letrasIntroducisdasFila5[z] != palabraParaAdivinar.charAt(z)) {
                for (let i = 0; i < letrasIntroducisdasFila5.length; i++) {
                    if (letrasIntroducisdasFila5[z] == palabraParaAdivinar.charAt(i)) {
                        document.getElementById(letras[z].id).style.backgroundColor = "orange";
                        break;
                    } else {
                        document.getElementById(letras[z].id).style.backgroundColor = "lightgrey";
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
    } else {
        todoAcertado = false;
    }
}