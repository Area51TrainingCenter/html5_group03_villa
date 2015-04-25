jQuery(
	function($) {
		var id = 0;

		/////////////////////FUNCIONES

		function Listado() {
			$.ajax({
				url: "http://mmedica.tibajodemanda.com/peliculas",
				type: "get",
				success: function(datos) {
					$("ul").html("");
					for(var i=0; i< datos.length; i++) {
						item = "<li><a href='#' rel='" + datos[i].id + "'>" + datos[i].nombre + "</a></li>";

						$("ul").append(item);
					}

					BorrarFormulario();

					$("a").off("click");
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
		}

		function Actualizar(datos, idPelicula) {
			$.ajax(
				{
					url: "http://mmedica.tibajodemanda.com/peliculas/"+idPelicula,
					type: "put",
					data: datos,
					success: function(respuesta) {
						Listado();
					},
					error: function(xhr, estado, err) {
						console.log(estado);
					}
				}
			);
		}

		function Insertar(datos) {
			$.ajax(
				{
					url: "http://mmedica.tibajodemanda.com/peliculas/",
					type: "post",
					data: datos,
					success: function(respuesta) {
						Listado();
					},
					error: function(xhr, estado, err) {
						console.log(estado);
					}
				}
			);
		}		

		function Eliminar(idPelicula) {
			$.ajax(
				{
					url: "http://mmedica.tibajodemanda.com/peliculas/"+idPelicula,
					type: "delete",
					success: function(respuesta) {
						Listado();
					},
					error: function(xhr, estado, err) {
						console.log(estado);
					}
				}
			);
		}

		function BorrarFormulario() {
			$("#titulo").val("");
			$("#director").val("");
			$("#genero").val("");
			$("#sinopsis").val("");

			id = 0;
		}

		/////////////////////



		$("#enviar").on("click", function() {
			var dato = {};
			dato.nombre = $("#titulo").val();
			dato.director = $("#director").val();
			dato.genero = $("#genero").val();
			dato.sinopsis = $("#sinopsis").val();

			if(id!=0) {
				Actualizar(dato, id);	
			} else {
				Insertar(dato);
			}
		})

		$("#eliminar").on("click", function() {
			if(id!=0) {
				if(confirm("¿Estás seguro de querer eliminar?")) {
					Eliminar(id);
				}
			}
		})


		Listado();



	}
)