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

let arregloDeCaracters = [];
let texto = "prueba";
let keyE = 'enter';
let keyI = 'imes';
let keyA = 'ai';
let keyO = 'ober';
let keyU = 'ufat';
let textoEncriptado = [];

function getText() {
    texto = document.getElementById('texto__encriptable').value;
    //Lllamo al método Split de los strings para que me divida la cadena de caracteres
    //Y almaceno los caracteres en un arreglo
    arregloDeCaracters = texto.split('');

    // Recorrer el arreglo y remplazar claves
    for (let i = 0; arregloDeCaracters.length; i++) {
        if (arregloDeCaracters[i] === 'e') {
            textoEncriptado.push(keyE);
        } else {
            textoEncriptado.push(arregloDeCaracters[i]);
            break;
        }
       
    }
let mensaje = textoEncriptado.join('');
console.log(`Texto original ${texto}`);
console.log(`Texto encriptado ${mensaje}`);

}

