jQuery(
	function($) {

		var seleccion=$("article.clas1 section.seccion2 h1");

		seleccion.html("Título <strong>1</strong>");

		seleccion.html("Título Nuevo");

		var titulo=seleccion.html();

		alert(titulo);

	}
)