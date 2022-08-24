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
  let area = (base * altura) / 2
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
  let ultimo = conjuntoStrings [conjuntoStrings.length -1] 
  let juncao = ultimo + ", " + primeiro 
    return juncao
}

// Desafio 5
function footballPoints(win, ties) {
  // seu código aqui
  let pontuacao = (win *3) + ties
  return pontuacao
}

// Desafio 6
function highestCount() {
  // seu código aqui
}

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
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