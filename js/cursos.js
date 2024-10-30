 //Este script maneja la navegación cuando seleccionas un curso
//document.getElementById('dropdown-cursos').addEventListener('change', function () {
  //  let course = this.value;
    //window.location.href = course;
//});


document.getElementById('dropdown-cursos').addEventListener('change', function() {
    const selectedValue = this.value; // Captura el valor seleccionado

    if (selectedValue) {
        const targetElement = document.getElementById(selectedValue); // Encuentra el elemento con el id seleccionado

        if (targetElement) {
            // Scroll suave hacia el elemento
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    }
});

function filtrarCursos(categoria) {
    var cursos = document.getElementsByClassName("cursos");
    
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