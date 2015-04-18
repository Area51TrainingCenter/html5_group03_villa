jQuery(
	function($) {
		$("button").on("click", function(e) {
			e.preventDefault();

			//$(this).toggleClass("desactivado");

			if($(this).hasClass("desactivado")) {
				$(this).removeClass("desactivado");
			} else {
				$(this).addClass("desactivado");
			}

			var peliculasSeleccionadas = "";

			$(".seleccionado").each(
				function(elem) {
					peliculasSeleccionadas = peliculasSeleccionadas+ "; " + $(".seleccionado").eq(elem).html();
				}
			);

			alert(peliculasSeleccionadas);


		});

		$("td").on("click", function() {
			$(this).toggleClass("seleccionado");
		})

	}
);