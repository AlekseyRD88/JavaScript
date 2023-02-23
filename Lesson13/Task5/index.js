export const reverseArray = (numbers) => {
  if (!Array.isArray(numbers)) {
    return null;
  }
  let newArray = numbers.slice();
  newArray.reverse();
  return newArray;
};
export const withdraw = (clients, balances, client, amount) => {
  //put your code here
  const result = clients.indexOf(client);
  if (balances[result] < amount) {
    return -1;
  }
  balances[result] -= amount;
  return balances[result];
};
export const getAdults = (obj) => {
  // put your code here
  let newObj = {};
  for (let value in obj) {
    if (obj[value] >= 18) {
      newObj[value] = obj[value];
    }
  }
  return newObj;
};
