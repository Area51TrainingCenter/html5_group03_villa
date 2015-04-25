jQuery(
	function($) {

		$.ajax({
			url: "http://mmedica.tibajodemanda.com/peliculas",
			type: "get",
			success: function(datos) {
				for(var i=0; i< datos.length; i++) {
					item = "<li>" + datos[i].nombre + "</li>";

					$("ul").append(item);
				}
			},
			error: function(xhr, estado, err) {
				console.log(estado);
			}
		})


	}
)