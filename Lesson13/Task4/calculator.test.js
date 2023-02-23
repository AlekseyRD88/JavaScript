import { calc } from './calculator';
it('should add numbers', () => {
  const result = calc('4 + 2');
  expect(result).toEqual(6);
});
it('should subtract numbers', () => {
  const result = calc('4 - 2');
  expect(result).toEqual(2);
});
it('should multiply numbers', () => {
  const result = calc('4 * 2');
  expect(result).toEqual(8);
});
it('should divide numbers', () => {
  const result = calc('4 / 2');
  expect(result).toEqual(2);
});
it('should return null', () => {
  const result = calc(4 - 2);
  expect(result).toEqual(null);
});
