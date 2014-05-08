//*********************   VARIABLES GLOBALES
rutaImg       = 'img/';

tiempoRetrasoTrans	= 60;
tiempoAnimTrans		= 800;
tiempoMsgTrans		= 900;

countMsg			= 0;


/**********   LOGIN   ***********/

function CerrarSesion(){
	sessionStorage.removeItem('user');
}

function ComprobarLogin(){
	if(sessionStorage.getItem('user') == null)
		return false;
	else
		return true;
}



/**********   OTROS   ***********/

function Redireccionar(lugar){
	window.location.href = lugar;
}


function EliminarSaltoLinea(text){
	return text.replace(/(\r\n|\n|\r)/gm,"");
}







/*******   DOM   *******/

function Insertar(lugar, etiqueta , resto){

	var nodo = document.createElement(etiqueta);
	nodo.innerHTML = eliminaSaltoLinea(resto); // Elimina saltos de linea

	return lugar.appendChild(nodo);

}

function InsertarConClases(lugar, etiqueta , resto, clases){

	var nodo = document.createElement(etiqueta);

	clases.forEach(function(elem){
		nodo.classList.add(elem);
	});

	nodo.innerHTML = eliminaSaltoLinea(resto); // Elimina saltos de linea

	return lugar.appendChild(nodo);

}

function InsertarAntesDe(lugar, etiqueta , resto ,referencia){

	var nodo = document.createElement(etiqueta);
	nodo.innerHTML = eliminaSaltoLinea(resto);

	return lugar.insertBefore(nodo,referencia);

}

function reemplazar(lugar, etiqueta , resto ,referencia){

	var nodo = document.createElement(etiqueta);
	nodo.innerHTML = eliminaSaltoLinea(resto);

	return lugar.replaceChild(nodo,referencia);

}

function reemplazarConClases(lugar, etiqueta , resto, referencia, clases){

	var nodo = document.createElement(etiqueta);

	clases.forEach(function(elem){
		nodo.classList.add(elem);
	});

	nodo.innerHTML = eliminaSaltoLinea(resto); // Elimina saltos de linea

	return lugar.replaceChild(nodo,referencia);

}


//*******************    MENSAJES

function crearMensajeInvasivo(texto, accion, titulo, color, txtBoton, lugar){

	//creamos un overlay
	var overlay = InsertarConClases(document.body, 'div', '', ['overlay','ocultarFade']);
	overlay.setAttribute("onclick", accion);

	// Establecemos parametros por defecto
	if(typeof(color)==='undefined') color = 'msgSuccess'; //msgSuccess, msgWarning, msgError
	if(typeof(lugar)==='undefined') lugar = document.body;
	if(typeof(titulo)==='undefined') titulo = 'Mensaje';
	if(typeof(txtBoton)==='undefined') txtBoton = 'Continuar';

	// Creamos código
	var code = '';
		code += '<header><b>'+ titulo +'</b><span onclick='+accion+' class="icon-wrong"></span></header>';
		code += '<p>'+ texto +'</p>';
		code += '<footer><span class="btn-comp" onclick='+accion+'>'+txtBoton+'</span></footer>';

	// Insertamos el mensaje
	var nodo = InsertarConClases(lugar, 'div', code, ['mensaje','ocultarDerechaFade','invasivo',color]);

	// Le damos animación
	setTimeout(function(){
		nodo.classList.remove('ocultarDerechaFade');
		overlay.classList.remove('ocultarFade');
	}, tiempoRetrasoTrans);
}







