const MDP = "BxlF0rm4t10";
let mdpUser = prompt('Encodez votre mot de passe');
let tentative = 3;

if (mdpUser === MDP) {
    alert(`Bienvenue sur le site de l'ecole`)
} else {
    if (mdpUser !== MDP) {
        for (tentative=3; tentative > 0; tentative--)
        console.log(`il vous reste ${tentative} tentatives restante(s)`)
  } if (tentative == 0) {
    alert(`accès bloqué vous n'avez plus de tentative`)

    }
}