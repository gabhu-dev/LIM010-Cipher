let contador = 0;
const empezar = document.getElementById('empezar');
empezar.addEventListener('click', () => {
  /* INTENTO VALIDO*/
  if (contador <= 3) {
    let password = document.getElementById('password').value;
    if (password === 'LABORATORIA') {
      document.getElementById('contain-screen-1').classList.add('hide');
      document.getElementById('header').classList.remove('hide');
      document.getElementById('screen-2').classList.remove('hide');
    } else {
      document.getElementById('error').innerHTML = '&#33; vuelve a intentar';
      contador = contador + 1;
      /* 2DO INTENTO NO VALIDO Y TERCERO*/
      if (contador > 2) {
        document.getElementById('error').innerHTML = '&#33; vuelve a intentarlo mas tarde';
        document.getElementById('password').disabled = true;
        document.getElementById('empezar').disabled = true;
      }
    }
  }
});
const seguir = document.getElementById('seguir');
seguir.addEventListener('click', () => {
  document.getElementById('screen-2').classList.add('hide');
  document.getElementById('screen-3').classList.remove('hide');
});
const cifrar = document.getElementById('cifrar');
cifrar.addEventListener('click', () => {
  let age = document.getElementById('offset').value;
  let cifra = document.getElementById('confesion').value;
  console.log(window.cipher.encode(age, cifra));
  document.getElementById('traduccion').innerHTML = window.cipher.encode(age, cifra);
});
const descifrar = document.getElementById('descifrar');
descifrar.addEventListener('click', () => {
  let age = document.getElementById('offset').value;
  let descifra = document.getElementById('confesion').value;
  document.getElementById('traduccion').innerHTML = window.cipher.decode(age, descifra);
});
const limpiar = document.getElementById('limpiar');
limpiar.addEventListener('click', () => {
  document.getElementById('confesion').value = '';
});
const publicar = document.getElementById('publicar');
publicar.addEventListener('click', () => {
  document.getElementById('screen-3').classList.add('hide');
  document.getElementById('pantalla-4').classList.remove('hide');

  let desp = document.getElementById('offset').value;
  let mensaje = document.getElementById('traduccion').value;
  let nombre = document.getElementById('nombre-1').value;
  document.getElementById('traducto').innerHTML = `${nombre} ${desp} `;
  document.getElementById('traducto-2').innerHTML = `${mensaje}`;
});
const volver = document.getElementById('volver');
volver.addEventListener('click', () => {
  document.getElementById('pantalla-4').classList.add('hide');
  document.getElementById('screen-3').classList.remove('hide');
});
const salir = document.getElementById('salir');
salir.addEventListener('click', () => {
  document.getElementById('pantalla-4').classList.add('hide');
  document.getElementById('contain-screen-1').classList.remove('hide');
});