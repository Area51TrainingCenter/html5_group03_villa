jQuery(
	function($) {

		$("a").on("click", function(e){
			e.preventDefault();

			$("div").fadeOut(3000);
		})
	}
)