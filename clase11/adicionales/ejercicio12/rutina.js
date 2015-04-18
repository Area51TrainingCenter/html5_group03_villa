jQuery(
	function($) {

		$("section").on("dblclick", function(){

			$(this).animate(
				{
					width: "200px",
					height: "500px",
					top: "300px",
					left: "500px",
					backgroundColor:"red"
				}, 2000, function() {
					$("section").fadeOut(1500);
				});

					

		})


	}
)