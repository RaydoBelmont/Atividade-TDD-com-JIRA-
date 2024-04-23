// Função para converter Celsius para Fahrenheit
function celsiusParaFahrenheit(celsius) {
    // Fórmula: (0°C × 9/5) + 32 = 32°F
    return (celsius * 9/5) + 32;
  }
  
  // Função para converter Fahrenheit para Celsius
  function fahrenheitParaCelsius(fahrenheit) {
    // Fórmula: (32°F − 32) × 5/9 = 0°C
    return (fahrenheit - 32) * 5/9;
  }

  module.exports = {celsiusParaFahrenheit, fahrenheitParaCelsius};