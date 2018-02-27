// Math.random to generate two numerical values
// Create a multiplication proglem from these values.
//

var mathForm = document.getElementById("math"),
    validateArray = [];

const reducer = (accumulator, currentValue) => accumulator * currentValue;

function random(max) {
  return Math.floor(Math.random() * Math.floor(max))
}


function randomNumbers() {
  var mathFormInput = mathForm.querySelectorAll("input"),
      anotherArray = [random(9), random(9)];


  for(var i = 0; i < mathFormInput.length; i++) {
     mathFormInput[i].value += anotherArray[i]
  }

  // Pushes answer to array to store for later use.
  var result = anotherArray.reduce(reducer);
  anotherArray.push(result)


  validateArray.push(anotherArray)
}


function validate() {
  // Go back and convert into two arrays and compare entire arrays as opposed to result
  var mathFormInput = mathForm.querySelectorAll("input"),
      submitButton = document.getElementById("submit"),
      validationError = `<p id="validation">please try again 😩</p>`,
      validationSuccess = `<p id="success">Great Work! 😉</p>`,
      triggerEquation = `<button id="trigger" type="button">Another one ?</button>`
      findValidation = document.getElementById("validation")
      storedValue = validateArray[0][2],
      userInput = Number(mathFormInput[2].value);

  if (storedValue === userInput) {
    if (findValidation) {
      findValidation.remove();
    }
    submitButton.insertAdjacentHTML('beforebegin', validationSuccess)
    mathForm.insertAdjacentHTML('beforeend', triggerEquation)
  } else {
    if (findValidation) {
      findValidation.remove();
    }
    submitButton.insertAdjacentHTML('beforebegin', validationError)
  }
}

function triggerQuestion() {
  submitButton = document.getElementById("trigger");

  if (submitButton) {
    submitButton.addEventListener("click", function(event){
      mathForm.reset();
      randomNumbers()
    })
  }

}

randomNumbers()

mathForm.addEventListener("submit", function(event){
  event.preventDefault();

  validate()
  triggerQuestion()
})
