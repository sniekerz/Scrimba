const slides = document.getElementsByClassName("carousel-item");
let slidePosition = 0;
const totalSlides = slides.length;
const nextButton = document.getElementById("carousel-button-next");
const prevButton = document.getElementById("carousel-button-prev");
document.getElementById;

nextButton.addEventListener("click", moveToNextSlide);

prevButton.addEventListener("click", moveToPrevSlide);

function moveToNextSlide() {
  console.log("move to the next slide");
  if (slidePosition === totalSlides - 1) {
    slidePosition = 0;
    console.log(slidePosition);
  } else {
    slidePosition++;
    console.log(slidePosition);
    slides[slidePosition].classList.add("carousel-item-visible");
    slides[slidePosition - 1].classList.remove("carousel-item-visible");
  }
}

function moveToPrevSlide() {
  console.log("move to the previous slide");
  if (slidePosition === 0) {
    slidePosition = 2;
    console.log(slidePosition);
  } else {
    slidePosition -= 1;
    console.log(slidePosition);
  }
}

function hideAllSlides() {
  for (let slide of slides);
  slides[slidePosition].classList.add("carousel-item-visible");
}
/*
    Hiding non-active slides
    
    1) In our 'styles.css', add a new class 'carousel-item-hidden' that is set to display none
    2) Create a new function called 'hideAllSlides'
    3) Inside 'hideAllSlides' use a 'for of loop' to iterate through the slides (each iteration will give you direct access to 'carousel-item')
    4) When inside the 'for of loop', remove the class 'carousel-item-visible' and add the class 'carousel-item-hidden' - all our slides will now be hidden, and inside 'moveToNextSlide' at the end, we add back the slide we want visible!
    5) Call 'hideAllSlides' right away within the function 'moveToNextSlide' - make sure it's before any other code!
*/
