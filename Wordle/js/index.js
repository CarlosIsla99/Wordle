'use strict';
window.addEventListener('DOMContentLoaded', function () {

    // Inutiliza todas las las filas excepto la primera
    for (let i = 6; i <= 25; i++) {
        document.getElementById('inLetra' + i).setAttribute('disabled', true);
    }

});

let palabraParaAdivinar;
let backUpPalabar;
let result;

// Cargar la lista de palabras
fetch("./lista/lista.txt").then((response) => {
    return response.text();
}).then((text) => {
    result = text.trim().split(/\s+/); // Escribe la lista con comas,etc. para leerlo mejor
    palabraParaAdivinar = result[Math.floor(Math.random() * result.length)]; // Elige aleatpriamente una palabra de la lista
    palabraParaAdivinar = palabraParaAdivinar.toLocaleLowerCase(); // Pasa a minúscul la palabra elegida
    console.log('La palabra es: ' + palabraParaAdivinar);
    backUpPalabar = palabraParaAdivinar; // Un backUp de la palabra por adivinar
});

// recive las 25 letras del usuario
function juegoAdivinanza(letra1, letra2, letra3, letra4, letra5, letra6, letra7, letra8, letra9, letra10, letra11, letra12, letra13, letra14, letra15, letra16, letra17, letra18, letra19, letra20, letra21, letra22, letra23, letra24, letra25) {

    let acertados = 0; // Contador de letras acertadas por fila
    let fila = document.getElementById("onclick").value; // Diferenciador de filas
    let contador = parseInt(fila); // Contador para moverse entre filas

    // Letras introducidas por el usuario ordenadas en arrays (1 array por fila)
    var letrasIntroducisdasFila1 = [letra1, letra2, letra3, letra4, letra5];
    var letrasIntroducisdasFila2 = [letra6, letra7, letra8, letra9, letra10];
    var letrasIntroducisdasFila3 = [letra11, letra12, letra13, letra14, letra15];
    var letrasIntroducisdasFila4 = [letra16, letra17, letra18, letra19, letra20];
    var letrasIntroducisdasFila5 = [letra21, letra22, letra23, letra24, letra25];

    // Pasa a minúsuclas todas las letras introducidas para evitar errores
    // entre las letras que introduzca el usuario y la palabra elegida
    letrasIntroducisdasFila1 = letrasIntroducisdasFila1.map(element => {
        return element.toLowerCase();
    });
    letrasIntroducisdasFila2 = letrasIntroducisdasFila2.map(element => {
        return element.toLowerCase();
    });
    letrasIntroducisdasFila3 = letrasIntroducisdasFila3.map(element => {
        return element.toLowerCase();
    });
    letrasIntroducisdasFila4 = letrasIntroducisdasFila4.map(element => {
        return element.toLowerCase();
    });
    letrasIntroducisdasFila5 = letrasIntroducisdasFila5.map(element => {
        return element.toLowerCase();
    });

    // Referencia a cada fila por cada onclick
    var letras = document.querySelectorAll('.letras' + document.getElementById("onclick").value);
    var resultadoPalabraAdivinar = null; // Contenedor de la palabra por adivinar para pruebas
    var camposVacios = false; // Para saber si ha rellenado todos los campos

    // Comprueba que la palabra introducida por el usuario exista
    let existe = false;
    let palabraComp = null;

    // Forma la palabra que introduce el usuario según en que fila está escribiendo
    if (fila == 0) {
        palabraComp = letrasIntroducisdasFila1[0] + letrasIntroducisdasFila1[1] + letrasIntroducisdasFila1[2] + letrasIntroducisdasFila1[3] + letrasIntroducisdasFila1[4];
    } else if (fila == 1) {
        palabraComp = letrasIntroducisdasFila2[0] + letrasIntroducisdasFila2[1] + letrasIntroducisdasFila2[2] + letrasIntroducisdasFila2[3] + letrasIntroducisdasFila2[4];
    } else if (fila == 2) {
        palabraComp = letrasIntroducisdasFila3[0] + letrasIntroducisdasFila3[1] + letrasIntroducisdasFila3[2] + letrasIntroducisdasFila3[3] + letrasIntroducisdasFila3[4];
    } else if (fila == 3) {
        palabraComp = letrasIntroducisdasFila4[0] + letrasIntroducisdasFila4[1] + letrasIntroducisdasFila4[2] + letrasIntroducisdasFila4[3] + letrasIntroducisdasFila4[4];
    } else if (fila == 4) {
        palabraComp = letrasIntroducisdasFila5[0] + letrasIntroducisdasFila5[1] + letrasIntroducisdasFila5[2] + letrasIntroducisdasFila5[3] + letrasIntroducisdasFila5[4];
    }

    // Comprueba si todos los campos están rellenos
    for (let y = 0; y < letrasIntroducisdasFila1.length; y++) {
        if (letrasIntroducisdasFila1[y] != '') {
            camposVacios = false;
        } else {
            camposVacios = true;
            alert('Rellena todos los campos');
            return;
        }
    }

    // Comprueba si la palabra formada anteriormente existe
    for (let z = 0; z < result.length; z++) {
        if (result[z].toLowerCase() == palabraComp) {
            existe = true;
            break;
        }
    }

    // Alert si la palabra introducida no existe y detiene el programa
    if (existe == false) {
        alert('¡Esa palabra no existe! Escribe otra');
        return;
    }

    // Primera fila de carácteres
    if (fila == 0) {

        // Pone en verde los carácteres acertados
        for (let z = 0; z < letrasIntroducisdasFila1.length; z++) {
            if (letrasIntroducisdasFila1[z] == palabraParaAdivinar.charAt(z)) {
                document.getElementById(letras[z].id).style.backgroundColor = "lightgreen";
                resultadoPalabraAdivinar = palabraParaAdivinar.replace(letrasIntroducisdasFila1[z], '0');
                palabraParaAdivinar = resultadoPalabraAdivinar;
                letrasIntroducisdasFila1[z] = '1';
                acertados = acertados + 1;
            }
        }

        // Pone en naranja los carácteres acertados en el sitio que no correspone
        // y pone en gris los carácteres inexistentes
        for (let z = 0; z < letrasIntroducisdasFila1.length; z++) {
            for (let i = 0; i < letrasIntroducisdasFila1.length; i++) {
                if (letrasIntroducisdasFila1[z] != '1' && (palabraParaAdivinar.charAt(i) != '0' && palabraParaAdivinar.charAt(i) != '2')) {
                    if (letrasIntroducisdasFila1[z] == palabraParaAdivinar.charAt(i)) {
                        palabraParaAdivinar = palabraParaAdivinar.replace(letrasIntroducisdasFila1[z], '2');
                        document.getElementById(letras[z].id).style.backgroundColor = "orange";
                        break;
                    } else {
                        document.getElementById(letras[z].id).style.backgroundColor = "grey";
                    }
                }
            }
        }

        // Se repite el mimsmo proceso anterior
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

        for (let z = 0; z < letrasIntroducisdasFila2.length; z++) {
            for (let i = 0; i < letrasIntroducisdasFila2.length; i++) {
                if (letrasIntroducisdasFila2[z] != '1' && palabraParaAdivinar.charAt(i) != '0' && palabraParaAdivinar.charAt(i) != '2') {
                    if (letrasIntroducisdasFila2[z] == palabraParaAdivinar.charAt(i)) {
                        palabraParaAdivinar = palabraParaAdivinar.replace(letrasIntroducisdasFila2[z], '2');
                        document.getElementById(letras[z].id).style.backgroundColor = "orange";
                        break;
                    } else {
                        document.getElementById(letras[z].id).style.backgroundColor = "grey";
                    }
                }
            }
        }

        // Se repite el mimsmo proceso anterior
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

        for (let z = 0; z < letrasIntroducisdasFila3.length; z++) {
            for (let i = 0; i < letrasIntroducisdasFila3.length; i++) {
                if (letrasIntroducisdasFila3[z] != '1' && palabraParaAdivinar.charAt(i) != '0' && palabraParaAdivinar.charAt(i) != '2') {
                    if (letrasIntroducisdasFila3[z] == palabraParaAdivinar.charAt(i)) {
                        palabraParaAdivinar = palabraParaAdivinar.replace(letrasIntroducisdasFila2[z], '2');
                        document.getElementById(letras[z].id).style.backgroundColor = "orange";
                        break;
                    } else {
                        document.getElementById(letras[z].id).style.backgroundColor = "grey";
                    }
                }
            }
        }

        // Se repite el mimsmo proceso anterior
    } else if (fila == 3) {

        palabraParaAdivinar = backUpPalabar;

        for (let z = 0; z < letrasIntroducisdasFila4.length; z++) {
            if (letrasIntroducisdasFila4[z] == palabraParaAdivinar.charAt(z)) {
                document.getElementById(letras[z].id).style.backgroundColor = "lightgreen";
                resultadoPalabraAdivinar = palabraParaAdivinar.replace(letrasIntroducisdasFila4[z], '0' && palabraParaAdivinar.charAt(i) != '2');
                palabraParaAdivinar = resultadoPalabraAdivinar;
                letrasIntroducisdasFila4[z] = '1';
                acertados = acertados + 1;
            }
        }

        for (let z = 0; z < letrasIntroducisdasFila4.length; z++) {
            for (let i = 0; i < letrasIntroducisdasFila4.length; i++) {
                if (letrasIntroducisdasFila4[z] != '1' && palabraParaAdivinar.charAt(i) != '0') {
                    if (letrasIntroducisdasFila4[z] == palabraParaAdivinar.charAt(i)) {
                        palabraParaAdivinar = palabraParaAdivinar.replace(letrasIntroducisdasFila2[z], '2');
                        document.getElementById(letras[z].id).style.backgroundColor = "orange";
                        break;
                    } else {
                        document.getElementById(letras[z].id).style.backgroundColor = "grey";
                    }
                }
            }
        }

        // Se repite el mimsmo proceso anterior
    } else if (fila == 4) {

        palabraParaAdivinar = backUpPalabar;

        for (let z = 0; z < letrasIntroducisdasFila5.length; z++) {
            if (letrasIntroducisdasFila5[z] == palabraParaAdivinar.charAt(z)) {
                document.getElementById(letras[z].id).style.backgroundColor = "lightgreen";
                resultadoPalabraAdivinar = palabraParaAdivinar.replace(letrasIntroducisdasFila5[z], '0' && palabraParaAdivinar.charAt(i) != '2');
                palabraParaAdivinar = resultadoPalabraAdivinar;
                letrasIntroducisdasFila5[z] = '1';
                acertados = acertados + 1;
            }
        }

        for (let z = 0; z < letrasIntroducisdasFila5.length; z++) {
            for (let i = 0; i < letrasIntroducisdasFila5.length; i++) {
                if (letrasIntroducisdasFila5[z] != '1' && palabraParaAdivinar.charAt(i) != '0') {
                    if (letrasIntroducisdasFila5[z] == palabraParaAdivinar.charAt(i)) {
                        palabraParaAdivinar = palabraParaAdivinar.replace(letrasIntroducisdasFila2[z], '2');
                        document.getElementById(letras[z].id).style.backgroundColor = "orange";
                        break;
                    } else {
                        document.getElementById(letras[z].id).style.backgroundColor = "grey";
                    }
                }
            }
        }

    }

    // En caso de acertar todos los carácteres salta un alert con 
    // un mensaje de 'enhorabuena' y recarga la página
    if (acertados == 5) {
        alert('¡Enhorabuena, has acertado la palabra!');
        location.reload();
        // En caso contrario salta otro mostrando cual era la palabra a adivinar y recarga la página
    } else if (contador == 4) {
        alert("Otra vez será... La palabra era: " + backUpPalabar.toUpperCase());
        location.reload();
    }

    // En caso de no haber vacíos
    if (camposVacios == false) {

        // Suma contador para pasar a la siguiente fila
        contador = contador + 1;
        document.getElementById("onclick").setAttribute("value", contador);

        // Si está en la segunda línea
        if (contador == 1) {
            // Establece readonly en la primera fila
            for (let i = 1; i <= 5; i++) {
                document.getElementById('inLetra' + i).setAttribute('readonly', '');
            }
            // Quita disabled a la segunda fila
            for (let i = 6; i <= 10; i++) {
                document.getElementById('inLetra' + i).removeAttribute('disabled', '');
            }
            // Si está en la tercera línea
        } else if (contador == 2) {
            // Establece readonly a las dos primeras filas
            for (let i = 1; i <= 10; i++) {
                document.getElementById('inLetra' + i).setAttribute('readonly', '');
            }
            // Quita disabled a la tercera fila
            for (let i = 11; i <= 15; i++) {
                document.getElementById('inLetra' + i).removeAttribute('disabled', '');
            }
            // Si está en la cuarta línea
        } else if (contador == 3) {
            // Establece readonly a las tres primeras filas
            for (let i = 1; i <= 15; i++) {
                document.getElementById('inLetra' + i).setAttribute('readonly', '');
            }
            // Quita disabled a la cuarta fila
            for (let i = 16; i <= 20; i++) {
                document.getElementById('inLetra' + i).removeAttribute('disabled', '');
            }
            // Si está en la quinta línea
        } else if (contador == 4) {
            // Establece readonly a las cuatro primeras filas
            for (let i = 1; i <= 20; i++) {
                document.getElementById('inLetra' + i).setAttribute('readonly', '');
            }
            // Quita disabled a la quinta fila
            for (let i = 21; i <= 25; i++) {
                document.getElementById('inLetra' + i).removeAttribute('disabled', '');
            }
        }
    }
}