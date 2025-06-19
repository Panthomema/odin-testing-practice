import { calculator } from '../src/calculator';

describe.skip('calculator', () => {
  it('has four operations as functions', () => {
    expect(typeof calculator.add).toBe('function');
    expect(typeof calculator.subtract).toBe('function');
    expect(typeof calculator.multiply).toBe('function');
    expect(typeof calculator.divide).toBe('function');
  });

  describe('add', () => {
    it('adds two numbers correctly', () => {
      expect(calculator.add(2, 3)).toBe(5);
    });

    it('adds negative numbers', () => {
      expect(calculator.add(-2, -3)).toBe(-5);
    });

    it('adds decimal numbers', () => {
      expect(calculator.add(0.1, 0.2)).toBeCloseTo(0.3);
    });
  });

  describe('subtract', () => {
    it('subtracts correctly', () => {
      expect(calculator.subtract(5, 2)).toBe(3);
    });

    it('returns negative result', () => {
      expect(calculator.subtract(2, 5)).toBe(-3);
    });

    it('subtracts decimal numbers', () => {
      expect(calculator.subtract(0.3, 0.2)).toBeCloseTo(0.1);
    });
  });

  describe('multiply', () => {
    it('multiplies correctly', () => {
      expect(calculator.multiply(3, 4)).toBe(12);
    });

    it('returns zero if one operand is zero', () => {
      expect(calculator.multiply(0, 10)).toBe(0);
    });

    it('multiplies negative numbers', () => {
      expect(calculator.multiply(-3, 3)).toBe(-9);
    });

    it('multiplies decimal numbers', () => {
      expect(calculator.multiply(0.1, 0.2)).toBeCloseTo(0.02);
    });
  });

  describe('divide', () => {
    it('divides correctly', () => {
      expect(calculator.divide(10, 2)).toBe(5);
    });

    it('returns decimals for non-integer division', () => {
      expect(calculator.divide(7, 2)).toBe(3.5);
    });

    it('returns 0 when numerator is 0', () => {
      expect(calculator.divide(0, 5)).toBe(0);
    });

    it('returns Infinity when dividing by 0', () => {
      expect(calculator.divide(5, 0)).toBe(Infinity);
    });

    it('returns NaN when dividing 0 by 0', () => {
      expect(calculator.divide(0, 0)).toBeNaN();
    });

    it('divides decimal numbers', () => {
      expect(calculator.divide(0.3, 0.1)).toBeCloseTo(3);
    });
  });
});
