const inputElem = document.querySelector('.text-input');
function getInput() {
  console.log(inputElem.value);
}
inputElem.addEventListener('change', getInput);
