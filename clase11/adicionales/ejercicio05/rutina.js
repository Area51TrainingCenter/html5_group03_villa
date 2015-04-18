jQuery(
	function($) {


		$("a.aparece").on("click", function(e){
			e.preventDefault();

			$("section").fadeIn(3000);
		});



		$("a.desaparece").on("click", function(e) {
			e.preventDefault();

			$("section").fadeOut(1500);
		})


	}
)