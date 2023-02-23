let element = document.querySelector('.single-use-btn');
element.addEventListener('click', function onlyOnce() {
  console.log('clicked');
  this.removeEventListener('click', onlyOnce);
});
