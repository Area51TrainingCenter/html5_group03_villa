jQuery(
	function($) {


		$("a.aparece").on("click", function(e){
			e.preventDefault();

			$("section").css("display","block");
		});



		$("a.desaparece").on("click", function(e) {
			e.preventDefault();

			$("section").css("display", "none");
		})


	}
)