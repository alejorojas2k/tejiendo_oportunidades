const sliderButtonLeft = document.getElementById("noticias-slide-button-left");
const sliderButtonRight = document.getElementById("noticias-slide-button-right");

let currentNoticiasPosition = parseInt(
   window.getComputedStyle(document.getElementById("container-noticias")).getPropertyValue("left")
);
console.log(currentNoticiasPosition);

sliderButtonRight.addEventListener("click", sliderToLeft);
sliderButtonLeft.addEventListener("click", sliderToRight);
/* document.getElementById("container-noticia-1").style.backgroundColor = "red";
document.getElementById("container-noticia-2").style.backgroundColor = "blue";
document.getElementById("container-noticia-3").style.backgroundColor = "yellow";
document.getElementById("container-noticia-4").style.backgroundColor = "green"; */

let counterNoticias = document.querySelectorAll(".container-noticia").length;
let leftDisplace = 0;

function sliderToLeft() {
   if (currentNoticiasPosition == (counterNoticias - 1) * -100) {
      newNoticiasPosition = currentNoticiasPosition;
   } else {
      if (sliderButtonLeft.style.visibility == "hidden") {
         sliderButtonLeft.style.visibility = "visible";
         sliderButtonLeft.style.opacity = "1";
      }
      newNoticiasPosition = currentNoticiasPosition - 100;
      document.getElementById("container-noticias").style.left = newNoticiasPosition + "%";
      sliderButtonLeft.style.visibility = "visible";
      if (counterNoticias == Math.abs(newNoticiasPosition / 100 - 1)) {
         sliderButtonRight.style.opacity = "0";
         sliderButtonRight.style.visibility = "hidden";
      }
      currentNoticiasPosition = newNoticiasPosition;
   }
}

function sliderToRight() {
   if (currentNoticiasPosition == 0) {
      newNoticiasPosition = currentNoticiasPosition;
   } else {
      if (sliderButtonRight.style.visibility == "hidden") {
         sliderButtonRight.style.visibility = "visible";
         sliderButtonRight.style.opacity = "1";
      }
      newNoticiasPosition = currentNoticiasPosition + 100;
      document.getElementById("container-noticias").style.left = newNoticiasPosition + "%";
      currentNoticiasPosition = newNoticiasPosition;
      if (currentNoticiasPosition == 0) {
         sliderButtonLeft.style.opacity = "0";
         sliderButtonLeft.style.visibility = "hidden";
      }
   }
}
