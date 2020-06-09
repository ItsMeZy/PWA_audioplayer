import playUrl from '../icons/play.png';
import pauseUrl from '../icons/pause.png';
import {restartAnimation} from './playpause_anime';
import * as audioController from './audioController';
import {progressBarPlayRegister, progressBarPauseRegister} from './progressBarController';
import {audioContext} from './canvasDrawer';
import {workerDraw} from './canvasDrawer';

import '../scss/main.scss';


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
    if(audioContext.state !== "running"){
      audioContext.resume();
    }
    isPlay = !isPlay;
}

// progress bar -------------------------------------------------------------------
progressBarPlayRegister();
progressBarPauseRegister();

// canvas -------------------------------------------------------------------------

workerDraw();

