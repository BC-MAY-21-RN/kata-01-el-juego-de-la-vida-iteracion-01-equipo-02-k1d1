function randomNumero(min, max) {
    return Math.random() * (max - min) + min;
}

function stringMatriz(array, fila) {
    if (fila == array.length) return "\n";
    return array[fila].toString().replaceAll(",", " ") + "\n" + stringMatriz(array, fila + 1);
}

function vecinos(array, i, j) {
    let vecinosvivos = 0;
    let vecinosmuertos = 0;
    if (i - 1 === -1) {
        if (array[i][j - 1] == "*") {
            vecinosvivos++;
        } else array[i][j - 1] == "." ? vecinosmuertos++ : null;
        if (array[i][j + 1] == "*") {
            vecinosvivos++;
        } else array[i][j + 1] == "." ? vecinosmuertos++ : null;
        if (array[i + 1][j - 1] == "*") {
            vecinosvivos++;
        } else array[i + 1][j - 1] == "." ? vecinosmuertos++ : null;
        if (array[i + 1][j] == "*") {
            vecinosvivos++;
        } else array[i + 1][j] == "." ? vecinosmuertos++ : null;
        if (array[i + 1][j + 1] == "*") {
            vecinosvivos++;
        } else array[i + 1][j + 1] == "." ? vecinosmuertos++ : null;
    } else if (i + 1 === array.length) {
        if (array[i][j - 1] == "*") {
            vecinosvivos++;
        } else array[i][j - 1] == "." ? vecinosmuertos++ : null;
        if (array[i][j + 1] == "*") {
            vecinosvivos++;
        } else array[i][j + 1] == "." ? vecinosmuertos++ : null;
        if (array[i - 1][j - 1] == "*") {
            vecinosvivos++;
        } else array[i - 1][j - 1] == "." ? vecinosmuertos++ : null;
        if (array[i - 1][j] == "*") {
            vecinosvivos++;
        } else array[i - 1][j] == "." ? vecinosmuertos++ : null;
        if (array[i - 1][j + 1] == "*") {
            vecinosvivos++;
        } else array[i - 1][j + 1] == "." ? vecinosmuertos++ : null;
    } else {
        if (matriz2[i - 1][j - 1] == "*") {
            vecinosvivos++;
        } else matriz2[i - 1][j - 1] == "." ? vecinosmuertos++ : null;
        if (matriz2[i - 1][j] == "*") {
            vecinosvivos++;
        } else matriz2[i - 1][j] == "." ? vecinosmuertos++ : null;
        if (matriz2[i - 1][j + 1] == "*") {
            vecinosvivos++;
        } else matriz2[i - 1][j + 1] == "." ? vecinosmuertos++ : null;
        if (matriz2[i][j - 1] == "*") {
            vecinosvivos++;
        } else matriz2[i][j - 1] == "." ? vecinosmuertos++ : null;
        if (matriz2[i][j + 1] == "*") {
            vecinosvivos++;
        } else matriz2[i][j + 1] == "." ? vecinosmuertos++ : null;
        if (matriz2[i + 1][j - 1] == "*") {
            vecinosvivos++;
        } else matriz2[i + 1][j - 1] == "." ? vecinosmuertos++ : null;
        if (matriz2[i + 1][j] == "*") {
            vecinosvivos++;
        } else matriz2[i + 1][j] == "." ? vecinosmuertos++ : null;
        if (matriz2[i + 1][j + 1] == "*") {
            vecinosvivos++;
        } else matriz2[i + 1][j + 1] == "." ? vecinosmuertos++ : null;
    }
    return { vecinosvivos, vecinosmuertos, i, j, caracter: array[i][j] }
}

function newMatriz(array) {
    array.forEach(async (fila, indexi) => {
        fila.forEach(async (casilla, indexj) => {
            let dato = vecinos(array, indexi, indexj);
            const x = indexi;
            const y = indexj;
            if (dato.vecinosvivos == 3 && dato.caracter == ".") {
                array[x][y] = "*";
            }
            if (dato.vecinosvivos < 2 && dato.caracter == "*") {
                array[x][y] = ".";
            }
            if (dato.vecinosvivos > 3 && dato.caracter == "*") {
                array[x][y] = ".";
            }
            if (dato.vecinosvivos == 3 || dato.vecinosvivos == 2 && dato.caracter == "*") {
                array[x][y] = "*";
            }
        })
    })
    return array;
}

// Constantes iniciales.
const x = 15;
const y = 15;
const cadena = "*....*...........*..***.";

// generar matriz.
let matriz = new Array(x).fill(".").map(item => (new Array(y).fill(".")));
let matriz2 = [...matriz];

// Rellenar matriz.
matriz.forEach(async (fila, indexi) => {
    fila.forEach(async (casilla, indexj) => {
        matriz2[indexi][indexj] = cadena.charAt(randomNumero(0, cadena.length - 1));
    })
})

console.log(stringMatriz(matriz2, 0));

setInterval(() => {
    console.log(stringMatriz(newMatriz(matriz2), 0));
}, 2000);