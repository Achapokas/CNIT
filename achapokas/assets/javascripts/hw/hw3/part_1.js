function final(array, calculate) {
  var calculateAverage = parseInt((.5 * array[0]) + (.2 * array[1]) + (.2 * array[2]) + (.1 * array[3])),
      average = Math.round(calculateAverage),
      letter = '',
      alert = "Student must retake the course";


  switch(true) {
    case average >= 90: {
      letter = "A"
      break;
    }
    case average >= 80: {
      letter = "B"
      break;
    }
    case average >= 70: {
      letter = "C"
      break;
    }
    case average >= 60: {
      letter = "D"
      break;
    }
    case average >= 0: {
      letter = "F"
    }
  }

  const grade = `<p class="grade__final"
  <span>Grade:${average}</span>
  <span>Letter: ${letter}</span>
  ${average <= 60  ? `<p style="color: red">Student must retake the course</p>` : ''}
  </p>`;

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

// jQuery toggle
$(function(){
  var $toggle = $('#calculate').find('a');

  $toggle.on('click', function(event){
    event.preventDefault();
    $(this).next().toggleClass('hide');
  });
});

