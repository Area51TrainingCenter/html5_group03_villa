jQuery(
	function($) {

		$("a").on("click", function(e){
			e.preventDefault();

			$("div").fadeToggle(3000);
		})
	}
)