let pretInput = prompt(`le joueur est t'il prêt ? 'Repondez par oui ou non'`);

let pret = pretInput.toLowerCase() === 'oui'; 

let pannierInput = prompt(`Le joueur a t'il encore des balles ? 'Répondez par oui ou non '`);

let pannierVide = pannierInput.toLowerCase() === 'non';

if (pret && !pannierVide) {
    alert('une balle est lancé')
} else if (!pret) {
    alert(`le joueur n'est pas prêt`)
} else if (panierVide) {
    alert(`la panier est vide`)
}





