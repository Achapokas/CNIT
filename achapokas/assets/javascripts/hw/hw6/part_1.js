function sqrtRoot(value) {
  return Math.sqrt(value);
}

function round(value) {
  return Math.round(value)
}

function roundTo(value, position) {
  return Math.round( value * position + .5 ) / position
}

function template(form) {
  const input = form.elements["integer"],
        inputValue = parseFloat(input.value);

  const template = `<ul>
    <li>Number: ${inputValue}</p>
    <li>Rounded to Nearest Integer: ${round(inputValue)}</li>
    <li>Square root of the number, rounded: ${round(sqrtRoot(inputValue))}</li>
    <li>Round to 10th: ${roundTo(inputValue, 10).toFixed(2)}</li>
    <li>Round to 100th: ${roundTo(inputValue, 100).toFixed(3)}</li>
    <li>Round to 1000th: ${roundTo(inputValue, 1000).toFixed(4)}</li>
  </ul>
  `
  return template
}

function insertTemplate(form) {
  form.insertAdjacentHTML('afterend', template(form))
}

function init() {
  const form = document.forms["integers"];

  form.addEventListener("submit", function(event){ event.preventDefault(); insertTemplate(form)})
}

init()
