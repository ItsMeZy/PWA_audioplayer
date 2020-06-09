import playUrl from '../icons/play.png';
import pauseUrl from '../icons/pause.png';
import {restartAnimation} from './playpause_anime';
import * as audioController from './audioController';
import {progressBarPlayRegister, progressBarPauseRegister} from './progressBarController';
import {workerDraw} from './canvasDrawer';



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
}

// progress bar -------------------------------------------------------------------
progressBarPlayRegister();
progressBarPauseRegister();

// canvas -------------------------------------------------------------------------

workerDraw();

