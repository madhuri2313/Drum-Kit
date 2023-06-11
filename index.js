
var buttonPosition = document.querySelectorAll(".drum").length;

for (var m = 0; m<buttonPosition; m++) {
    document.querySelectorAll(".drum")[m].addEventListener("click", function() {
        alert("i got clicked")
    })
}