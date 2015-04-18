jQuery(
	function($) {

		$("article").on("mouseover", function() {
			$(this)
				.find("div")
				.animate({top: "100px"},1000);
		});

		$("article").on("mouseout", function() {
			$(this)
				.find("div")
				.animate({top: "150px"}, 500);
		})

	}
)	