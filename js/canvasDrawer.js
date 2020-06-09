const canvas = document.querySelector('canvas');
var player = document.getElementById("player");

const cHeight = canvas.height;
const cWidth = canvas.width;

export const audioContext = new AudioContext();
var analyser = audioContext.createAnalyser();
var source = audioContext.createMediaElementSource(player);
source.connect(analyser).connect(audioContext.destination);
analyser.fftSize =1024;
var bufferLenght = analyser.frequencyBinCount;
var dataArray = new Uint8Array(bufferLenght);

var worker = new Worker('./worker.js');
const offscreenCanvas = canvas.transferControlToOffscreen(); 
worker.postMessage({offscreenCanvas}, [offscreenCanvas]);

export function workerDraw(){
  var drawVisual = requestAnimationFrame(workerDraw);
  analyser.getByteFrequencyData(dataArray);
  worker.postMessage({dataArray: dataArray, bufferLenght: bufferLenght, cWidth: cWidth, cHeight:cHeight});
}