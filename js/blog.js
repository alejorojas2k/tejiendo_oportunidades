document.addEventListener('DOMContentLoaded', function() {
 
    const announcementCloseButton = document.getElementById('announcements-close');
    const announcementContainer = document.getElementById('announcements');

    if (announcementCloseButton) {
        announcementCloseButton.addEventListener('click', function() {
            announcementContainer.style.display = 'none'; 
        });
    }

    const navItems = document.querySelectorAll('.nav-item');

    navItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            const submenu = item.nextElementSibling;
            if (submenu) {
                submenu.style.display = 'block'; 
            }
        });

        item.addEventListener('mouseleave', function() {
            const submenu = item.nextElementSibling;
            if (submenu) {
                submenu.style.display = 'none'; 
            }
        });
    });

    const readMoreButtons = document.querySelectorAll('.btn-read-more');

    readMoreButtons.forEach(button => {
        button.addEventListener('click', function() {
            const article = this.closest('.blog-post');
            const content = article.querySelector('.extra-content');

            if (content.style.display === "none" || content.style.display === "") {
                content.style.display = "block"; 
                this.innerText = "Leer menos"; 
            } else {
                content.style.display = "none"; 
                this.innerText = "Leer más"; 
            }
        });
    });
});