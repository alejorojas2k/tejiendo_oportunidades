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
});