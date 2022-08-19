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
    var image_11 = document.getElementById('image_11');
	var archivoRuta = image_11.value;
	var extPermitidas = /(.jpeg|.jpg|.png|.gif)$/i;


    if (!extPermitidas.exec(archivoRuta)){
        alert('Para poder subir una imagen, debe ser en formato JPEG, JPG, PNG o GIF');
        image_11.value='';
        return false;
    }else{
        if (image_11.files && image_11.files[0])
        {
            var visor = new FileReader();
			visor.onload = function(e) 
            
            {
                document.getElementById('visorArchivo').innerHTML = 
                '<embed src="'+e.target.result+'" width="100" height="100" />';
            };

            visor.readAsDataURL(image_11.files[0]);
        }
    }
}

function validarExt12 (){
    var image_12 = document.getElementById('image_12');
	var archivoRuta = image_12.value;
	var extPermitidas = /(.jpeg|.jpg|.png|.gif)$/i;


    if (!extPermitidas.exec(archivoRuta)){
        alert('Para poder subir una imagen, debe ser en formato JPEG, JPG, PNG o GIF');
        image_12.value='';
        return false;
    }else{
        if (image_12.files && image_12.files[0])
        {
            var visor2 = new FileReader();
			visor2.onload = function(e) 
            
            {
                document.getElementById('visorArchivo2').innerHTML = 
                '<embed src="'+e.target.result+'" width="100" height="100" />';
            };

            visor2.readAsDataURL(image_12.files[0]);
        }
    }
}

function validarExt3 (){
    var image_13 = document.getElementById('image_13');
	var archivoRuta = image_13.value;
	var extPermitidas = /(.jpeg|.jpg|.png|.gif)$/i;


    if (!extPermitidas.exec(archivoRuta)){
        alert('Para poder subir una imagen, debe ser en formato JPEG, JPG, PNG o GIF');
        image_13.value='';
        return false;
    }else{
        if (image_13.files && image_13.files[0])
        {
            var visor13 = new FileReader();
			visor3.onload = function(e) 
            
            {
                document.getElementById('visorArchivo3').innerHTML = 
                '<embed src="'+e.target.result+'" width="100" height="100" />';
            };

            visor3.readAsDataURL(image_13.files[0]);
        }
    }

}