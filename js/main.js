import playUrl from '../icons/play.png';
import pauseUrl from '../icons/pause.png';
import {restartAnimation} from './playpause_anime';
import * as audioController from './audioController';
import {progressBarPlayRegister, progressBarPauseRegister} from './progressBarController';
import {audioContext, draw} from './canvasDrawer';



// onclick button play-pause ----------------------------------------------------------
var button_play_pause = document.getElementById("playpause");
var isPlay = false;

button_play_pause.onclick = function(){
  restartAnimation();
    if (isPlay){
        audioController.pauseAudio();
        button_play_pause.style.backgroundImage = "url("+playUrl+")";
    }else{
        audioController.playAudio();
        button_play_pause.style.backgroundImage = "url("+pauseUrl+")";
    }
    isPlay = !isPlay;
    if (audioContext.state !== 'running') {
      audioContext.resume();
    }
}

// progress bar -------------------------------------------------------------------
progressBarPlayRegister();
progressBarPauseRegister();

// canvas -------------------------------------------------------------------------
draw();
//const offscreenCanvas = canvas.transferControlToOffscreen(); 
//worker.postMessage({ offscreenCanvas }, [offscreenCanvas]);
//var worker = new Worker('./worker.js');
//const canvas = document.querySelector('canvas');
//const canvasContext = canvas.getContext("2d");
//var player = document.getElementById("player");
//worker.postMessage([canvas,player]);
