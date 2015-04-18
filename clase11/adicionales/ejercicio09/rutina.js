jQuery(
	function($) {

		$("a").on("mouseover", function(e){
			e.preventDefault();

			$("div").fadeTo(3000, 0.5);
		});

		$("a").on("mouseout", function(e){
			e.preventDefault();

			$("div").fadeTo(1000, 1);
		})
	}
)