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
