import { Complex } from './Complex';
const cWidth = 336;
const cHeight = 648;
const ratio = 180;
let threshold = 2;
const xCenter = cWidth / 2;
const yCenter = cHeight / 2;
const maxIterations = 200;

// z = z**2 + c;
let data = [];
let y0 = 0,
    x0 = 0
    ;
for (let y = y0; y < cHeight + y0; y++) {
    for (let x = x0; x < cWidth + x0; x++) {
        let z, c;
        c = Complex((x - xCenter) / ratio, (y - yCenter) / ratio);
        z = c;
        for (let i = 0; i < maxIterations; i++) {
            z = z.mul(z);
            z = z.sum(c);
            let modulus = z.mod();
            if (modulus > threshold) {
                let val = i * 4;
                data[data.length] = 255 - val;
                data[data.length] = 255 - val;
                data[data.length] = 255 - val;
                data[data.length] = 255;
                break;
            }
            if (i === maxIterations - 1 && modulus < 2) {
                data[data.length] = 0;
                data[data.length] = 0;
                data[data.length] = 0;
                data[data.length] = 255;
            }
        }
    }
}
//self.postMessage({
//    topic: 'done',
//    mandelbrot: data
//});




self.addEventListener('message', (args) => {

    console.log("args: ", args);

    const context = args.data.offscreenCanvas.getContext('2d');
    const imageData = context.createImageData(cWidth, cHeight);

    for (let i = 0; i < imageData.data.length; i++) {
        imageData.data[i] = data[i];
    }
    context.putImageData(imageData, 0, 0);
});