document.getElementById("announcements-close").addEventListener("click", announcementsClose);
const initialHeight = document.getElementById("announcements").offsetHeight;
let newHeight = initialHeight;
let helper = 1000;

function announcementsClose() {
   console.log("El valor inicial de newHeight es: " + newHeight);
   for (i = 0; i <= initialHeight; i++) {
      newHeight--;
      document.getElementById("announcements").style.height = `${newHeight}px`;
      console.log(document.getElementById("announcements").offsetHeight);
      console.log("El valor acutal de newHeight es: " + newHeight);
   }
   if (newHeight == 0) {
      document.getElementById("announcements").style.display = "none";
   }
}
