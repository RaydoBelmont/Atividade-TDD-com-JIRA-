function verificaPalindromo(str) {
    const textoFormatado = str.toLowerCase().replace(/\s/g, '');
    
    // Compare a string original com sua inversa
    return textoFormatado === textoFormatado.split('').reverse().join('');
  }

  module.exports = verificaPalindromo;