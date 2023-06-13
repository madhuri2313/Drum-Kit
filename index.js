
var buttonPosition = document.querySelectorAll(".drum").length;

var audio = new Audio("sounds/tom-2.mp3")

for (var m = 0; m<buttonPosition; m++) {
    document.querySelectorAll(".drum")[m].addEventListener("click", function() {
        var sound = new Audio('sounds/tom-2.mp3');

        audio.play();
    })
}