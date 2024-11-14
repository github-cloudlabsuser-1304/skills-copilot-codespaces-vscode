class Calculator {
    add(a, b) {
        return a + b;
    }

    subtract(a, b) {
        return a - b;
    }

    multiply(a, b) {
        return a * b;
    }

    divide(a, b) {
        if (b === 0) {
            throw new Error("Division by zero is not allowed.");
        }
        return a / b;
    }
}

// Example usage:
const calc = new Calculator();
console.log("Addition: " + calc.add(5, 3));        // Output: 8
console.log("Subtraction: " + calc.subtract(5, 3)); // Output: 2
console.log("Multiplication: " + calc.multiply(5, 3)); // Output: 15
console.log("Division: " + calc.divide(5, 3));      // Output: 1.6666666666666667

const Calculator = require('./test');
const assert = require('assert');

describe('Calculator', function() {
    let calc;

    beforeEach(function() {
        calc = new Calculator();
    });

    it('should add two numbers correctly', function() {
        assert.strictEqual(calc.add(5, 3), 8);
    });

    it('should subtract two numbers correctly', function() {
        assert.strictEqual(calc.subtract(5, 3), 2);
    });

    it('should multiply two numbers correctly', function() {
        assert.strictEqual(calc.multiply(5, 3), 15);
    });

    it('should divide two numbers correctly', function() {
        assert.strictEqual(calc.divide(5, 3), 5 / 3);
    });

    it('should throw an error when dividing by zero', function() {
        assert.throws(() => calc.divide(5, 0), Error, "Division by zero is not allowed.");
    });
});