var noOfDrum = document.querySelectorAll(".drum").length;
function playSound(value) {
  var audio;
  switch (value) {
    case "w":
      audio = new Audio("./assets/sounds/tom-1.mp3");
      break;
    case "a":
      audio = new Audio("./assets/sounds/tom-2.mp3");
      break;
    case "s":
      audio = new Audio("./assets/sounds/tom-3.mp3");
      break;
    case "d":
      audio = new Audio("./assets/sounds/tom-4.mp3");
      break;
    case "j":
      audio = new Audio("./assets/sounds/snare.mp3");
      break;
    case "k":
      audio = new Audio("./assets/sounds/crash.mp3");
      break;
    case "l":
      audio = new Audio("./assets/sounds/kick.mp3");
      break;
    default:
      return;
  }
  audio.play();
}
function buttonAnimation(button){
  var buttonElement=document.querySelector("."+button);
  buttonElement.classList.add("pressed");
  setTimeout(function(){
    buttonElement.classList.remove("pressed");
  },100);
}

for (var i = 0; i < noOfDrum; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    var clickedDrum = this.innerHTML;
    buttonAnimation(clickedDrum);
    playSound(clickedDrum);
  });
}

document.addEventListener("keypress", function (e) {
  var pressedDrum = e.key;
  buttonAnimation(pressedDrum);
  playSound(pressedDrum);
});
