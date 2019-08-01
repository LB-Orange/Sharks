//alert("Hello World");
console.log("Hello World");

var name = "bob";
console.log(name);
name = 15;
console.log(name);

for(var i=0; i < 5; i++){
  console.log(i);
}

if(name < 18){
  console.log("name is less than 18")
}else{

}
/*
var image = document.getElementById("changeMe");
console.log(image);
//let and var is pretty much the same thing


image.onmouseover = function(){
  this.style.height = "750px";
  this.style.width = "1000px";

};

image.onmouseout = function(){
  this.style.height = "200px";
  this.style.width = "250px";
}
*/
var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 3000); // Change image every 2 seconds
}
