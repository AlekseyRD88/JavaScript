const buttonElem = document.querySelectorAll('.btn');
for (let i = 0; i < buttonElem.length; i++) {
  let button = buttonElem[i];
  button.addEventListener('click', handleClick);
}
function handleClick(event) {
  const elemEvent = event.target;
  console.log(elemEvent.textContent);
}
