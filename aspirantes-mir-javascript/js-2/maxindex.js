function maxindex(array){
    
    let maximoIndex=0;
    for(let i=1;i<array.length;i++){
        if(array[i]>array[maximoIndex]){
            maximoIndex=i
        }
    }
    return maximoIndex
}