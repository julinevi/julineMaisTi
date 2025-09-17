let ano
let mes

function obterDias (mes, ano){
    if (mes <1 || mes>12 || ano <1){
        return 0;
    }
    if (mes < 8){
        if(mes==2){
            if(ehBissexto(ano)==true){
                return 29;
            } else{
                return 28;
            }
        }
        if (mes % 2 == 0 ) {
            return 30;
        } else{
            return 31;
        }
    }
    
    if (mes >= 8){
        if (mes % 2 == 0)
        return 31;
    }
}

function ehBissexto (ano){
    return (ano % 4 == 0 && ano % 100 != 0) || ano % 400 == 0
}

// retrorna true se for bissexto
// retorna false se nao for bissexto

console.log (ehBissexto (2024)); 
console.log (ehBissexto (2023)); 
console.log (obterDias (1));