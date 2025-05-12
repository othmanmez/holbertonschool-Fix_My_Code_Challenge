#!/usr/bin/node
/*
    Imprimer un carré avec le caractère #
    
    La taille du carré doit être le premier argument 
    du programme.
*/

if (process.argv.length <= 2) {
    process.stderr.write("Argument manquant\n");
    process.stderr.write("Usage : ./1-print_square.js <taille>\n");
    process.stderr.write("Exemple : ./1-print_square.js 8\n");
    process.exit(1);
}

let taille = parseInt(process.argv[2], 10);  // Force la base 10

// Vérification si la taille est un entier positif valide
if (isNaN(taille) || taille <= 0) {
    process.stderr.write("La taille doit être un entier positif\n");
    process.exit(1);
}

for (let i = 0; i < taille; i++) {
    let ligne = '';
    for (let j = 0; j < taille; j++) {
        ligne += '#'; // Ajoute un caractère # à la ligne
    }
    console.log(ligne); // Affiche la ligne complète
}

