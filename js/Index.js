	
/*CAROUSEL*/

	$('.carousel').carousel({
	  interval: 1000
	});	

/*RECUPERAR CONTRASEÑA*/
	
	function recuperacion() {

		var num = document.getElementById("email").value.indexOf("@");
		var email = document.getElementById("email").value;

		if (num == -1 ) {
			alert("No es un e-mail valido!");
		} else {
			alert("¡Listo! Te enviamos un email a " + email);
		}
	};

/*MOSTRAR CARTEL AL SUSCRIBIRSE*/

	function suscribite() {

		var num = document.getElementById("inputEmail").value.indexOf("@");
		var email = document.getElementById("inputEmail").value;
		
		if (num == -1 ) {

			alert("No es un e-mail valido!");
		} else {
			document.getElementById("graciasPorSuscribirte").style.display = 'inline-block';
		}
	};

/*MOSTRAR EL INPUT BUSCADOR*/

	function mostrarBuscador() {
		document.getElementById("inputBuscador").style.display = 'inline-block';
	};

/*DESPLEGAR MENU CATEGORIAS*/

	function desplegar(id){
		
		var div = document.getElementById("categoriasResponsive");
			
		if(!div) {			
		return true;
		}
		if (div.style.display == "none") {			
			div.style.display = "inline-block";
		} else {			
			div.style.display = "none";
		};		
		return true;
	};


/*MOSTRAR DIV OCULTO*/

	function mostrarDivTarjeta () {

		var tarjeta = document.getElementById("tarjetaOculto");
		var rapi = document.getElementById("rapiOculto");
		var conv = document.getElementById("convenirOculto");

		tarjeta.style.display = 'inline-block';

		if (rapi.style.display == 'inline-block' || conv.style.display == 'inline-block') {
			rapi.style.display = 'none';
			conv.style.display = 'none';
		};
	};

	function mostrarDivRapi () {
		
		var tarjeta = document.getElementById("tarjetaOculto");
		var rapi = document.getElementById("rapiOculto");
		var conv = document.getElementById("convenirOculto");

		rapi.style.display = 'inline-block';

		if (tarjeta.style.display == 'inline-block' || conv.style.display == 'inline-block') {
			tarjeta.style.display = 'none';
			conv.style.display = 'none';
		};
	};


	function mostrarDivConv() {
	
		var tarjeta = document.getElementById("tarjetaOculto");
		var rapi = document.getElementById("rapiOculto");
		var conv = document.getElementById("convenirOculto");

		conv.style.display = 'inline-block';

		if (rapi.style.display == 'inline-block' || tarjeta.style.display == 'inline-block') {
			rapi.style.display = 'none';
			tarjeta.style.display = 'none';
		};
	};

/*MOSTRAR DIV OCULTO*/

	function finalizaCompra () {

		var tarjeta = document.getElementById("tarjetaOculto");
		var rapi = document.getElementById("rapiOculto");
		var conv = document.getElementById("convenirOculto");


		if ( rapi.style.display == 'inline-block' || tarjeta.style.display == 'inline-block' || conv.style.display == 'inline-block' ) {
			alert ("Gracias por tu compra! te enviaremos un e-mail con los datos de tu orden");
			window.location = 'potreroDigital_proyecto_grupo4_Index.html';	
		} else {
			alert ("Seleccione un medio de pago");
		};

	};


/*VALIDACIONES CONTACTO*/

const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');

const expresiones = {
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, 
	apellido: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, 
	direccion: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, 
	cp: /^\d{4,6}$/,
	email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{7,14}$/,
	password: /^.{4,12}$/ // 4 a 12 digitos.
}

const campos = {
	Nombre: false,
	Apellido: false,
	Email: false,
	Telefono: false,
	Password: false
}

const validarFormulario = (e) => {
	switch (e.target.name) {
		case "nombre":
			validarCampo(expresiones.nombre, e.target, 'Nombre');
		break;
		case "email":
			validarCampo(expresiones.email, e.target, 'Email');
		break;
		case "telefono":
			validarCampo(expresiones.telefono, e.target, 'Telefono');
		break;
	}
}

const validarCampo = (expresion, input, campo) => {
	if (expresion.test(input.value)){
		document.getElementById(`divForm${campo}`).classList.remove('divForm-incorrecto');
		document.getElementById(`divForm${campo}`).classList.add('divForm-correcto');
		document.querySelector(`#divForm${campo} i`).classList.add('fa-check-circle');
		document.querySelector(`#divForm${campo} i`).classList.remove('fa-times-circle');
		document.querySelector(`#divForm${campo} .inputError`).classList.remove('inputError-activo')
		campos[campo] = true;
	} else {
		document.getElementById(`divForm${campo}`).classList.add('divForm-incorrecto');
		document.getElementById(`divForm${campo}`).classList.remove('divForm-correcto');
		document.querySelector(`#divForm${campo} i`).classList.add('fa-times-circle');
		document.querySelector(`#divForm${campo} i`).classList.remove('fa-check-circle');
		document.querySelector(`#divForm${campo} .inputError`).classList.add('inputError-activo')
		campos[campo] = false;
	}
}

inputs.forEach((input) => {
	input.addEventListener('keyup', validarFormulario);
	input.addEventListener('blur', validarFormulario);
});

formulario.addEventListener('submit', (e) => {
	e.preventDefault();

	if (campos.Nombre == true && campos.Email == true  && campos.Telefono == true ) {
		alert("Hemos recibido su mensaje. En breve le responderemos. Gracias");
		formulario.reset();
	} else {
		alert("Por favor complete todos los campos antes de enviar");
	}
});

/*VALIDACIONES RECUPERACION*/

const formularioRec = document.getElementById('formulario');
const inputsRec = document.querySelectorAll('#formulario input');

const validarFormularioRec = (e) => {
	switch (e.target.name) {
		case "email":
			validarCampoRec(expresiones.email, e.target, 'Email');
		break;
	}
}

const validarCampoRec = (expresion, input, campo) => {
	if (expresion.test(input.value)){
		document.getElementById(`divForm${campo}`).classList.remove('campo-incorrecto');
		document.getElementById(`divForm${campo}`).classList.add('campo-correcto');
		document.querySelector(`#divForm${campo} i`).classList.add('fa-check-circle');
		document.querySelector(`#divForm${campo} i`).classList.remove('fa-times-circle');
		document.querySelector(`#divForm${campo} .inputError`).classList.remove('inputError-activo')
		campos[campo] = true;
	} else {
		document.getElementById(`divForm${campo}`).classList.add('campo-incorrecto');
		document.getElementById(`divForm${campo}`).classList.remove('campo-correcto');
		document.querySelector(`#divForm${campo} i`).classList.add('fa-times-circle');
		document.querySelector(`#divForm${campo} i`).classList.remove('fa-check-circle');
		document.querySelector(`#divForm${campo} .inputError`).classList.add('inputError-activo')
		campos[campo] = false;
	}
}

inputsRec.forEach((input) => {
	input.addEventListener('keyup', validarFormularioRec);
	input.addEventListener('blur', validarFormularioRec);
});

function recibido() {
	if (campos.Email == true) {
		alert("Hemos recibido su mensaje. En breve le responderemos. Gracias");
		formularioRec.reset();
	} else {
		alert("Por favor complete todos los campos antes de enviar");
	}
};

/*VALIDACIONES INICIO SESION*/

const formularioInicio = document.getElementById('formulario');
const inputsInicio = document.querySelectorAll('#formulario input');

const validarFormularioInicio = (e) => {
	switch (e.target.name) {
		case "email":
			validarCampoInicio(expresiones.email, e.target, 'Email');
		break;
		case "password":
			validarCampoInicio(expresiones.telefono, e.target, 'Password');
		break;
	}
}

const validarCampoInicio = (expresion, input, campo) => {
	if (expresion.test(input.value)){
		document.getElementById(`divForm${campo}`).classList.remove('campo-incorrecto');
		document.getElementById(`divForm${campo}`).classList.add('campo-correcto');
		document.querySelector(`#divForm${campo} i`).classList.add('fa-check-circle');
		document.querySelector(`#divForm${campo} i`).classList.remove('fa-times-circle');
		document.querySelector(`#divForm${campo} .inputError`).classList.remove('inputError-activo')
		campos[campo] = true;
	} else {
		document.getElementById(`divForm${campo}`).classList.add('campo-incorrecto');
		document.getElementById(`divForm${campo}`).classList.remove('campo-correcto');
		document.querySelector(`#divForm${campo} i`).classList.add('fa-times-circle');
		document.querySelector(`#divForm${campo} i`).classList.remove('fa-check-circle');
		document.querySelector(`#divForm${campo} .inputError`).classList.add('inputError-activo')
		campos[campo] = false;
	}
}

inputsInicio.forEach((input) => {
	input.addEventListener('keyup', validarFormularioInicio);
	input.addEventListener('blur', validarFormularioInicio);
});

function iniciarSesion() {
	var email = document.getElementById("email").value;
	if (campos.Email == true && campos.Password == true) {
		alert("Bienvenido " + email);
		formularioRec.reset();
	} else {
		alert("Por favor complete sus datos correctamente");
	}
};

/*VALIDACIONES REGISTRARSE*/

const formularioReg = document.getElementById('formulario');
const inputsReg = document.querySelectorAll('#formulario input');

const validarFormularioReg = (e) => {
	switch (e.target.name) {
		case "nombre":
			validarCampoReg(expresiones.nombre, e.target, 'Nombre');
		break;
		case "apellido":
			validarCampoReg(expresiones.apellido, e.target, 'Apellido');
		break;
		case "email":
			validarCampoReg(expresiones.email, e.target, 'Email');
		break;
		case "telefono":
			validarCampoReg(expresiones.telefono, e.target, 'Telefono');
		break;
		case "direccion":
			validarCampoReg(expresiones.direccion, e.target, 'Direccion');
		break;
		case "cp":
			validarCampoReg(expresiones.cp, e.target, 'CP');
		break;
		case "password":
			validarCampoReg(expresiones.password, e.target, 'Password');
		break;
	}
}

const validarCampoReg = (expresion, input, campo) => {
	if (expresion.test(input.value)){
		document.getElementById(`divForm${campo}`).classList.remove('campo-incorrecto');
		document.getElementById(`divForm${campo}`).classList.add('campo-correcto');
		document.querySelector(`#divForm${campo} i`).classList.add('fa-check-circle');
		document.querySelector(`#divForm${campo} i`).classList.remove('fa-times-circle');
		document.querySelector(`#divForm${campo} .inputError`).classList.remove('inputError-activo')
		campos[campo] = true;
	} else {
		document.getElementById(`divForm${campo}`).classList.add('campo-incorrecto');
		document.getElementById(`divForm${campo}`).classList.remove('campo-correcto');
		document.querySelector(`#divForm${campo} i`).classList.add('fa-times-circle');
		document.querySelector(`#divForm${campo} i`).classList.remove('fa-check-circle');
		document.querySelector(`#divForm${campo} .inputError`).classList.add('inputError-activo')
		campos[campo] = false;
	}
}

inputsReg.forEach((input) => {
	input.addEventListener('keyup', validarFormularioReg);
	input.addEventListener('blur', validarFormularioReg);
});

function registrarse() {
	var vinculo = document.getElementById("vinculo").value;
	if (campos.Nombre == true && campos.Apellido == true && campos.Email == true && campos.Telefono == true && campos.Direccion == true && campos.CP == true ) {
		alert("Gracias por registrarte");
		formularioReg.reset();
	} else {
		alert("Por favor complete sus datos correctamente");
		document.getElementById('vinculo').href="potreroDigital_proyecto_grupo4_Registrarse.html";
	}
};