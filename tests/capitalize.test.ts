import { capitalize } from '../src/capitalize';

test('capitalizes the first letter of a string', () => {
  expect(capitalize('hello')).toBe('Hello');
  expect(capitalize('javascript')).toBe('Javascript');
  expect(capitalize('a')).toBe('A');
});

test('behaves correctly with empty strings', () => {
  expect(capitalize('')).toBe('');
});
