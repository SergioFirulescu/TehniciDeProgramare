function sumaMatrici(matrice1, matrice2) {          
    if (!Array.isArray(matrice1) || !Array.isArray(matrice2) || 
        matrice1.length === 0 || matrice2.length === 0 ||
        matrice1.length !== matrice2.length) {
        console.error("Invalid input: Both inputs must be non-empty arrays of the same size");
        return null;
    }

    let matriceRezultat = [];
    
    for (let i = 0; i < matrice1.length; i++) {
        if (!Array.isArray(matrice1[i]) || !Array.isArray(matrice2[i]) ||
            matrice1[i].length !== matrice2[i].length) {
            console.error("Invalid input: Matrices must have consistent dimensions");
            return null;
        }
        
        matriceRezultat[i] = [];
        for (let j = 0; j < matrice1[i].length; j++) {
            matriceRezultat[i][j] = Number(matrice1[i][j]) + Number(matrice2[i][j]);
        }
    }
    
    return matriceRezultat;
}