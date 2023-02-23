export function finishForm() {
  const search = document.querySelector('form');
  const search1 = document.querySelector('input');
  search1.setAttribute('type', 'password');
  const newInput = document.createElement('input');
  newInput.setAttribute('type', 'text');
  newInput.setAttribute('name', 'login');
  search.insertBefore(newInput, search1);
}
