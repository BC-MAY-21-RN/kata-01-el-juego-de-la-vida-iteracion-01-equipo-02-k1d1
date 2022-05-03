
var matriz =
    [[".", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", "*", ".", ".", "."],
    [".", ".", ".", "*", "*", ".", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", "."]];

const busquedavecinos = (i, j) => new Promise((res, rej) => {
    var matriz2 = [...matriz];
    let vecinosvivos = 0;
    let vecinosmuertos = 0;

    // vecinos vivos.
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

    // vecinos muertos
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
    res({ vecinosvivos, vecinosmuertos, i, j })
})

var i = 0;
matriz.forEach((item) => {
    var j = 0;
    item.forEach((casilla) => {
        busquedavecinos(i, j).then(dato => {
            console.log(dato);
            if (dato.vecinosvivos == 3) {
                //matriz[i][j] = "*";
            }
        });
        j++;
    })
    i++;
})


//console.log(matriz2[0].toString() + "\n" + matriz2[1].toString() + "\n" + matriz2[2].toString() + "\n" + matriz2[3].toString() + "\n");
