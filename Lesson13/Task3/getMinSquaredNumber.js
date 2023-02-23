export default (arr) => {
  if (!Array.isArray(arr) && !arr.length) {
    return null;
  }
  const absNumbers = arr.map(Math.abs);
  const min = Math.min(...absNumbers);
  return min * min;
};
