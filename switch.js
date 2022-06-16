//Validar Casos.
/* var numero = 1;
switch (true) {
  case 1:
    console.log("Soy uno");
    break;
  case 10:
    console.log("Soy un 10");
    break;
  default:
    console.log("No soy nada");
} */

var pregunta = prompt("Ingresa tú opción: Piedra, Papel o Tijeras: ");
var opciones = ["Piedra", "Papel", "Tijeras"];
var user = pregunta.toLocaleLowerCase();
var cpu = opciones[Math.floor(Math.random * 3)];

switch (true) {
  case user === cpu:
    console.log("Empate");
    break;
  case user === "Piedra" && cpu === "Papel":
    console.log("Gana la CPU");
    break;
  case user === "Piedra" && cpu === "Tijeras":
    console.log("Gana el Usuario");
    break;
  case user === "Papel" && cpu === "Piedra":
    console.log("Gana el Usuario");
    break;
  case user === "Papel" && cpu === "Tijeras":
    console.log("Gana la CPU");
    break;
  case user === "Tijeras" && cpu === "Piedra":
    console.log("Gana la CPU");
    break;
  case user === "Tijeras" && cpu === "Papel":
    console.log("Gana el Usuario");
    break;
  default:
    console.log("Perdiste...");
}
