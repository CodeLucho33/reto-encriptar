/**
 * La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"
 * 
 * 
 * 
 * 
 */
/**  let caracteresBuscados= ['e', 'i', 'a' , 'o' ,'u'];
let caracteresClave= ['enter','imes','ai','ober','ufat'];  */



function getText() {
    texto = document.getElementById('texto__encriptable').value;
   texto = texto.replaceAll('e','enter');
   texto =texto.replaceAll('i','imes') ;
   texto =texto.replaceAll('a','ai') ;
   texto =texto.replaceAll('o','ober') ;
   texto =texto.replaceAll('u','ufat') ;

   document.getElementById('copiar_texto').innerHTML= `${texto}`;



}

function reverseText(){
    let desencriptado = document.getElementById('texto__encriptable').value;
    desencriptado = desencriptado.replaceAll('enter','e');
    desencriptado = desencriptado.replaceAll('imes','i');
    desencriptado = desencriptado.replaceAll('ai','a');
    desencriptado = desencriptado.replaceAll('ober','o');
    desencriptado = desencriptado.replaceAll('ufat','u');
document.getElementById('copiar_texto').innerHTML= `${desencriptado}`;
}

function copiText(){
    
}