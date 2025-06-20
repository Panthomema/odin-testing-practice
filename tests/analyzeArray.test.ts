import { analyzeArray } from '../src/analyzeArray';

describe('analyzearray', () => {
  it('throws on empty array', () => {
    expect(() => analyzeArray([])).toThrow('Array should not be empty');
  });

  it('works with a single-element array', () => {
    expect(analyzeArray([7])).toEqual({
      average: 7,
      min: 7,
      max: 7,
      length: 1,
    });
  });

  it('works with all equal numbers', () => {
    expect(analyzeArray([3, 3, 3])).toEqual({
      average: 3,
      min: 3,
      max: 3,
      length: 3,
    });
  });

  it('works with positive numbers', () => {
    expect(analyzeArray([1, 2, 3, 4, 5])).toEqual({
      average: 3,
      min: 1,
      max: 5,
      length: 5,
    });
  });

  it('works with negative numbers', () => {
    expect(analyzeArray([-3, -5, -1])).toEqual({
      average: -3,
      min: -5,
      max: -1,
      length: 3,
    });
  });

  it('works with mixed positive and negative numbers', () => {
    expect(analyzeArray([-2, 4, -1, 6])).toEqual({
      average: 1.75,
      min: -2,
      max: 6,
      length: 4,
    });
  });

  it('works with decimal numbers', () => {
    const result = analyzeArray([1.5, 2.5, 3.5]);
    expect(result.min).toBe(1.5);
    expect(result.max).toBe(3.5);
    expect(result.length).toBe(3);
    expect(result.average).toBeCloseTo(2.5);
  });

  it('handles Infinity correctly', () => {
    expect(analyzeArray([1, 2, Infinity])).toEqual({
      average: Infinity,
      min: 1,
      max: Infinity,
      length: 3,
    });
  });

  it('works with large arrays', () => {
    const largeArray = Array.from({ length: 10000 }, (_, i) => i);
    const result = analyzeArray(largeArray);
    expect(result.length).toBe(10000);
    expect(result.min).toBe(0);
    expect(result.max).toBe(9999);
    expect(result.average).toBeCloseTo(4999.5);
  });  
});
