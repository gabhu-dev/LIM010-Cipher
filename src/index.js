let contador=0;
  const empezar=document.getElementById('empezar')
  empezar.addEventListener('click',()=>{
    
/*INTENTO VALIDO*/
if(contador<=3){
let password=document.getElementById('password').value
        if(password==='LABORATORIA'){
            document.getElementById('pantalla-1').classList.add('hide');
            document.getElementById('pantalla-2').classList.remove('hide');
        }
    /*1ER INTENTO NO VALIDO*/
        else{
            document.getElementById('resultado').innerHTML='vuelve a intentar';
            contador=contador+1;
            /*2DO INTENTO NO VALIDO Y TERCERO*/
        if(contador>2){
            document.getElementById('resultado').innerHTML='vuelve a intentarlo mas tarde';
            document.getElementById('password').disabled=true; 
            document.getElementById('empezar').disabled=true;
            }}}}
            )
            const seguir=document.getElementById('seguir')
            seguir.addEventListener('click',()=>{
            document.getElementById('pantalla-2').classList.add('hide');
            document.getElementById('pantalla-3').classList.remove('hide');
            
              });
              const cifrar=document.getElementById('cifrar')
              cifrar.addEventListener('click',()=>{
                  let age=document.getElementById('offset').value;
                  let cifra=document.getElementById('confesion').value;
                  document.getElementById('traduccion').innerHTML=window.cipher.encode(age,cifra);
              });
              










