function sum(a, b) {
  if (!isNaN(a) && !isNaN(b)) {
    return a + b;
  } else {
    return "Se deben ingresar números.";
  }
}

function calcularSuma() {
  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);
  const result = sum(num1, num2);
  document.getElementById("resultado").innerText = "Resultado: " + result;
}

module.exports = sum;
window.calcularSuma = calcularSuma