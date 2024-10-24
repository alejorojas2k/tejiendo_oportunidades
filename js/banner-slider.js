const sliderButtonLeft = document.getElementById("slider-slide-button-left");
const sliderButtonRight = document.getElementById("slider-slide-button-right");

let currentsliderPosition = parseInt(
   window.getComputedStyle(document.getElementById("container-slider")).getPropertyValue("left")
);
console.log(currentsliderPosition);

sliderButtonRight.addEventListener("click", sliderToLeft);
sliderButtonLeft.addEventListener("click", sliderToRight);
/* document.getElementById("container-noticia-1").style.backgroundColor = "red";
document.getElementById("container-noticia-2").style.backgroundColor = "blue";
document.getElementById("container-noticia-3").style.backgroundColor = "yellow";
document.getElementById("container-noticia-4").style.backgroundColor = "green"; */

let counterslider = document.querySelectorAll(".container-slide").length;
let leftDisplace = 0;

function sliderToLeft() {
   if (currentsliderPosition == (counterslider - 1) * -100) {
      newsliderPosition = currentsliderPosition;
   } else {
      if (sliderButtonLeft.style.visibility == "hidden") {
         sliderButtonLeft.style.visibility = "visible";
         sliderButtonLeft.style.opacity = "1";
      }
      newsliderPosition = currentsliderPosition - 100;
      document.getElementById("container-slider").style.left = newsliderPosition + "%";
      sliderButtonLeft.style.visibility = "visible";
      if (counterslider == Math.abs(newsliderPosition / 100 - 1)) {
         sliderButtonRight.style.opacity = "0";
         sliderButtonRight.style.visibility = "hidden";
      }
      currentsliderPosition = newsliderPosition;
   }
}

function sliderToRight() {
   if (currentsliderPosition == 0) {
      newsliderPosition = currentsliderPosition;
   } else {
      if (sliderButtonRight.style.visibility == "hidden") {
         sliderButtonRight.style.visibility = "visible";
         sliderButtonRight.style.opacity = "1";
      }
      newsliderPosition = currentsliderPosition + 100;
      document.getElementById("container-slider").style.left = newsliderPosition + "%";
      currentsliderPosition = newsliderPosition;
      if (currentsliderPosition == 0) {
         sliderButtonLeft.style.opacity = "0";
         sliderButtonLeft.style.visibility = "hidden";
      }
   }
}
