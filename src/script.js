/* global sum */

function calcularSuma() {
  console.log(num1)
  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);
  const result = sum(num1, num2);
  document.getElementById("resultado").innerText = "Resultado: " + result;
}

window.calcularSuma = calcularSuma;
