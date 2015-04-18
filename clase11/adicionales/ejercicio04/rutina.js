jQuery(
	function($) {


		$("a.aparece").on("click", function(e){
			e.preventDefault();

			$("section").show(3000);
		});



		$("a.desaparece").on("click", function(e) {
			e.preventDefault();

			$("section").hide(1500);
		})


	}
)