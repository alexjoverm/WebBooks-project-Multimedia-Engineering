//*********************   VARIABLES GLOBALES
rutaImg       = 'img/';
rutaPunt	  = 'inc/puntuaciones.json';

tiempoRetrasoTrans	= 60;
tiempoAnimTrans		= 800;
tiempoMsgTrans		= 900;

countMsg			= 0;


/**********   LOGIN   ***********/

function CerrarSesion(){
	sessionStorage.removeItem('user');
	location.href = "index.php";
}

function ComprobarLogin(){
	if(sessionStorage.getItem('user') == null)
		return false;
	else
		return true;
}

function HacerLogin(form){
	sessionStorage.setItem('user', form.user.value);
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
	nodo.innerHTML = EliminarSaltoLinea(resto); // Elimina saltos de linea

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

function Reemplazar(lugar, etiqueta , resto ,referencia){

	var nodo = document.createElement(etiqueta);
	nodo.innerHTML = eliminaSaltoLinea(resto);

	return lugar.replaceChild(nodo,referencia);

}

function ReemplazarConClases(lugar, etiqueta , resto, referencia, clases){

	var nodo = document.createElement(etiqueta);

	clases.forEach(function(elem){
		nodo.classList.add(elem);
	});

	nodo.innerHTML = eliminaSaltoLinea(resto); // Elimina saltos de linea

	return lugar.replaceChild(nodo,referencia);

}



//******************    AJAX
// Realiza peticion AJAX (mode true para POST, false para GET)
function RealizarPeticion(param, callback, ruta, mode){
	var xhr = new XMLHttpRequest();

	// Event Listener
	xhr.onreadystatechange = function(){
		if(this.readyState == 4)
			if(this.status==200)
				callback(this.responseText);
	};


	// POST
	if(mode){
		xhr.open('POST', ruta, true);
		xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	}
	else // GET
		xhr.open('GET', ruta, true);
	
	// Realizamos la llamada
	xhr.send(param);
}


function PedirPuntuaciones()
{
	RealizarPeticion('', cbInsertarPuntuaciones, rutaPunt, true);
}


function cbInsertarPuntuaciones(respuesta)
{
	var donde = document.querySelector('body>main>div>section#puntuaciones ul');
	var punt = JSON.parse(respuesta);

	punt.sort( function(izq, der){
		if(izq.nivel < der.nivel || izq.nivel == der.nivel && izq.lineas < der.lineas || izq.nivel == der.nivel && izq.lineas == der.lineas && izq.tiempo > der.tiempo)
			return 1;

		else return -1;
	});

	punt.forEach(function(elem, index)
	{
		var min = parseInt(elem.tiempo / 60);
		var seg = elem.tiempo % 60;

		if(seg < 10)
			seg = '0' + seg;

		//Creamos el contenido del Article
		var texto = '<h5><i class="icon-user"> </i> '+elem.nombre+'<span><i class="icon-clock"> </i> '+min+':'+seg+'</span></h5>';
			texto += '<p>Nivel: '+elem.nivel;
			texto += '<span>Lineas: '+elem.lineas+'</span></p>';
			
		// Insertamos texto en libroSection, y que lo envuelva en un article con la clase ocultar
		var nodo = Insertar(donde, 'li', texto);
	});
}





//*******************    MENSAJES

function CrearMensajeInvasivo(texto, accion, titulo, color, txtBoton, lugar){

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








/**********************  JUEGO  ********************/
function LoadSidebar()
{
	var donde = document.querySelector('body>main>div>section#sidebar');

	var userPlace = donde.children[0].children[0];
	userPlace.innerHTML = sessionStorage.getItem('user');
	//var levelPlace = donde.children[1];
	//var buttonsPlace = donde.children[2];
	//var puntPlace = donde.children[3];


}


function Play(este){
	console.log("play");
	este.style.display ="none";
	este.parentNode.children[1].style.display = "inline-block";
}

function Pausa(este){
	console.log("pause");
	if(!este.classList.contains("btn-inactive"))
		console.log('Activo');
}

function Stop(este){
	console.log("stop");
	este.style.display ="none";
	este.parentNode.children[0].style.display = "inline-block";
}

function SetPunt(line, time){
	var donde = document.querySelector('body>main>div>section#sidebar>div:last-child');
	var lineElem = donde.children[0];
	var timeElem = donde.children[1];

	var min = parseInt(time / 60);
	var seg = time % 60;

	if(seg < 10)
		seg = '0' + seg;

	lineElem.innerHTML = "Lineas: "+line;
	timeElem.innerHTML = '<i class="icon-clock"> </i> '+ min +':'+ seg +'</p>';
}














