// Desafio 1
function compareTrue(valor1, valor2) {
  // seu código aqui
  if (valor1 === true && valor2 === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, altura) {
  // seu código aqui
  let area = (base * altura) / 2;
  return area 
}

// Desafio 3
function splitSentence(frase) {
  // seu código aqui

}

// Desafio 4
function concatName(conjuntoStrings) {
  // seu código aqui
  let primeiro = conjuntoStrings [0]; 
  let ultimo = conjuntoStrings [conjuntoStrings.length -1]; 
  let juncao = ultimo + ", " + primeiro; 
    return juncao
}

// Desafio 5
function footballPoints(win, ties) {
  // seu código aqui
  let pontuacao = (win *3) + ties;
  return pontuacao
}

// Desafio 6
function highestCount(conjuntoValores) {
  // seu código aqui
  let quantidadeMaiorNumero = 0;
  let maiorNumero = conjuntoValores [0];
  for (let index = 0; index < conjuntoValores.length; index += 1) {
    if (maiorNumero < conjuntoValores[index]) {
      maiorNumero = conjuntoValores[index];
    }
  }
  for (let index2 = 0; index2 < conjuntoValores.length; index2 += 1) {  
    if (maiorNumero === conjuntoValores [index2]) {
      quantidadeMaiorNumero += 1;
    }
    return quantidadeMaiorNumero;
  } 
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  let resultadoCat1 = mouse - cat1;
  let resultadoCat2 = mouse - cat2;
  if (Math.abs (resultadoCat1) < Math.abs (resultadoCat2)) {
    return "cat1";
  } else if (Math.abs (resultadoCat2) < Math.abs (resultadoCat1)) {
    return "cat2";
  } else {
    return "os gatos trombam e o rato foge"
    }
  }

// Desafio 8
function fizzBuzz(conjuntoNumeros) {
  // seu código aqui
  let numeroString = [];
  for (let index = 0; index < conjuntoNumeros.length; index += 1) {
    if (conjuntoNumeros[index] % 3 === 0 && conjuntoNumeros[index] % 5 === 0) {
      numeroString.push ("fizzBuzz");
    } else if (conjuntoNumeros[index] % 3 === 0 && conjuntoNumeros[index] % 5 !== 0) {
      numeroString.push ("fizz");
    } else if (conjuntoNumeros[index] % 3 !== 0 && conjuntoNumeros[index] % 5 === 0) {
      numeroString.push ("buzz");
    } else {
      numeroString.push ("bug!");
    }
}
  return numeroString;
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

// Desafio 10
function techList() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};