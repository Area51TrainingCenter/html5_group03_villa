jQuery(
	function($) {

		var contadorAlumnos = 10;
		var alumnos;

		function ObtenerListaAlumnos() {
			alumnos = [
				{id: "1", codigo: "00001", nombre: "nombre de alumno1"},
				{id: "2", codigo: "00002", nombre: "nombre de alumno2"},
				{id: "3", codigo: "00003", nombre: "nombre de alumno3"},
				{id: "4", codigo: "00004", nombre: "nombre de alumno4"},
				{id: "5", codigo: "00005", nombre: "nombre de alumno5"},
				{id: "6", codigo: "00006", nombre: "nombre de alumno6"},
				{id: "7", codigo: "00007", nombre: "nombre de alumno7"},
				{id: "8", codigo: "00008", nombre: "nombre de alumno8"},
				{id: "9", codigo: "00009", nombre: "nombre de alumno9"},
				{id: "10", codigo: "00010", nombre: "nombre de alumno10"}
			];

			return alumnos;
		}


		function MostrarListado() {
			var listaAlumnos = ObtenerListaAlumnos();
			$("tbody").html("");

			for(var i=0; i<listaAlumnos.length; i++) {
				VisualizarUnAlumno(listaAlumnos[i]);
			}
		}

		function VisualizarUnAlumno(obj) {
			$("tbody").append("<tr><td>" + obj.id + "</td><td>" + obj.codigo + "</td><td>" + obj.nombre + "</td></tr>");
		}

		function AgregarAlumno() {
			var codigo = $("#iCodigo").val();
			var nombre = $("#iNombre").val();
			var id = contadorAlumnos+1;
			contadorAlumnos++;

			var objAlumno = {id: id, codigo: codigo, nombre: nombre};

			alumnos.push(objAlumno);

			VisualizarUnAlumno(objAlumno);
		}

		MostrarListado();

		$("#btnAgregar").on("click", function(evt) {
			evt.preventDefault();

			AgregarAlumno();
		});

	}

)