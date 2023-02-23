import { reverseArray, withdraw, getAdults } from './index';
it('should check reverse array', () => {
  const result = reverseArray('hero');
  expect(result).toEqual(null);
});
it('should check reverse array one more time', () => {
  const result = reverseArray([1, 2, 3, 5]);
  expect(result).toEqual([5, 3, 2, 1]);
});
it('should check reverse array the third time', () => {
  const result = reverseArray(['John', 'Emily', 'Jessica']);
  expect(result).toEqual(['Jessica', 'Emily', 'John']);
});
it('should check withdraw', () => {
  const result = withdraw(['Ann', 'Leon', 'User'], [1400, 87, -6], 'Leon', 30);
  expect(result).toEqual([1400, 57, -6]);
});
it('should check withdraw with minus', () => {
  const result = withdraw(['Ann', 'Leon', 'Mary'], [1400, 87, -6], 'Mary', 50);
  expect(result).toEqual([1400, 87, -6]);
});
it('should check withdraw with a greater sum', () => {
  const result = withdraw(['Ann', 'Leon', 'Mary'], [1400, 87, -6], 'Ann', 1550);
  expect(result).toEqual([1400, 87, -6]);
});
it('should check the age of people', () => {
  const result = getAdults({ 'John Mirr': 19, Tom: 17, Bob: 18 });
  expect(result).toEqual({ 'John Mirr': 19, Bob: 18 });
});
it('should check the age of people with two elements', () => {
  const result = getAdults({ Ann: 56, Andrey: 7 });
  expect(result).toEqual({ Ann: 56 });
});
it('should check the age of people with three elements', () => {
  const result = getAdults({ Dereck: 50, Jill: 22, Martin: 15, John: 18 });
  expect(result).toEqual({ Dereck: 50, Jill: 22, John: 18 });
});
