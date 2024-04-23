const {soma, subtrair, multiplicar, dividir} = require("./calculadora")

test("A soma esta correta", () => {
    expect(soma(1,2)).toBe(3);
})

test("A subtração esta correta", () =>{
    expect(subtrair(2,1)).toBe(1)
})

test("A multiplicação esta correta", () =>{
    expect(multiplicar(2,1)).toBe(2)
})

test("A divisão esta correta", () =>{
    expect(dividir(10,2)).toBe(5)
})