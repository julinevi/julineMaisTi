//revisao objeto

class seresHumanos {
    constructor (corCabelo, altura){
        this.corCabelo = corCabelo
        this.altura = altura
        this.nome = nome
    }

    crescimento (cmCrescidos) {
        this.altura += cmCrescidos
        console.log ("Altura: ", cm, this.altura);
    }

}

let nina = new seresHumanos ("loira", 1.70, "nina");
let lia = new seresHumanos ("preto", 1.50, "lia");