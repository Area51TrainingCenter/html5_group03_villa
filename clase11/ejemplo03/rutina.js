jQuery(
	function($) {

		$("a.lnkAparecer").on("click",
		          function(e) {
		               e.preventDefault();
		                $(".capa").fadeIn(2000);              
		          }
		)

		$("a.lnkDesaparecer").on("click",
		          function(e) {
		               e.preventDefault();
		                $(".capa").fadeOut(3000);              
		          }
		)

	}
)