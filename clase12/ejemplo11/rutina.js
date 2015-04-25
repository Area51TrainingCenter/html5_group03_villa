jQuery(
	function($) {

		var informeJefeProyecto = function() {
			console.log("Jefe generando informe");
			var defer = $.Deferred();

			setTimeout(
				function() {
					console.log("Informe del jefe completo");
					defer.resolve();
				}
			, 3000);


			return defer.promise();
		}

		var informeAnalistaProcesos = function() {
			console.log("Analista generando informe");
			var defer = $.Deferred();

			setTimeout(
				function() {
					console.log("Informe del analista completo");
					defer.resolve();
				}
			, 6000);


			return defer.promise();		
		}

		$.when(informeJefeProyecto(), informeAnalistaProcesos())
			.done(
				function(){
					console.log("Documentación enviada a la licitación");
				}
			);


	}
)

