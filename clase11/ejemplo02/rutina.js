jQuery(
	function($) {

		$(".capa").on("mouseover",
		              function() {
		                   $(".mensaje").show(2000);
		              }
		);

		$(".capa").on("mouseout",
		              function() {
		                   $(".mensaje").hide(500);
		              }
		);

	}
)