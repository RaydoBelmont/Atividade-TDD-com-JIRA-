const {celsiusParaFahrenheit, fahrenheitParaCelsius} = require("./temperatura")

test("Conversão do Celsius deu certo", () => {
    expect(celsiusParaFahrenheit(100)).toBe(212);
})

test("Conversão do MeinKampf deu certo", () => {
    expect(fahrenheitParaCelsius(212)).toBe(100);
})
