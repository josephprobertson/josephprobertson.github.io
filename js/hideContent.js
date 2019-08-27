// JavaScript Document

var hideBtn = document.querySelector("#mainButton"),
    content = document.querySelector(".landingPageContainer");
	gallery = document.querySelector(".imgGallery");

// Toggle show/hide classes on test content
hideBtn.addEventListener("click", function(){
  content.className = "hidden";
}, false);
hideBtn.addEventListener("click", function(){
  gallery.className = "visible";
}, false);