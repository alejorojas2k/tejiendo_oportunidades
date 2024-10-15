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