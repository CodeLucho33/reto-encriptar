
let newKeysEl = document.getElementById('new-keys')
let formKeys = document.getElementById('new-keys-user')
let btnGuardarClavesUsuarioEl = document.getElementById('guardar-claves-usuario')
let hasKeysUsers = false

function getEnWithKeysUser(a, b, c, d, e) {
    console.log(a, b, c, d, e)
    texto = document.getElementById('texto__encriptable').value;
    texto = texto.replaceAll('e', a);
    texto = texto.replaceAll('i', b);
    texto = texto.replaceAll('a', c);
    texto = texto.replaceAll('o', d);
    texto = texto.replaceAll('u', e);
    const textoCopiable = document.getElementById('copiar_texto')
    textoCopiable.innerHTML = `${texto}`
    if (texto === '') {
        alert('Debe ingresar un texto')
    }
}
btnGuardarClavesUsuarioEl.addEventListener('click', function () {
    hasKeysUsers = true
    if (formKeys.checkValidity() === true) {
        formKeys.addEventListener('submit', function (e) {
            e.preventDefault()
            const loginFormData = new FormData(formKeys)
            const keye = loginFormData.get('key-e')
            const keyi = loginFormData.get('key-i')
            const keya = loginFormData.get('key-a')
            const keyo = loginFormData.get('key-o')
            const keyu = loginFormData.get('key-u')
            /* console.log(keye,keyi,keya,keyo,keyu) */
            getEnWithKeysUser(keye, keyi, keya, keyo, keyu)
        })

        formKeys.style.display = 'none'
       
    }
    else {
        formKeys.style.border = '2x solid red'
    }
})

    newKeysEl.addEventListener('click', function () {
        formKeys.style.display = 'flex'
      
    let hasKeysUsers = true

})
if (hasKeysUsers) {
    console.log(hasKeysUsers)





} else if (hasKeysUsers === false) {
    hasKeysUsers = false
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






}








