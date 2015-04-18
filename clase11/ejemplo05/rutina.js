jQuery(
	function($) {

		$("a.opacidad").on("click",
		          function(e) {
		               e.preventDefault();
		                $(".capa").fadeTo(3000, 0.5);              
		          }
		)

	}
)