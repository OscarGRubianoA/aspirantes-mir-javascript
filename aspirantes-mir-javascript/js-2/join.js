function join(array){
    let str=''
    for(let i=0; i<array.length;i++){
        str+=array[i];
        if(i !== array.length -1){
            str+=' ';
        }
    }
}