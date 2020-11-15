	
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