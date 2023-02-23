const findCheckbox = document.querySelector('.task-status');
function getCheckbox() {
  if (findCheckbox.checked === true) {
    console.log(true);
  } else {
    console.log(false);
  }
}
findCheckbox.addEventListener('change', getCheckbox);
