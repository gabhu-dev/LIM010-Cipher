
const empezar= document.getElementById('empezar')
empezar.addEventListener('click',()=>{
    let pasi=document.getElementById('password').value;
if (pasi==='LABORATORIA'){
document.getElementById('pantalla-1').classList.add('hide')
document.getElementById('pantalla-2').classList.remove('hide')
}
else if(document.getElementById('resultado').innerHTML='error');

else{document.getElementById('resultado').innerHTML='vuelve a intentarlo mas tarde'}});

const seguir=document.getElementById('seguir')
seguir.addEventListener('click',()=>{
    document.getElementById('pantalla-2').classList.add('hide')
    document.getElementById('pantalla-3').classList.remove('hide')
})
