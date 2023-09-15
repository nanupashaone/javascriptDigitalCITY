let annee = parseInt(prompt(`Entrez une année sous forme YYYY`));

if (isNaN(annee)) {
  alert("Nombre mal entré. Veuillez recommencer.");
} else if ((annee % 4 === 0 && annee % 100 !== 0) || annee % 400 === 0) {
  alert("L'année est bissextile.");
} else {
  alert("L'année n'est pas bissextile.");
}
