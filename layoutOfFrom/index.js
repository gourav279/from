var btnOption1 = document.getElementById("btn-opt1");
var btnOption2 = document.getElementById("btn-opt2");
var btnOption3 = document.getElementById("btn-opt3");

var formOption1 = document.getElementById("option-form1");
var formOption2 = document.getElementById("option-form2");
var formOption3 = document.getElementById("option-form3");

var closebtn = document.getElementsByClassName("close-form");


btnOption1.addEventListener("click", function(){
    formOption1.classList.remove("d-play-none");
    formOption2.classList.add("d-play-none");
    formOption3.classList.add("d-play-none");
});
btnOption2.addEventListener("click", function(){
    formOption2.classList.remove("d-play-none");
    formOption1.classList.add("d-play-none");
    formOption3.classList.add("d-play-none");
});
btnOption3.addEventListener("click", function(){
    formOption3.classList.remove("d-play-none");
    formOption2.classList.add("d-play-none");
    formOption1.classList.add("d-play-none");
});