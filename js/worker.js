import { Complex } from './Complex';




self.addEventListener('message', (args) => {

    console.log("args: ", args);

    const context = args.data.offscreenCanvas.getContext('2d');
    const imageData = context.createImageData(cWidth, cHeight);

    for (let i = 0; i < imageData.data.length; i++) {
        imageData.data[i] = data[i];
    }
    context.putImageData(imageData, 0, 0);
});