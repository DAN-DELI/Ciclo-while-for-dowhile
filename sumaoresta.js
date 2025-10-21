console.log("=== SUMA O RESTA EL NÚMERO ACTUAL CON EL ANTERIOR (INICIANDO EN 0) ===");

let anterior = 0;

while (true) {
  let entradaNumero = prompt("Ingrese un número (o escriba 'salir' para terminar)");

  if (entradaNumero === "salir") {
    console.log("Saliendo del programa...");
    break;
  }

  let numero = parseInt(entradaNumero);

  if (isNaN(numero)) {
    console.log("⚠️ Por favor ingrese un número válido.");
    continue;
  }

  let operacion = prompt("Escriba 'a' para sumar o 'b' para restar");

  if (operacion === "a") {
    let resultado = sumar(anterior, numero);
    console.log(`${anterior} + ${numero} = ${resultado}`);
    anterior = resultado; // el número actual se vuelve el anterior
  } else if (operacion === "b") {
    let resultado = restar(anterior, numero);
    console.log(`${anterior} - ${numero} = ${resultado}`);
    anterior = resultado;
  } else {
    console.log("⚠️ Opción no válida. Intente de nuevo.");
  }
}

function sumar(anterior, nuevo) {
  return anterior + nuevo;
}

function restar(anterior, nuevo) {
  return anterior - nuevo;
}
