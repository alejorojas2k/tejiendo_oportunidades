document.getElementById("announcements-close").addEventListener("click", announcementsClose);

function announcementsClose() {
   let initialHeight = document.getElementById("announcements").offsetHeight;
   let newHeight = initialHeight;
   let helper = 1000;
   while (newHeight > 0) {
      setTimeout(function () {
         document.getElementById("announcements").style.height = newHeight;
         newHeight = newHeight - 1;
      }, 100);
      helper = helper - 1;
      console.log(newHeight);
      console.log(helper);
   }
   /* document.getElementById("announcements").style.display = "none"; */
}
