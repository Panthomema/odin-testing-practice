type BinaryOperation = (a: number, b: number) => number;

type Calculator = {
  add: BinaryOperation;
  subtract: BinaryOperation;
  multiply: BinaryOperation;
  divide: BinaryOperation;
};

export const calculator: Calculator = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
  multiply: (a, b) => a * b,
  divide: (a, b) => a / b,
};
