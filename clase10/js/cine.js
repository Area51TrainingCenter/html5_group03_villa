jQuery(
	function($) {

		$("a").on("click", function(evt) {
			evt.preventDefault();

			var titulo = $(this).attr("rel1");

			$("h1.titulo").html(titulo);

			//$("a").parent().css("backgroundColor","#fff");
			//$("li").css("backgroundColor","#fff");
			$("li").css(
				{
					"font-size":"20px",
					"color": "blue",
					"text-align": "center",
					"animation": "animar 2s"
				}
			);
			$("li").removeClass("seleccionado");

			//$(this).parent().css("backgroundColor","#ccc");
			$(this).parent().addClass("seleccionado");

		});

		$("button").on("click", function(e){
			e.preventDefault();

			var nombreAutor = $("#autor").val();
			var critica = $("#critica").val();

			var textoCritica = "<p>Autor: " +  nombreAutor  +  "<br/>" +  critica + "</p>";

			$(".criticas").append(textoCritica);

			$("#autor").val("");
			$("#critica").val("");


		})

	}
)