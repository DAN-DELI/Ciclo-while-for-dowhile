console.log("===TABLA DE MULTIPLICAR===");
//Ingresa un numero y muestra su tabla de multiplicar del 1 al 10
let entrada = parseInt(prompt("Ingrese el numero a evaluar:"));

//Ciclo for
for (let i=1; i <=10; i++) {
  console.log(`${entrada} x ${i} = ${entrada * i}`);
}

console.log("===TABLA DE MULTIPLICAR QUE SOLO MUESTRA LOS NÚMEROS PARES===");
let entrada2 = parseInt(prompt("Ingrese el numero para mostrar solo los pares:"));
if (!isNaN(entrada2)) {

  for (let i = 0; i < 11; i++) {
    let resultado = entrada2 * i;

    if (resultado % 2 === 0) {
      console.log(`${entrada2} x ${i} = ${resultado}`);
    }
  }

} else {
  console.log("Ingrese un valor válido");
}
