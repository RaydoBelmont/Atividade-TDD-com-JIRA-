function soma(numero1, numero2) {
    const result = numero1 + numero2;
    return result;
  }

function subtrair(num1, num2){
    const result = num1-num2;
    return result;
}

function multiplicar(num, multiplicador){
    const result = multiplicador*num;
    return result
}

function dividir(num, divisor){
    const result = num / divisor;
    return result
}

module.exports={soma,subtrair,multiplicar,dividir};