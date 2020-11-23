	
/*CAROUSEL*/

	$('.carousel').carousel({
	  interval: 1000
	});	

/*RECUPERAR CONTRASEÑA*/
	
	function recuperacion() {

		var num = document.getElementById("emailRecuperacion").value.indexOf("@");
		var email = document.getElementById("emailRecuperacion").value;

		if (num == -1 ) {

			alert("No es un e-mail valido!");
		}

		else {

			alert("¡Listo! Te enviamos un email a " + email);
		}
	};

/*MOSTRAR CARTEL AL SUSCRIBIRSE*/

	function suscribite() {

		var num = document.getElementById("inputEmail").value.indexOf("@");
		var email = document.getElementById("inputEmail").value;
		
		if (num == -1 ) {

			alert("No es un e-mail valido!");
		}

		else {

			
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

/*CARTEL MENSAJE ENVIADO*/

	function mensajeEnviado () {
		var nombre =  document.getElementById("nombre");
		var num = document.getElementById("email").value.indexOf("@");
		var email = document.getElementById("email").value;
		var telefono = document.getElementById("telefono").value;
		var comentario = document.getElementById("comentario").value; 

		
		if  (nombre == null) {
			
			alert("Ingrese un nombre válido");

			if (num == -1 ) {

			alert("No es un e-mail valido!");

			}
		}

		else {

			alert ("Hemos recibido su mensaje. En breve le responderemos. Gracias");
		}
		

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

