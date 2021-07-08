// función agrandar
// recibe una imagen
// no retorna nada
// PROTOTIPO: void agrandar(HTMLImageElement imagen)
function agrandar(imagen){

	// crear una nueva figura
	var figura = document.createElement('figure');

	// poner la clase grande a la figura
	figura.className = 'grande';

	//crea la imagen de la x
	var imagenX = document.createElement('img');
	imagenX.src= "imagenes/x.png";
	imagenX.alt= "Cerrar";
	imagenX.className= 'cerrar';

	// hacer que la figura grande se cierre al hacerle click a la X
	imagenX.onclick = function(){
		this.parentElement.remove(); //no figura.remove() perque figura no
		//esta en aquest ambit, esta a l'ambit de la funció general. Podria
		//funcionar, però potser no...
	}

	// crear una nueva imagen
	var nuevaImagen = document.createElement('img');

	// poner la ruta de la nueva imagen a la ruta en la que hicimos click
	nuevaImagen.src = imagen.src;

	// poner el alt de la nueva imagen al alt de la que hicimos click
	nuevaImagen.alt = imagen.alt;

	// crear un nuevo figcaption
	var figcaption = document.createElement('figcaption');

	// poner la información codificada en los atributos personalizados al figcaption
	// como alternativa podríamos poner imagen.alt
	figcaption.innerHTML = 'Fecha: '+imagen.dataset.fecha+'<br>'+ 
						   'Lugar: '+imagen.dataset.lugar+'<br>'+ 
						    imagen.dataset.descripcion;

	// colocar la imagen en la figura
	figura.appendChild(nuevaImagen);

	// colocar el figcaption en la figura
	figura.appendChild(figcaption);

	//colocar la imagen x en la figura
	figura.appendChild(imagenX);

	// colocar la figura en la galería
	galeria.appendChild(figura);
}


// cuando acabe de cargar la ventana...
window.onload = function(){

	// toma todas las imágenes de la galería
	var imagenes = document.querySelectorAll('#galeria img');

	// a cada una de ellas
	for(let imagen of imagenes){
		// añádeles el manejador de evento onclick que haga:
		imagen.onclick = function(){
			agrandar(this); // llamar a la función agrandar
		}
	}
			
}