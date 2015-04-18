jQuery(
	function($) {

		$("a").on("click", function(e){
			e.preventDefault();

			$("div").fadeTo(3000, 0.5);
		})
	}
)