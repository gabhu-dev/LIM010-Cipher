window.cipher = {
  encode: (offset, string) => {
    /* Acá va tu código que cifra*/
    string = string.toUpperCase();
    let confesionTwo = '';
    for (let i = 0; i < string.length; i++) {
      let caracter = string[i];
      let candado = string.charCodeAt(i);
      if (candado >= 65 && candado <= 122) {
        confesionTwo += String.fromCharCode((candado - 65 + parseInt(offset)) % 26 + 65);
      } else {
        confesionTwo += caracter;
      }
    }

    return confesionTwo;
  },
  decode: (offset, string) => {
    /* Acá va tu código que descifra*/
    string = string.toUpperCase();
    let confesionThree = '';
    for (let i = 0; i < string.length; i++) {
      let caracter = string[i];
      let candado = string.charCodeAt(i);
      if (candado >= 65 && candado <= 122) {
        confesionThree += String.fromCharCode((candado + 65 - parseInt(offset)) % 26 + 65);
      } else {
        confesionThree += caracter;
      }
    }

    return confesionThree;
  },
};