import { reverseString } from '../src/reverseString';

test('reverses a normal string', () => {
  expect(reverseString('hello')).toBe('olleh');
});

test('reverses empty string', () => {
  expect(reverseString('')).toBe('');
});

test('reverses palindrome unchanged', () => {
  expect(reverseString('madam')).toBe('madam');
});

test('reverses string with spaces and punctuation', () => {
  expect(reverseString('hello world!')).toBe('!dlrow olleh');
});

test('reverses string with emojis', () => {
  expect(reverseString('🙂🙃')).toBe('🙃🙂');
});