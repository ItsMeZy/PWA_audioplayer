//export const Complex = {}
export const Complex = (_num1, _num2) => {
  const num1 = _num1;
  const num2 = _num2;
  return {
    getReal() {
      return num1;
    },
    getComplex() {
      return num2;
    },
    sum(complexNumber) {
      return Complex(
        num1 + complexNumber.getReal(),
        num2 + complexNumber.getComplex()
      );
    },
    mul(complexNumber) {
      return Complex(
        num1 * complexNumber.getReal() - num2 * complexNumber.getComplex(),
        num1 * complexNumber.getComplex() + num2 * complexNumber.getReal()
      );
    },
    mod() {
      return Math.sqrt(Math.pow(num1, 2) + Math.pow(num2, 2), 2);
    }
  };
};
