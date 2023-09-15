let pretInput = prompt(`le joueur est t'il prêt ? 'Repondez par oui ou non'`);

let pret = pretInput.toLowerCase() === "oui";

if (pret) {
  alert("une balle est lancé");
} else if (!pret) {
  alert(`le joueur n'est pas prêt`);
}

let stockBalles = 10; 

while (stockBalles > 0) {
    console.log("Le joueur est prêt.");
    console.log("Lancement de la balle...");
    console.log(`-1 balle en stock. Attention stock restant : ${stockBalles} balle(s)`);
    stockBalles--; 

    
    if (stockBalles > 0) {
        console.log("Attente que le joueur soit prêt pour la prochaine balle...");
    } else  {
        (stockBalles <= 10)
        stockBalles++;
        console.log("stock rechargé")
    
    }
}

console.log("Toutes les balles ont été lancées.");

