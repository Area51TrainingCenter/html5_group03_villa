jQuery(
	function($) {
		var promesa = function() {

			var defer = $.Deferred();
			console.log("Se eliminó un usuario");
			
			setTimeout(function(){
				var obj = {usuario: "Sergio", id:"1000"};
				defer.resolve(obj);
			}, 7000);

			return defer.promise();
		};

		promesa()
			.then(
				function(obj) {
					console.log("Enviando notificación al administrador");
					var defer = $.Deferred();

					setTimeout(
						function(){
							defer.resolve();
							console.log("Usuario eliminado", obj.usuario);
						}, 3000
					);

					return defer.promise();
				}
			)
			.then(
				function(){
					console.log("Enviando correos");

					var defer = $.Deferred();

					setTimeout(function(){
						defer.resolve("Correos enviados");
					}, 5000)

					return defer.promise();
				}
			)
			.then(
				function(msg) {
					console.log(msg);
				}
			);
	}
)

