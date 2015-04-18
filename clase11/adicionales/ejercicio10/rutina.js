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
				}, 2000);

			$(this).animate(
				{
					top: "100px",
					left: "700px",
					backgroundColor:"yellow"
				}, 500);			

		})


	}
)