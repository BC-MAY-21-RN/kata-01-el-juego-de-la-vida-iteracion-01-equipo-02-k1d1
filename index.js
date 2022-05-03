
var matriz =
    [[".", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", "*", ".", ".", "."],
    [".", ".", ".", "*", "*", ".", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", "."]];

const buscarCelulaMuertaTresVecinos = async () => {

    var matriz2 = [...matriz];

    for (i = 0; i < matriz2.length; i++) {
        for (j = 0; j < matriz2.length; j++) {

            let vecinosvivos = 0;
            let vecinosmuertos = 0;

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
                if (j === 0) {
                    if (i === matriz.length - 1) {
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
                    }
                } else {
                    if (i === matriz.length - 1) {
                        if (matriz2[i][j - 1] == "*") {
                            vecinosvivos++;
                        }
                        if (matriz2[i - 1][j - 1] == "*") {
                            vecinosvivos++;
                        }
                        if (matriz2[i - 1][j] == "*") {
                            vecinosvivos++;
                        }
                    } else {
                        if (i === matriz2 - 1) {
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
                        else {

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
            }
            if(vecinosvivos>2){
                matriz2[i][j]="*"; 
            }
        }
    }
}

buscarCelulaMuertaTresVecinos();
console.log(matriz2[0].toString() + "\n" + matriz2[1].toString() + "\n" + matriz2[2].toString() + "\n" + matriz2[3].toString() + "\n");