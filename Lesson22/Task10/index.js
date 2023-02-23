const pageElem = document.querySelectorAll('.pagination__page');
for (let i = 0; i < pageElem.length; i++) {
  let page = pageElem[i];
  page.addEventListener('click', handleClick);
}
function handleClick(event) {
  console.log(event.target.getAttribute('data-page-number'));
}
