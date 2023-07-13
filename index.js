/* 
Requisitos
//	Campos de texto (2)
//	Leer información
//	Leer números
// Ejecutar operaciones matemáticas básicas
//	Caja de opciones desplegables con las operaciones matemáticas
//	Seleccionar una opción
//	Botón de resultado (Ejecutar la operacion y dar el resultado)
//	Resultado debe mostrarse en un caja de texto
-	Estilizar esa cada de texto

Y: &&
O: ||

*/

const numero1 = document.getElementById("number1");
const numero2 = document.getElementById("number2");
const resultBtn = document.getElementById("result");
const operatorSelected = document.getElementById("operators");
const resultField = document.getElementById("resultField");

function miFuncion() {
  try {
    if (
      numero1 !== null &&
      numero2 !== null &&
      operatorSelected !== null &&
      resultField !== null
    ) {
      const num1 = Number(numero1.value);
      const num2 = Number(numero2.value);
      const operator = String(operatorSelected.value);
      let result = 0;
      switch (operator) {
        case "+":
          result = num1 + num2;
          break;
        case "-":
          result = num1 - num2;
          break;
        case "*":
          result = num1 * num2;
          break;
        case "/":
          if (num2 !== 0) {
            result = num1 / num2;
          }
          break;
        default:
          console.error("La opcion ingresada no es valida!");
          break;
      }
      resultField.textContent = result;
    }
  } catch (error) {
    console.error(error);
  }
}

if (resultBtn !== null) {
  resultBtn.addEventListener("click", () => miFuncion());
}
