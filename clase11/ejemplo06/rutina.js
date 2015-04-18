jQuery(
	function($) {

		$("a.animacion").on("click",
		          function(e) {
		               e.preventDefault();
		                $(".capa").animate({"width": "500px", "height": "600px"}, 1500, "linear");              
		          }
		)

	}
)