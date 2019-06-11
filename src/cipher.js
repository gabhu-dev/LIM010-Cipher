window.cipher = {
  encode: (offset, string) => {
    /* Acá va tu código que cifra*/
    string=string.toUpperCase();
    let confesion_2='';
    for(let i=0; i<string.length; i++){
        let candado=string.charCodeAt(i);
    if(candado>=65 && candado<=90){
    confesion_2 +=String.fromCharCode((string.charCodeAt(i)-65+parseInt(offset))%26+65);
}
    else{
      (candado>=97 && candado<=122);
      confesion_2 +=String.fromCharCode((string.charCodeAt(i)-65+parseInt(offset))%26+97);
    }
  }
return confesion_2
},
  
  
 decode: (offset, string) => {
    /* Acá va tu código que descifra*/
 }
};
