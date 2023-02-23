import getMinSquaredNumber from './getMinSquaredNumber';
it('should return minimal squared number', () => {
  const result = getMinSquaredNumber([]);
  expect(result).toEqual(0);
});
it('should return minimal squared number', () => {
  const result = getMinSquaredNumber(['1', '5', '3', '10']);
  expect(result).toEqual(1);
});
it('should return minimal squared number', () => {
  const result = getMinSquaredNumber([1, 5, 10, -5, -12]);
  expect(result).toEqual(1);
});
