var op1 = "Piedra";
var op2 = "Papel";
var op3 = "Tijera";

var resultado = function (user, cpu) {
  if (user != cpu) {
    if (user === op1 && cpu === op2) {
      console.log("Gana la CPU");
    } else if (user === op1 && cpu === op3) {
      console.log("Gana el Jugador");
    } else if (user === op2 && cpu === op1) {
      console.log("Gana el Jugador");
    } else if (user === op2 && cpu === op3) {
      console.log("Gana la CPU");
    } else if (user === op3 && cpu === op1) {
      console.log("Gana la CPU");
    } else if (user === op3 && cpu === op2) {
      console.log("Gana el Jugador");
    }
  } else {
    console.log("Empate");
  }
};
resultado(op3, op3);
