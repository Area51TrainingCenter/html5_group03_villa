jQuery(
	function($) {

		$("a.toggle").on("click",
		          function(e) {
		               e.preventDefault();
		                $(".capa").fadeToggle(1000);              
		          }
		)

	}
)