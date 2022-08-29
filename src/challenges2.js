// Desafio 11
function generatePhoneNumber(numeros) {
  // seu código aqui
  function verificandoTamanho(array) {
    if (array.length !== 11) {
      return false;
  } else {
      return true;
    }
  }
  function verificandoNumeros(array2) { 
    for (let contador = 0; contador < array2.length; contador += 1) {
      let numerosIguais = 1;
      if (array2[contador] < 0 || array2[contador] > 9) {
        return false;
      } else if (array2[contador] >= 0 || array2[contador] < 9) {
        for (let contador2 = contador + 1; contador2 < array2.length; contador2 += 1) {
          if (array2[contador] === array2[contador2]) {
            numerosIguais += 1;
          }
        }
        if (numerosIguais >= 3) {
          return false;
        }
      } else {
        return true;
      }
    }
  }
  let isTamanhoIncompatível;
  let isNumerosIncompativeis;
  let telefone = '(xx) xxxxx-xxxx';
  isTamanhoIncompatível = verificandoTamanho(numeros);
  isNumerosIncompativeis = verificandoNumeros(numeros);
  if (isTamanhoIncompatível === false) {
    return 'Array com tamanho incorreto.';
  } else if (isNumerosIncompativeis === false) {
    return 'não é possível gerar um número de telefone com esses valores';
  } {
    for (let index = 0; index < numeros.length; index += 1) {
      telefone = telefone.replace('x', numeros[index]);
    }
    return telefone;
  }
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  // seu código aqui
  let trianguloLados = (lineA < lineB + lineC && lineB < lineA + lineC && lineC < lineA + lineB);
  let trianguloModulo = (lineA > Math.abs(lineB - lineC) && lineB > Math.abs(lineA - lineC) && lineC > Math.abs(lineA - lineB));
  if (trianguloLados === false) {
    return false;
  } else if (trianguloModulo === false) {
    return false;
 } return true; 
}

// Desafio 13
function hydrate(stringBebidas) {
  // seu código aqui
  let numeros;
  let soma = 0;
  let novoArray = [];
  numeros = stringBebidas.match(/\d+/g);
  for (let i = 0; i < numeros.length; i += 1) {
   novoArray.push(parseInt(numeros[i]));
		}
		for (let indice = 0; indice < novoArray.length; indice += 1) {
			soma += novoArray[indice];
		}
		if (soma > 1) {
			return soma + ' copos de água';
		} return soma + ' copo de água';
}

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
