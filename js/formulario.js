function validar() {
	var elegirOpcion = document.getElementById('opciones');
	if (elegirOpcion.value=="") {
		alert("Seleciona una opcion");
		elegirOpcion.focus();
	}else{
		elegirOpcion.focus();
	}
}

const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');

const expresiones = {
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
	identificacion:/^\d{8,10}$/,
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9]+\.[a-zA-Z0-9_.]+$/,
	celular: /^\d{1,10}$/,
 	cargo:/^[a-zA-ZÀ-ÿ\s]{1,30}$/,
 	ocupacion:/^[a-zA-ZÀ-ÿ\s]{1,20}$/,
 	horario:/^(?:0?[7-9]|1[0-6]):[0-5][0-9]\s?(?:[aApP](\.?) [mM]\1)?$/,
 	
}
const campos = {
	nombre:false,
	identificacion:false,
	correo:false,
	celular:false,
	horario:false,
	ocupacion:false,
	cargo:false,
	
}



const validarFormulario = (e) => {
	switch (e.target.name){
		case "identificacion":
			validarCampo(expresiones.identificacion, e.target, 'identificacion');
		break;
		case "celular":
			validarCampo(expresiones.celular, e.target, 'celular');
		break;
		case "ocupacion":
			validarCampo(expresiones.ocupacion, e.target, 'ocupacion');
		break;
		case "nombre":
			validarCampo(expresiones.nombre, e.target, 'nombre');
		break;
		case "cargo":
			validarCampo(expresiones.cargo, e.target, 'cargo');
		break;
		case "correo":
			validarCampo(expresiones.correo, e.target, 'correo');
		break;
		case "horario":
			validarCampo(expresiones.horario, e.target, 'horario');
		break;
		case 'ubicacion':
			validarCampo(expresiones.ubicacion, e.target, 'ubicacion')

	}
}
const validarCampo = (expresion, input,  campo) =>{
	if (expresion.test(input.value)) {
				document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrecto');
				document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-correcto');
				document.querySelector(`#grupo__${campo} i`).classList.add('fa-check-circle');
				document.querySelector(`#grupo__${campo} i`).classList.remove('fa-times-circle');
				document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo');
				campos[campo]=true;
			}else{
				document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-incorrecto');
				document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-correcto');
				document.querySelector(`#grupo__${campo} i`).classList.remove('fa-check-circle');
				document.querySelector(`#grupo__${campo} i`).classList.add('fa-times-circle');
				document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add('formulario__input-error-activo');
				campos[campo]=false;
			}


}

inputs.forEach((input) => {
	input.addEventListener('keyup', validarFormulario);
	input.addEventListener('blur', validarFormulario);
});

formulario.addEventListener('submit', (e) => {
	e.preventDefault();

	
	if(campos.identificacion && campos.nombre && campos.cargo && campos.correo && campos.celular  ){
		formulario.reset();

		document.getElementById('formulario__mensaje-exito').classList.add('formulario__mensaje-exito-activo');
		setTimeout(() => {
			document.getElementById('formulario__mensaje-exito').classList.remove('formulario__mensaje-exito-activo');
		}, 5000);

		document.querySelectorAll('.formulario__grupo-correcto').forEach((icono) => {
			icono.classList.remove('formulario__grupo-correcto');
		document.getElementById('formulario__mensaje').classList.remove('formulario__mensaje-activo');	
		});
	} else {
		document.getElementById('formulario__mensaje').classList.add('formulario__mensaje-activo');
	}
});