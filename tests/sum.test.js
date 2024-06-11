const sum = require("../src/FuncSum");

test("Suma de numeros positivos 1 + 2 = 3", () => {
  expect(sum(1, 2)).toBe(3);
});

test("Suma de numeros negativos -1 + -2 = -3", () => {
  expect(sum(-1, -2)).toBe(-3);
});

test("Suma de numero negativo y positivo -1 + 2 = 1", () => {
  expect(sum(-1, 2)).toBe(1);
});

test("Suma de un solo numero", () => {
  expect(sum(1)).toBe("Se deben ingresar números.");
});
