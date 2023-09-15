let cocaCola = 1;
let cocaStock = 5;

let eau = 2;
let eauStock = 10;

let fanta = 3;
let fantaStock = 0;

let choixBoisson = parseInt(prompt('Entrez le numéro de la boisson que vous avez choisis. Entre 1 et 3'));

if (choixBoisson == 1 && cocaStock >= 1) {
   alert('Voici un coca bien frais')
} 
   else if (cocaStock == false)
    alert('stock coca épuisé')



else if (choixBoisson == 2 && eauStock >= 1) {
    alert('Voici une eau bien fraiche')
} 

else if (eauStock == false)
    alert('stock fanta épuisé')




else if (choixBoisson == 3 && fantaStock <= 1) {
    alert('stock fanta épuisé')
}  


else if (choixBoisson !== 1 || 2 || 3) {
        alert('numéro incorrect')
    }