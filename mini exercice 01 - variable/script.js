let message = "Bonjour tu fais encore jeune";
let fullname = "Billy Tab";
let yearsOld = 27;

let final = `Bonjour ${fullname} tu fais encore jeune avec tes ${yearsOld}`;

console.log(final)

// OU 

console.log(message , fullname + " avec tes " + yearsOld)

alert(`la variable message est de type ${typeof message}`);


let input = parseInt(prompt('Veuillez indiquer votre année de naissance :'));

let age = 2023 - input;

if (age >= 18) {
    let nation = prompt("Veuillez indiquer d'où vous venez");
    if (nation.toLowerCase() == "belge") {
        alert('Bienvenue sur le site de la loterie');
    } else if (nation.toLowerCase() == 'suisse') { 
        alert('Bienvenue sur le site de la loterie');
    } else if (nation.toLowerCase() == 'allemand') {
        alert('Guten Tag');
    } else if (nation.toLowerCase() == 'français') {
        alert('Bienvenue sur le site de la loterie cocorico');
    } else {
        alert('Vous n\'êtes pas dans le bon pays');
    }
} else {
    alert(`Dommage, revenez dans ${18 - age} an(s) !`); 
}

alert('Merci');

