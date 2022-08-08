const formulario = document.getElementById('productAddForm');
const inputs = document.querySelectorAll('#productAddForm input');
const texto = document.querySelectorAll('#productAddForm textarea');


const expresiones = {
    name: /^[a-zA-Z0-9\_\-]{5,16}$/, // Letras, numeros, guion y guion_bajo
    description: /^[a-zA-ZÀ-ÿ\s]{20,1000}$/,
}

const validarFormulario = (e) => {
    switch (e.target.name){
        case "name":
            if (expresiones.name.test(e.target.value)){
                document.getElementById('grupo__name').classList.remove('formulario__grupo-incorrecto');
                document.getElementById('grupo__name').classList.add('formulario__grupo-correcto');
                document.querySelector('#grupo__name .formulario__input-error').classList.remove('formulario__input-error-activo')
            }else{
                document.getElementById('grupo__name').classList.add('formulario__grupo-incorrecto')
                document.getElementById('grupo__name').classList.remove('formulario__grupo-correcto');
                document.querySelector('#grupo__name .formulario__input-error').classList.add('formulario__input-error-activo')
            }
        break

}}

const validarFormulario2 = (e) => {
    switch (e.target.name){
        case "description":
            if (expresiones.description.test(e.target.value)){
                document.getElementById('grupo__description').classList.remove('formulario__grupo-incorrecto');
                document.getElementById('grupo__description').classList.add('formulario__grupo-correcto');
                document.querySelector('#grupo__description .formulario__input-error').classList.remove('formulario__input-error-activo')
            }else{
                document.getElementById('grupo__description').classList.add('formulario__grupo-incorrecto')
                document.getElementById('grupo__description').classList.remove('formulario__grupo-correcto');
                document.querySelector('#grupo__description .formulario__input-error').classList.add('formulario__input-error-activo')
            }
        break
    }
}


inputs.forEach((input) => {
    input.addEventListener('keyup', validarFormulario);
    input.addEventListener('blur', validarFormulario);
});

texto.forEach((textarea) => {
    textarea.addEventListener('keyup', validarFormulario2);
    textarea.addEventListener('blur', validarFormulario2);
});


