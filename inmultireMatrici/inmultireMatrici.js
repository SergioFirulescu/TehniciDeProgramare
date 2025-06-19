function inmultireMatrici(matrice1, matrice2) {
    if (!Array.isArray(matrice1) || !Array.isArray(matrice2) || 
        matrice1.length === 0 || matrice2.length === 0) {
        console.error("Invalid input: Both inputs must be non-empty arrays");
        return null;
    }

    let matriceRezultat = [];
    
    for (let i = 0; i < matrice1.length; i++) {
        matriceRezultat[i] = [];
        for (let j = 0; j < 2; j++) { 
            let sum = 0;
            for (let k = 0; k < matrice1[i].length; k++) {
                const colValue = matrice2[k][j];
                sum += matrice1[i][k] * colValue;
            }
            matriceRezultat[i][j] = sum;
        }
    }
    
    return matriceRezultat;
} 