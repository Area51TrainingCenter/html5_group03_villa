jQuery(
	function($) {


		$("a.aparece").on("click", function(e){
			e.preventDefault();

			$("section").show();
		});



		$("a.desaparece").on("click", function(e) {
			e.preventDefault();

			$("section").hide();
		})


	}
)