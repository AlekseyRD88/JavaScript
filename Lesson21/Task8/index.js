export function createButton(buttonText) {
  const elemButton = document.createElement('button');
  elemButton.textContent = buttonText;
  const elemBody = document.querySelector('body');
  elemBody.append(elemButton);
}
