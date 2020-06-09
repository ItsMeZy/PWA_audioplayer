import {playAudio,pauseAudio} from './audioController';

describe('audioController isolated unit tests suite',()=>{
    it('playAudio function should be defined',()=>{
        expect(playAudio).toBeDefined();
    });

    it('pauseAudio function should be defined',()=>{
        expect(pauseAudio).toBeDefined();
    });

});