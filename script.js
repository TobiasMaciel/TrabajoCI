function sum(a, b) {
  console.log(a)
  if (!isNaN(a) && !isNaN(b)) {
    return a + b;
  } else {
    return "Se deben ingresar números.";
  }
}

function calculateSum() {
  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);
  const result = sum(num1, num2);
  document.getElementById("result").innerText = "Resultado: " + result;
}

module.exports = sum;
