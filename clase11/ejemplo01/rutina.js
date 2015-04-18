jQuery(
	function($) {

		$(".capa").on("mouseenter",
		              function() {
		                   $(".mensaje").css("display","block");   
		              }
		);

		$(".capa").on("mouseleave",
		              function() {
		                   $(".mensaje").css("display","none");   
		              }
		);

	}
)