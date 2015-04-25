jQuery(
	function($) {



		$.ajax({
			url: "http://mmedica.tibajodemanda.com/peliculas",
			type: "get",
			success: function(datos) {
				for(var i=0; i< datos.length; i++) {
					item = "<li><a href='#' rel='" + datos[i].id + "'>" + datos[i].nombre + "</a></li>";

					$("ul").append(item);
				}



				$("a").on("click", function(e) {
					e.preventDefault();

					var id = $(this).attr("rel");

					$.ajax(
						{
							url: "http://mmedica.tibajodemanda.com/peliculas/" + id,
							type: "get",
							success: function(dato) {
								$("div").html("");

								var director = dato.director;
								var titulo = dato.nombre;
								var genero = dato.genero;
								var sinopsis = dato.sinopsis;

								$("<p>Director: " + director + "</p>").appendTo("div");
								$("<p>Título: " + titulo + "</p>").appendTo("div");
								$("<p>Género: " + genero + "</p>").appendTo("div");
								$("<p>Sinópsis: " + sinopsis + "</p>").appendTo("div");
							},
							error: function(xhr, estado, err) {

							}
						}
					);
		});





			},
			error: function(xhr, estado, err) {
				//console.log(estado);
			}
		});






	}
)