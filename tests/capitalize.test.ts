import { capitalize } from '../src/capitalize';

describe.skip('capitalize', () => {
  it('capitalizes first letter of a normal lowercase word', () => {
    expect(capitalize('hello')).toBe('Hello');
  });

  it('leaves already capitalized word unchanged', () => {
    expect(capitalize('JavaScript')).toBe('JavaScript');
  });

  it('capitalizes single character string', () => {
    expect(capitalize('a')).toBe('A');
  });

  it('returns empty string unchanged', () => {
    expect(capitalize('')).toBe('');
  });

  it('does not change string starting with non-letter', () => {
    expect(capitalize('1abc')).toBe('1abc');
  });

  it('capitalizes only the first character', () => {
    expect(capitalize('hElLo')).toBe('HElLo');
  });

  it('capitalizes unicode accented letter', () => {
    expect(capitalize('élan')).toBe('Élan');
  });
});

