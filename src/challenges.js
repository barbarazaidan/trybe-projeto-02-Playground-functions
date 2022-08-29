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
    return area; 
}

// Desafio 3
function splitSentence(frase) {
  // seu código aqui
  let fraseQuebrada = frase.split(' ');
  return fraseQuebrada;
}

// Desafio 4
function concatName(conjuntoStrings) {
  // seu código aqui
  let primeiro = conjuntoStrings[0];
  let ultimo = conjuntoStrings[conjuntoStrings.length - 1];
  let juncao = ultimo + ', ' + primeiro;
    return juncao;
}

// Desafio 5
function footballPoints(win, ties) {
  // seu código aqui
  let pontuacao = (win * 3) + ties;
  return pontuacao;
}

// Desafio 6
function highestCount(conjuntoValores) {
  // seu código aqui
  let quantidadeMaiorNumero = 0;
  let maiorNumero = conjuntoValores[0];
  for (let index = 0; index < conjuntoValores.length; index += 1) {
    if (maiorNumero < conjuntoValores[index]) {
      maiorNumero = conjuntoValores[index];
    }
  }
  for (let index2 = 0; index2 < conjuntoValores.length; index2 += 1) {
    if (maiorNumero === conjuntoValores[index2]) {
      quantidadeMaiorNumero += 1;
    }
  }
  return quantidadeMaiorNumero;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  let resultadoCat1 = mouse - cat1;
  let resultadoCat2 = mouse - cat2;
  if (Math.abs(resultadoCat1) < Math.abs(resultadoCat2)) {
    return 'cat1';
  } else if (Math.abs(resultadoCat2) < Math.abs(resultadoCat1)) {
    return 'cat2';
  } else {
    return 'os gatos trombam e o rato foge';
  }
}

// Desafio 8
function fizzBuzz(conjuntoNumeros) {
  // seu código aqui
  let numeroString = [];
  for (let index3 = 0; index3 < conjuntoNumeros.length; index3 += 1) {
    if (conjuntoNumeros[index3] % 3 === 0 && conjuntoNumeros[index3] % 5 === 0) {
      numeroString.push('fizzBuzz');
    } else if (conjuntoNumeros[index3] % 3 === 0 && conjuntoNumeros[index3] % 5 !== 0) {
      numeroString.push('fizz');
    } else if (conjuntoNumeros[index3] % 3 !== 0 && conjuntoNumeros[index3] % 5 === 0) {
      numeroString.push('buzz');
    } else {
      numeroString.push('bug!');
    }
}
  return numeroString;
}

// Desafio 9
function encode(texto) {
  // seu código aqui
  let mensagemCodificada = '';
  for (let cont = 0; cont < texto.length; cont += 1) {
    switch (texto[cont]) {
      case 'a':
        mensagemCodificada = mensagemCodificada + (texto[cont]).replace('a', '1');
        break;
      case 'e':
        mensagemCodificada = mensagemCodificada + (texto[cont]).replace('e', '2');
        break;
      case 'i':
        mensagemCodificada = mensagemCodificada + (texto[cont]).replace('i', '3');
        break;
      case 'o':
        mensagemCodificada = mensagemCodificada + (texto[cont]).replace('o', '4');
        break;
      case 'u':
        mensagemCodificada = mensagemCodificada + (texto[cont]).replace('u', '5');
        break;
    default:
        mensagemCodificada = mensagemCodificada + texto[cont];   
    }
  }
  return mensagemCodificada;
}


function decode(codigo) {
  // seu código aqui
  let mensagemDecodificada = '';
  for (let cont1 = 0; cont1 < codigo.length; cont1 += 1) {
    switch (codigo[cont1]) {
        case '1':
          mensagemDecodificada = mensagemDecodificada + (codigo[cont1]).replace('1', 'a');
          break;
        case '2':
          mensagemDecodificada = mensagemDecodificada + (codigo[cont1]).replace('2', 'e');
          break;
        case '3':
          mensagemDecodificada = mensagemDecodificada + (codigo[cont1]).replace('3', 'i');
          break; 
        case '4':
          mensagemDecodificada = mensagemDecodificada + (codigo[cont1]).replace('4', 'o');
          break;
        case '5':
          mensagemDecodificada = mensagemDecodificada + (codigo[cont1]).replace('5', 'u');
          break;
      default:
          mensagemDecodificada = mensagemDecodificada + codigo[cont1];   
      }
    }
    return mensagemDecodificada;
}

// Desafio 10
function techList(nomesTecnologia,pessoa) {
  // seu código aqui
  let pessoaHabilidade = [];
  let nomesTecnologiaOrdenado = [];
  function ordenacao (tecnologia) {
    for (let posterior = 1; posterior < tecnologia.length; posterior += 1) {
        for (let anterior = 0; anterior < posterior; anterior += 1) {
            if (tecnologia[posterior] < tecnologia[anterior]) {
                let posicao = tecnologia[anterior];
                tecnologia[anterior] = tecnologia [posterior];
                tecnologia[posterior] = posicao;
            }
        }
    }
    return tecnologia;
  }
  if (nomesTecnologia.length === 0) {
    return 'Vazio!';
  } else {
      nomesTecnologiaOrdenado = ordenacao (nomesTecnologia);
      for (let contador = 0; contador < nomesTecnologiaOrdenado.length; contador += 1) {
        pessoaHabilidade.push ({
          tech: nomesTecnologiaOrdenado[contador],
          name: pessoa
        });
      }
    } 
  return (pessoaHabilidade);
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