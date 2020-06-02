import playUrl from '../icons/play.png';
import pauseUrl from '../icons/pause.png';
import anime from 'animejs/lib/anime.es';

var playpause_anime = anime({
  targets: '#playpause',
  rotate:'1turn',
  duration:200
});

var button_play_pause = document.getElementById("playpause");
var player = document.getElementById("player");
var isPlay = false;

button_play_pause.onclick = function(){
  playpause_anime.restart();
    if (isPlay){
        pauseAudio();
        button_play_pause.style.backgroundImage = "url("+playUrl+")";
    }else{
        playAudio();
        button_play_pause.style.backgroundImage = "url("+pauseUrl+")";
    }
    isPlay = !isPlay;
}


function playAudio(){
    player.play();
}

function pauseAudio(){
    player.pause();
}


var timer;
var percent = 0;

//call the function when player is playing
player.addEventListener("playing", function(_event) {
  var duration = _event.target.duration;
  advance(duration, player);
});

//called when the function in on pause
player.addEventListener("pause", function(_event) {
  clearTimeout(timer);
});

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
const canvas = document.querySelector('canvas');






const ctx = canvas.getContext("2d");
const cHeight = canvas.height;
const cWidth = canvas.width;

//const offscreenCanvas = canvas.transferControlToOffscreen(); 
//worker.postMessage({ offscreenCanvas }, [offscreenCanvas]);

  
