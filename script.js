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
let newKeysEl = document.getElementById('new-keys')
let formKeys = document.getElementById('new-keys-user')
let btnGuardarClavesUsuarioEl = document.getElementById('guardar-claves-usuario')
const keys = []


btnGuardarClavesUsuarioEl.addEventListener('click', function () {

if(formKeys.checkValidity()===true){
    formKeys.addEventListener('submit', function (e) {
        e.preventDefault()
        const loginFormData = new FormData(formKeys)
        for (let data of loginFormData) {
            keys.push(data)
        }
        console.log(keys)
    })
    
        formKeys.style.display = 'none'  
}
else{
formKeys.style.border = '2x solid red' 
}

    
    
})
newKeysEl.addEventListener('click', function () {
    formKeys.style.display = 'flex'
    newKeysEl.style.display = 'none'
})
function getText() {
    texto = document.getElementById('texto__encriptable').value;
    texto = texto.replaceAll('e', 'enter');
    texto = texto.replaceAll('i', 'imes');
    texto = texto.replaceAll('a', 'ai');
    texto = texto.replaceAll('o', 'ober');
    texto = texto.replaceAll('u', 'ufat');
    const textoCopiable = document.getElementById('copiar_texto')
    textoCopiable.innerHTML = `${texto}`
    if (texto === '') {
        alert('Debe ingresar un texto')
    }
}

function reverseText() {
    let desencriptado = document.getElementById('texto__encriptable').value;
    desencriptado = desencriptado.replaceAll('enter', 'e');
    desencriptado = desencriptado.replaceAll('imes', 'i');
    desencriptado = desencriptado.replaceAll('ai', 'a');
    desencriptado = desencriptado.replaceAll('ober', 'o');
    desencriptado = desencriptado.replaceAll('ufat', 'u');
    document.getElementById('copiar_texto').innerHTML = `${desencriptado}`;
}
const copiText = async () => {
    let texto = document.getElementById('copiar_texto').innerHTML;
    if (texto === 'No se ha encontrado ningun texto.') {
        alert("Nada que copiar, primero ingresa un texto")
    } else {
        await navigator.clipboard.writeText(texto);
        alert('¡Ten cuidado, tienes un secreto en el portapapeles!')
    }
}


