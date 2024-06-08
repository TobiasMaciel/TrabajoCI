const sum = require("../script");

test("Suma de 1 + 2 = 3", () => {
  expect(sum(1, 2)).toBe(3);
});
