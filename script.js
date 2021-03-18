var slideIndex = 1;
showSlides(slideIndex);

//Next/previous slide
let slides = n => {
  showSlides(slideIndex += n);
}

//Thumbnail image controls
let currentSlide = n => {
  showSlides(n);
}

let showSlides = n => {
  var i;
  var slides = document.getElementsByClassName("image-slide");
  var dots = document.getElementsByClassName("dot");

  if(n > slides.length){
    slideIndex = 1;
  }

  for(i = 0; i < slides.length; i++){
    slides[i].style.display = "none";
  }

  for(i = 0; dots.length; i++){
    dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}