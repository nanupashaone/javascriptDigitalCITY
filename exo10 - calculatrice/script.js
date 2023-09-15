let nombre1 = parseInt(prompt("choissisez un nombre"));

let operateur = prompt(`choissis ton opérateur (+, -, /, *)`);

let nombre2 = parseInt(prompt("choisis ton nombre"));

let resultat;

switch (operateur) {
  case "+":
    resultat = nombre1 + nombre2;
    break;

  case "-":
    resultat = nombre1 - nombre2;
    break;

  case "*":
    resultat = nombre1 * nombre2;
    break;

  case "/":
    if (nombre1 && nombre2 !== 0) {
      resultat = nombre1 / nombre2;
    } else {
      alert("division par 0 impossible");
    } break;
  default:
    alert("opération impossible");
    break;
}
