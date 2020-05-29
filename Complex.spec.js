import {Complex} from './Complex';

describe('Complex isolated unit tests suite',()=>{
    it('complex should be defined',()=>{
        expect(Complex).toBeDefined();
    });

    it('2+2i + 2+2i = 4+4i',()=>{
        let a = Complex(2,2);
        let b = Complex(2,2);
        expect((a.sum(b)).getReal()).toBe(4);
        expect((a.sum(b)).getComplex()).toBe(4);
    });

    it('2+2i * 2+2i = 8i',()=>{
        let a = Complex(2,2);
        let b = Complex(2,2);
        expect((a.mul(b)).getReal()).toBe(0);
        expect((a.mul(b)).getComplex()).toBe(8);
    });

    it('complexnumber.mod() = 2.8284271247461903',()=>{
        let a = Complex(2,2);
        expect(a.mod()).toBe(2.8284271247461903);
    });
});