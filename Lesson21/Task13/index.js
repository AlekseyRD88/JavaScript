export function getSection(num) {
  let elem = document.querySelector(`span[data-number="${num}"]`);
  let parent = elem.closest('.box');
  return parent.dataset.section;
}
