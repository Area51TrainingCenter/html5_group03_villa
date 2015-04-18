jQuery(
	function($) {

		$("section")
			.html("")
			.css("font-size", "50px")
			.html("Este es un texto de prueba")
			.animate({"font-size", "100px"}, 2000);


	}
)