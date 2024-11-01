 //Este script maneja la navegación cuando seleccionas un curso
//document.getElementById('dropdown-cursos').addEventListener('change', function () {
  //  let course = this.value;
    //window.location.href = course;
//});




function filtrarCursos(categoria) {
    var cursos = document.getElementsByClassName("cursos-cursos");
    
    for (var i = 0; i < cursos.length; i++) {
        if (categoria === "all") {
            cursos[i].style.display = "block";  // Mostrar todos los cursos
        } else if (cursos[i].id === categoria) {
            cursos[i].style.display = "block";  // Mostrar los cursos que coinciden con la categoría
        } else {
            cursos[i].style.display = "none";  // Ocultar los cursos que no coinciden
        }
    }
}