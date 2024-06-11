function sum(a, b) {
  if (!isNaN(a) && !isNaN(b)) {
    return a + b;
  } else {
    return "Se deben ingresar números.";
  }
}

if (typeof module !== "undefined" && module.exports) {
  module.exports = sum;
}

if (typeof window !== "undefined") {
  window.sum = sum;
}
