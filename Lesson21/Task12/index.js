export function squaredNumbers() {
  const searchForNumber = document.querySelectorAll('.number');
  searchForNumber.forEach((elem) => {
    const number = elem.dataset.number;
    elem.dataset.squaredNumber = number ** 2;
  });
}
