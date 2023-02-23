export function finishList() {
  const elem1 = document.createElement('li');
  const elem4 = document.createElement('li');
  const elem6 = document.createElement('li');
  const elem8 = document.createElement('li');
  elem1.textContent = 1;
  elem4.textContent = 4;
  elem6.textContent = 6;
  elem8.textContent = 8;
  const elemList = document.querySelector('.list');
  elemList.prepend(elem1);
  elemList.append(elem8);
  const middleList = document.querySelector('.special');
  middleList.before(elem4);
  middleList.after(elem6);
}
