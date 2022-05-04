// matriz inicial.
var matriz =
    [[".", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", "*", ".", ".", "."],
    [".", ".", ".", "*", "*", ".", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", "."]];

// primer matriz impresa en consola.
console.log(matriz[0].toString().replaceAll(","," ")+"\n"+matriz[1].toString().replaceAll(","," ")+"\n"+matriz[2].toString().replaceAll(","," ")+"\n"+matriz[3].toString().replaceAll(","," ")+"\n");

// Promesa para buscar los vecinos de cada casilla.
const busquedavecinos = (i, j) => new Promise((res, rej) => {
    var matriz2 = [...matriz];
    let vecinosvivos = 0;
    let vecinosmuertos = 0;

    // Validaciones para contar vecinos vivos.
    if (i === 0) {
        if (j === 0) {
            if (matriz2[i][j + 1] == "*") {
                vecinosvivos++;
            }
            if (matriz2[i + 1][j] == "*") {
                vecinosvivos++;
            }
            if (matriz2[i + 1][j + 1] == "*") {
                vecinosvivos++;
            }
        } else {
            if (j == matriz2[i].length - 1) {
                if (matriz2[i][j - 1] == "*") {
                    vecinosvivos++;
                }
                if (matriz2[i + 1][j - 1] == "*") {
                    vecinosvivos++;
                }
                if (matriz2[i + 1][j] == "*") {
                    vecinosvivos++;
                }
            } else {
                if (matriz2[i][j - 1] == "*") {
                    vecinosvivos++;
                }
                if (matriz2[i][j + 1] == "*") {
                    vecinosvivos++;
                }
                if (matriz2[i + 1][j - 1] == "*") {
                    vecinosvivos++;
                }
                if (matriz2[i + 1][j] == "*") {
                    vecinosvivos++;
                }
                if (matriz2[i + 1][j + 1] == "*") {
                    vecinosvivos++;
                }
            }
        }
    } else {
        if (i == matriz2.length - 1) {
            if (j == 0) {
                if (matriz2[i][j + 1] == "*") {
                    vecinosvivos++;
                }
                if (matriz2[i - 1][j] == "*") {
                    vecinosvivos++;
                }
                if (matriz2[i - 1][j + 1] == "*") {
                    vecinosvivos++;
                }
            } else {
                if (j == matriz2[i].length - 1) {
                    if (matriz2[i][j - 1] == "*") {
                        vecinosvivos++;
                    }
                    if (matriz2[i - 1][j] == "*") {
                        vecinosvivos++;
                    }
                    if (matriz2[i - 1][j - 1] == "*") {
                        vecinosvivos++;
                    }
                } else {
                    if (matriz2[i][j - 1] == "*") {
                        vecinosvivos++;
                    }
                    if (matriz2[i][j + 1] == "*") {
                        vecinosvivos++;
                    }
                    if (matriz2[i - 1][j - 1] == "*") {
                        vecinosvivos++;
                    }
                    if (matriz2[i - 1][j] == "*") {
                        vecinosvivos++;
                    }
                    if (matriz2[i - 1][j + 1] == "*") {
                        vecinosvivos++;
                    }
                }
            }

        } else {
            if (j === 0) {
                if (matriz2[i - 1][j] == "*") {
                    vecinosvivos++;
                }
                if (matriz2[i - 1][j + 1] == "*") {
                    vecinosvivos++;
                }
                if (matriz2[i][j + 1] == "*") {
                    vecinosvivos++;
                }
                if (matriz2[i + 1][j] == "*") {
                    vecinosvivos++;
                }
                if (matriz2[i + 1][j + 1] == "*") {
                    vecinosvivos++;
                }
            } else {
                if (matriz2[i - 1][j - 1] == "*") {
                    vecinosvivos++;
                }
                if (matriz2[i - 1][j] == "*") {
                    vecinosvivos++;
                }
                if (matriz2[i - 1][j + 1] == "*") {
                    vecinosvivos++;
                }
                if (matriz2[i][j - 1] == "*") {
                    vecinosvivos++;
                }
                if (matriz2[i][j + 1] == "*") {
                    vecinosvivos++;
                }
                if (matriz2[i + 1][j - 1] == "*") {
                    vecinosvivos++;
                }
                if (matriz2[i + 1][j] == "*") {
                    vecinosvivos++;
                }
                if (matriz2[i + 1][j + 1] == "*") {
                    vecinosvivos++;
                }
            }
        }
    }

    // Validaciones para contar vecinos muertos.
    if (i === 0) {
        if (j === 0) {
            if (matriz2[i][j + 1] == ".") {
                vecinosmuertos++;
            }
            if (matriz2[i + 1][j] == ".") {
                vecinosmuertos++;
            }
            if (matriz2[i + 1][j + 1] == ".") {
                vecinosmuertos++;
            }
        } else {
            if (j == matriz2[i].length - 1) {
                if (matriz2[i][j - 1] == ".") {
                    vecinosmuertos++;
                }
                if (matriz2[i + 1][j - 1] == ".") {
                    vecinosmuertos++;
                }
                if (matriz2[i + 1][j] == ".") {
                    vecinosmuertos++;
                }
            } else {
                if (matriz2[i][j - 1] == ".") {
                    vecinosmuertos++;
                }
                if (matriz2[i][j + 1] == ".") {
                    vecinosmuertos++;
                }
                if (matriz2[i + 1][j - 1] == ".") {
                    vecinosmuertos++;
                }
                if (matriz2[i + 1][j] == ".") {
                    vecinosmuertos++;
                }
                if (matriz2[i + 1][j + 1] == ".") {
                    vecinosmuertos++;
                }
            }
        }
    } else {
        if (i == matriz2.length - 1) {
            if (j == 0) {
                if (matriz2[i][j + 1] == ".") {
                    vecinosmuertos++;
                }
                if (matriz2[i - 1][j] == ".") {
                    vecinosmuertos++;
                }
                if (matriz2[i - 1][j + 1] == ".") {
                    vecinosmuertos++;
                }
            } else {
                if (j == matriz2[i].length - 1) {
                    if (matriz2[i][j - 1] == ".") {
                        vecinosmuertos++;
                    }
                    if (matriz2[i - 1][j] == ".") {
                        vecinosmuertos++;
                    }
                    if (matriz2[i - 1][j - 1] == ".") {
                        vecinosmuertos++;
                    }
                } else {
                    if (matriz2[i][j - 1] == ".") {
                        vecinosmuertos++;
                    }
                    if (matriz2[i][j + 1] == ".") {
                        vecinosmuertos++;
                    }
                    if (matriz2[i - 1][j - 1] == ".") {
                        vecinosmuertos++;
                    }
                    if (matriz2[i - 1][j] == ".") {
                        vecinosmuertos++;
                    }
                    if (matriz2[i - 1][j + 1] == ".") {
                        vecinosmuertos++;
                    }
                }
            }

        } else {
            if (j === 0) {
                if (matriz2[i - 1][j] == ".") {
                    vecinosmuertos++;
                }
                if (matriz2[i - 1][j + 1] == ".") {
                    vecinosmuertos++;
                }
                if (matriz2[i][j + 1] == ".") {
                    vecinosmuertos++;
                }
                if (matriz2[i + 1][j] == ".") {
                    vecinosmuertos++;
                }
                if (matriz2[i + 1][j + 1] == ".") {
                    vecinosmuertos++;
                }
            } else {
                if (matriz2[i - 1][j - 1] == ".") {
                    vecinosmuertos++;
                }
                if (matriz2[i - 1][j] == ".") {
                    vecinosmuertos++;
                }
                if (matriz2[i - 1][j + 1] == ".") {
                    vecinosmuertos++;
                }
                if (matriz2[i][j - 1] == ".") {
                    vecinosmuertos++;
                }
                if (matriz2[i][j + 1] == ".") {
                    vecinosmuertos++;
                }
                if (matriz2[i + 1][j - 1] == ".") {
                    vecinosmuertos++;
                }
                if (matriz2[i + 1][j] == ".") {
                    vecinosmuertos++;
                }
                if (matriz2[i + 1][j + 1] == ".") {
                    vecinosmuertos++;
                }
            }
        }
    }

    // respuesta de promesa con un json.
    res({ vecinosvivos, vecinosmuertos, i, j, status: matriz2[i][j] });
})

// Promesa para un ciclo de vida.
var ciclodevida = () => new Promise((res, rej) => {
    matriz.forEach(async (item, indexi) => {
        item.forEach(async (casilla, indexj) => {
            const x = indexi;
            const y = indexj;
            let dato = await busquedavecinos(x, y);
            if (dato.vecinosvivos == 3 && dato.status == ".") {
                matriz[x][y] = "*";
            }
            if (dato.vecinosvivos < 2  && dato.status == "*") {
                matriz[x][y] = ".";
            }
            if (dato.vecinosvivos > 3  && dato.status == "*") {
                matriz[x][y] = ".";
            }
            if (dato.vecinosvivos == 3 || dato.vecinosvivos == 2  && dato.status == "*") {
                matriz[x][y] = "*";
            }
            // respuesta de la matriz nueva.
            res(matriz)
        })
    })
})

// Ejecuta promesa del primer ciclo de vida.
ciclodevida().then(dato=>{
    console.log(dato[0].toString().replaceAll(","," ")+"\n"+dato[1].toString().replaceAll(","," ")+"\n"+dato[2].toString().replaceAll(","," ")+"\n"+dato[3].toString().replaceAll(","," ")+"\n");
})

// Ejecuta promesa del segundo ciclo de vida.
ciclodevida().then(dato=>{
    console.log(dato[0].toString().replaceAll(","," ")+"\n"+dato[1].toString().replaceAll(","," ")+"\n"+dato[2].toString().replaceAll(","," ")+"\n"+dato[3].toString().replaceAll(","," ")+"\n");
})

