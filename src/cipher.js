window.cipher = {
  encode: (offset, string) => {
    /* Acá va tu código que cifra*/
    string = string.toUpperCase();
    let confesion_2 = '';
    for (let i = 0; i < string.length; i++) {
      let caracter = string[i];
      let candado = string.charCodeAt(i);
      if (candado >= 65 && candado <= 122) {
        confesion_2 += String.fromCharCode((candado - 65 + parseInt(offset)) % 26 + 65);
      }
      else {
        confesion_2 += caracter;
      }
    }

    return confesion_2;
  },
  decode: (offset, string) => {
    /* Acá va tu código que descifra*/
    string = string.toUpperCase();
    let confesion_3 = '';
    for (let i = 0; i < string.length; i++) {
      let caracter = string[i];
      let candado = string.charCodeAt(i);
      if (candado >= 65 && candado <= 122) {
        confesion_3 += String.fromCharCode((candado + 65 - parseInt(offset)) % 26 + 65);
      }
      else {
        confesion_3 += caracter;
      }

    }

    return confesion_3;
  },
}

