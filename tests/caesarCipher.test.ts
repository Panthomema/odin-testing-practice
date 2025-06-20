import { caesarCipher } from '../src/caesarCipher';

describe.skip('caesarCipher', () => {
  it('returns empty string when input is empty', () => {
    expect(caesarCipher('', 5)).toBe('');
  });

  it('shifts lowercase letters by given positive factor', () => {
    expect(caesarCipher('ada', 3)).toBe('dgd');
  });

  it('shifts lowercase letters by a given negative factor', () => {
    expect(caesarCipher('dgd', -3)).toBe('ada');
  });

  it('shifts uppercase letters by a given positive factor', () => {
    expect(caesarCipher('ADA', 3)).toBe('DGD');
  });

  it('shifts uppercase letters by a given negative factor', () => {
    expect(caesarCipher('DGD', -3)).toBe('ADA');
  });

  it('wraps around from z to a', () => {
    expect(caesarCipher('xyz', 4)).toBe('bcd');
  });

  it('wraps around from A to Z', () => {
    expect(caesarCipher('BCD', -4)).toBe('XYZ');
  });

  it('wraps around from Z to A', () => {
    expect(caesarCipher('XYZ', 4)).toBe('BCD');
  });

  it('leaves punctuation unchanged', () => {
    expect(caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!');
  });

  it('leaves spaces unchanged', () => {
    expect(caesarCipher('a b c', 1)).toBe('b c d');
  });

  it('leaves numbers unchanged', () => {
    expect(caesarCipher('abc123', 2)).toBe('cde123');
  });

  it('leaves mixed non-alpha characters unchanged', () => {
    expect(caesarCipher('Test! @#$', 5)).toBe('Yjxy! @#$');
  });

  it('shifts mixed case strings preserving case', () => {
    expect(caesarCipher('HeLLo WoRLd', 3)).toBe('KhOOr ZrUOg');
  });

  it('returns the same string if shift is 0', () => {
    expect(caesarCipher('Test', 0)).toBe('Test');
  });
  
  it('handles shift values larger than 26 by using modulo', () => {
    expect(caesarCipher('abc', 27)).toBe('bcd'); 
  });

  it('handles shift values smaller than -26 by using modulo', () => {
    expect(caesarCipher('abc', -27)).toBe('zab');
  });
});
