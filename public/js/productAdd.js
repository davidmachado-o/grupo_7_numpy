const formulario = document.getElementById('productAddForm');
const inputs = document.querySelectorAll('#productAddForm input');

const expresiones = {
	name: /^[a-zA-Z0-9\_\-]{5,16}$/ // Letras, numeros, guion y guion_bajo
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
        break;
    }
}


inputs.forEach((input) => {
	input.addEventListener('keyup', validarFormulario);
	input.addEventListener('blur', validarFormulario);
});

