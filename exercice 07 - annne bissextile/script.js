let annee = parseInt(prompt("entrée l'année actuel"));



if ((annee % 4 === 0 && annee % 100 !==0) || annee % 400 === 0) {
    alert(`c'est bien une annnée bissextile`)
} else {
    alert(`error 404`)
}