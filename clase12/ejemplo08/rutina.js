jQuery(
	function($) {
		var promesa = function() {

			var defer = $.Deferred();
			console.log("inicio de promesa");
			
			setTimeout(function(){
				var obj = {usuario: "Sergio", id:"1000"};
				defer.resolve(obj);
			}, 7000);

			return defer.promise();
		};

		promesa().done(
			function(objUsuario) {
				console.log("Promesa cumplida");
				console.log("Usuario", objUsuario.usuario);
				console.log("ID", objUsuario.id);
			}
		);

		promesa().done(
			function(objU) {
				console.log("En mayúsculas", objU.usuario.toUpperCase());
			}
		)

	}
)

