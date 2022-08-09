const formulario = document.getElementById('productEditForm');
const inputs = document.querySelectorAll('#productEditForm input');
const texto = document.querySelectorAll('#productEditForm textarea');


const expresiones = {
    name: /^[a-zA-Z0-9\_\-]{5,16}$/, // Letras, numeros, guion y guion_bajo
    description: /^[a-zA-ZÀ-ÿ\s]{20,1000}$/
}

const validarFormulario = (e) => {
    switch (e.target.name){
        case "name":
            if (expresiones.name.test(e.target.value)){
                document.getElementById('grupo__name').classList.remove('formulario__grupo-incorrecto');
                document.getElementById('grupo__name').classList.add('formulario__grupo-correcto');
                document.querySelector('#grupo__name .formulario__input-error').classList.remove('formulario__input-error-activo');
                
            }else{
                document.getElementById('grupo__name').classList.add('formulario__grupo-incorrecto')
                document.getElementById('grupo__name').classList.remove('formulario__grupo-correcto');
                document.querySelector('#grupo__name .formulario__input-error').classList.add('formulario__input-error-activo');
                
            }
        break

}}

const validarFormulario2 = (e) => {
    switch (e.target.name){
        case "description":
            if (expresiones.description.test(e.target.value)){
                document.getElementById('grupo__description').classList.remove('formulario__grupo-incorrecto');
                document.getElementById('grupo__description').classList.add('formulario__grupo-correcto');
                document.querySelector('#grupo__description .formulario__input-error').classList.remove('formulario__input-error-activo');
            
            }else{
                document.getElementById('grupo__description').classList.add('formulario__grupo-incorrecto')
                document.getElementById('grupo__description').classList.remove('formulario__grupo-correcto');
                document.querySelector('#grupo__description .formulario__input-error').classList.add('formulario__input-error-activo');
                
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

function validarExt (){
    var image_1 = document.getElementById('image_1');
	var archivoRuta = image_1.value;
	var extPermitidas = /(.jpeg|.jpg|.png|.gif)$/i;


    if (!extPermitidas.exec(archivoRuta)){
        alert('Para poder subir una imagen, debe ser en formato JPEG, JPG, PNG o GIF');
        image_1.value='';
        return false;
    }else{
        if (image_1.files && image_1.files[0])
        {
            var visor = new FileReader();
			visor.onload = function(e) 
            
            {
                document.getElementById('visorArchivo').innerHTML = 
                '<embed src="'+e.target.result+'" width="100" height="100" />';
            };

            visor.readAsDataURL(image_1.files[0]);
        }
    }
}

function validarExt2 (){
    var image_2 = document.getElementById('image_2');
	var archivoRuta = image_2.value;
	var extPermitidas = /(.jpeg|.jpg|.png|.gif)$/i;


    if (!extPermitidas.exec(archivoRuta)){
        alert('Para poder subir una imagen, debe ser en formato JPEG, JPG, PNG o GIF');
        image_2.value='';
        return false;
    }else{
        if (image_2.files && image_2.files[0])
        {
            var visor2 = new FileReader();
			visor2.onload = function(e) 
            
            {
                document.getElementById('visorArchivo2').innerHTML = 
                '<embed src="'+e.target.result+'" width="100" height="100" />';
            };

            visor2.readAsDataURL(image_2.files[0]);
        }
    }
}

function validarExt3 (){
    var image_3 = document.getElementById('image_3');
	var archivoRuta = image_3.value;
	var extPermitidas = /(.jpeg|.jpg|.png|.gif)$/i;


    if (!extPermitidas.exec(archivoRuta)){
        alert('Para poder subir una imagen, debe ser en formato JPEG, JPG, PNG o GIF');
        image_3.value='';
        return false;
    }else{
        if (image_3.files && image_3.files[0])
        {
            var visor3 = new FileReader();
			visor3.onload = function(e) 
            
            {
                document.getElementById('visorArchivo3').innerHTML = 
                '<embed src="'+e.target.result+'" width="100" height="100" />';
            };

            visor3.readAsDataURL(image_3.files[0]);
        }
    }

}