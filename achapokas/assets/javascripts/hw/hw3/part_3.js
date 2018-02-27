// Convert C to F
// Convert F to C
// Convert to either f or C
// https://codepen.io/sarbbottam/pen/fkjGH?editors=1010

var tempForm = document.getElementById("temperature");

function convertToCelcius(tempFormValue) {
  return (tempFormValue - 32) * 5 / 9
}

function ConversionToFarenheit(tempFormValue) {
  return tempFormValue * 9 / 5 + 32
}

function conversion() {
  var tempFormValue = tempForm.querySelector("input").value;

  var activeElement = document.activeElement,
      temperatureConversion = '',
      conversion = ''

  if(activeElement.type === 'submit' && activeElement.name !== '') {
     temperatureConversion += activeElement.value;
  }

  if( temperatureConversion === 'Celcius') {
    conversion += convertToCelcius(tempFormValue)
  } else {
    conversion += ConversionToFarenheit(tempFormValue)
  }

  alert(conversion)
}

tempForm.addEventListener("submit", function(event){
  event.preventDefault();
  conversion()
})

