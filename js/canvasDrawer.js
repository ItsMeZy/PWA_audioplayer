const canvas = document.querySelector('canvas');
const canvasContext = canvas.getContext("2d");
var player = document.getElementById("player");

const cHeight = canvas.height;
const cWidth = canvas.width;

export var audioContext = new AudioContext();
var analyser = audioContext.createAnalyser();
var source = audioContext.createMediaElementSource(player);
source.connect(analyser).connect(audioContext.destination);
analyser.fftSize =1024;
var bufferLenght = analyser.frequencyBinCount;
var dataArray = new Uint8Array(bufferLenght);
canvasContext.clearRect(0, 0, cWidth, cHeight);

export function draw(){
  var drawVisual = requestAnimationFrame(draw);
  analyser.getByteFrequencyData(dataArray);
  canvasContext.fillStyle = '#f2f2f2';
  canvasContext.fillRect(0, 0, cWidth, cHeight);
  var barWidth = (cWidth / bufferLenght) * 2.5;
  var barHeight;
  var x = 0;
  for(var i = 0; i < bufferLenght; i++) {
    barHeight = dataArray[i];

    canvasContext.fillStyle = 'rgb(0,27,' + (barHeight+45) + ')';
    canvasContext.fillRect(x,cHeight-barHeight/2,barWidth,barHeight);

    x += barWidth + 1;
  }
};
