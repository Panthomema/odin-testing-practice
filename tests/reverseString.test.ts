import { reverseString } from '../src/reverseString';

describe('reverseString', () => {
  it('reverses a normal string', () => {
    expect(reverseString('hello')).toBe('olleh');
  });

  it('reverses empty string', () => {
    expect(reverseString('')).toBe('');
  });

  it('reverses palindrome unchanged', () => {
    expect(reverseString('madam')).toBe('madam');
  });

  it('reverses string with spaces and punctuation', () => {
    expect(reverseString('hello world!')).toBe('!dlrow olleh');
  });

  it('reverses string with emojis', () => {
    expect(reverseString('🙂🙃')).toBe('🙃🙂');
  });
});
