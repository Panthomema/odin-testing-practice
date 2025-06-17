import { capitalize } from '../src/capitalize';

test('capitalizes first letter of a normal lowercase word', () => {
  expect(capitalize('hello')).toBe('Hello');
});

test('leaves already capitalized word unchanged', () => {
  expect(capitalize('JavaScript')).toBe('JavaScript');
});

test('capitalizes single character string', () => {
  expect(capitalize('a')).toBe('A');
});

test('returns empty string unchanged', () => {
  expect(capitalize('')).toBe('');
});

test('does not change string starting with non-letter', () => {
  expect(capitalize('1abc')).toBe('1abc');
});

test('capitalizes only the first character', () => {
  expect(capitalize('hElLo')).toBe('HElLo');
});

test('capitalizes unicode accented letter', () => {
  expect(capitalize('élan')).toBe('Élan');
});
