const verificaPalindromo = require("./verificaPalindromo")

test("É um palindromo", () => {
    expect(verificaPalindromo("ovo")).toBe(true);
})