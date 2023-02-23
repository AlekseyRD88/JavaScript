const text = document.querySelector('.text-input');
text.addEventListener('change', getText);
function getText(event) {
  console.log(event.target.value);
}
