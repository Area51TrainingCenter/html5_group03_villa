jQuery(
	function($) {
		var id;


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

					id = $(this).attr("rel");

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

								$("#titulo").val(titulo);
								$("#director").val(director);
								$("#genero").val(genero);
								$("#sinopsis").val(sinopsis);
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


		$("#enviar").on("click", function() {
			var dato = {};
			dato.nombre = $("#titulo").val();
			dato.director = $("#director").val();
			dato.genero = $("#genero").val();
			dato.sinopsis = $("#sinopsis").val();

			$.ajax(
				{
					url: "http://mmedica.tibajodemanda.com/peliculas/"+id,
					type: "put",
					data: dato,
					success: function(respuesta) {
						alert("Se actualizó");
					},
					error: function(xhr, estado, err) {
						console.log(estado);
					}
				}
			);

		})




	}
)