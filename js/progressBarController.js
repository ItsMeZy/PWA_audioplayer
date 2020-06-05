var player = document.getElementById("player");

var timer;
var percent = 0;

//call the function when player is playing
export function progressBarPlayRegister(){
    player.addEventListener("playing", function(_event) {
        var duration = _event.target.duration;
        advance(duration, player);
      });
}

//called when the function in on pause
export function progressBarPauseRegister(){
    player.addEventListener("pause", function(_event) {
        clearTimeout(timer);
      });
}

// function that change the width of the div progress
var advance = function(duration, element) {
  var progress = document.getElementById("progress");
  var increment = 10/duration
  percent = Math.min(increment * element.currentTime * 10, 100);
  progress.style.width = percent+'%'
  startTimer(duration, element);
}

// function that start the timer and every 100 ms call the function advance
var startTimer = function(duration, element){ 
  if(percent < 100) {
    timer = setTimeout(function (){advance(duration, element)}, 100);
  }
}