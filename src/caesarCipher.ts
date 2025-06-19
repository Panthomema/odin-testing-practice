export function caesarCipher(text: string, shift: number): string {
  return [...text]
    .map((char) => shiftChar(char, shift)).join('');
}

function shiftChar(char: string, shift: number): string {
  const code = char.charCodeAt(0);

  const isUpper = char >= 'A' && char <= 'Z';
  const isLower = char >= 'a' && char <= 'z';

  if (!isUpper && !isLower) return char;

  const base = (isUpper ? 'A' : 'a').charCodeAt(0);
  const newCode = shiftCharCode(code, shift, base);

  return String.fromCharCode(newCode);
}

function shiftCharCode(charCode: number, shift: number, base: number): number {
  return ((((charCode - base + shift) % 26) + 26) % 26) + base;
}
