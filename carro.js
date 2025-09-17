let doce1 = "coco", doce2 = "leite", doce3 = "chocolate";
let array = [doce1, doce2, doce3, 1,2,3, "coco", "leite", "chocolate"];

function manipulaLista (lista.toString){
    console.log ("LISTA ORIGINAL: ", lista, "\n");

    lista.push("milho"); //add milho no final da lista
    console.log ("nova lista com .push(\"milho\") : ", lista) //imprimo nova lista

    lista.pop ("milho"); // apaga o ultm elemento
    console.log ("nova lista c .pop (): ", lista); //imprimo nova lista
}

manipulaLista (array);

