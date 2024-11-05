
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

// function toggleMenu() {
//     const navbarItems = document.getElementById('navbar-items');
//     navbarItems.classList.toggle('show');
// }

// function toggleMenu() {
//     const menu = document.getElementById('navbar-items-hamburguer');
//     if (menu.style.display === 'block') {
//         menu.style.display = 'none'; // Ocultar el menú
//     } else {
//         menu.style.display = 'block'; // Mostrar el menú
//     }
// }