function verificaLista(lista,numero){
    let contadorDeNumero = 0
    for(let i=0; i<lista.length;i++){
        if(lista[i] == numero){
            contadorDeNumero++
        }
    }
    if(contadorDeNumero>=2){
        return "Aparece duas vezes ou mais"
    }else{
       return "Aparece menos de duas vezes"
    }
}