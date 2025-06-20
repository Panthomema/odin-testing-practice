type ArrayInfo = {
  average: number;
  min: number;
  max: number;
  length: number;
};

export function analyzeArray(arr: number[]): ArrayInfo {
  if (arr.length === 0) throw new Error('Array should not be empty');

  return {
    average: arr.reduce((prev, curr) =>  prev + curr, 0) / arr.length,
    min: Math.min(...arr),
    max: Math.max(...arr),
    length: arr.length,
  };
}
