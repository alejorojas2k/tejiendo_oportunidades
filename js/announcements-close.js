document.getElementById("announcements-close").addEventListener("click", announcementsClose);
const initialHeight = document.getElementById("announcements").offsetHeight;
let newHeight = initialHeight;

function announcementsClose() {
   for (i = 0; i <= initialHeight; i++) {
      newHeight--;
      document.getElementById("announcements").style.height = `${newHeight}px`;
   }
   if (newHeight == 0) {
      document.getElementById("announcements").style.display = "none";
   }
}
