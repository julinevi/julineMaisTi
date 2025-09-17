// fabio resultado

function bissexto(an){
    return ((an % 4 == 0 && an % 100 != 0) || an % 400 == 0)
}

function dias (an, mes){
    if (mes <1 || mes>12 || ano <1){
        return 0;
    }

    if (mes==1 || mes==3 || mes==5 || mes==7 || mes==8 || mes==10 || mes==12  ){
        return 31;
    }
    if (mes==2){
        if (bissexto(an) == true) {
            return 29;
        } else {
            return 28;
        }
    }

}