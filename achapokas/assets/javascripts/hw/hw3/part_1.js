function final(array, calculate) {
  var final = parseInt((.5 * array[0]) + (.2 * array[1]) + (.2 * array[2]) + (.1 * array[3]));

  switch(true) {
    case final >= 90: {
      console.log("you bad")
      break;
    }
    case final >= 80: {
      console.log("you alright")
      break;
    }
    case final >= 70: {
      console.log("your average")
      break;
    }
    case final >= 60: {
      console.log("that terrible")
      break;
    }
    case final >= 0: {
      console.log("damn")
    }
  }

  const grade = `<p class="grade__final"
  <span>Final Grade: ${final}</span
  </p>`

  calculate.insertAdjacentHTML('afterend', grade)
}

function validate(inputValues, calculate) {
  // Create a script that checks for valid input, i.e., that the input is between 0-100

  var array = [];

  for(var i = 0; i < inputValues.length; i++) {
    var grades = inputValues[i].value;
    array.push(grades);
  }

  var lessThanZero = function(element) {
    return element < 0 || element > 100
  }

  if (array.some(lessThanZero)) {
    alert("Accepts integers greater than zero and less than a hundred");
    for(var i = 0; i < inputValues.length; i++) {
      if (inputValues[i].value < 0 || inputValues[i].value > 100) {
        inputValues[i].style.border = "1px solid red";
        inputValues[i].value = "";
      }
    }
  } else {
    final(array, calculate);
  }

}

document.getElementById("calculate").addEventListener("submit", function(event){
    var calculate = document.getElementById("calculate"),
        inputValues = calculate.querySelectorAll('input');

    event.preventDefault();

    validate(inputValues, calculate)
});
