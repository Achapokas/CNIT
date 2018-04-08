var change = document.forms["change"],
    button = document.getElementById("submit");

function elements(element) {
  return element.elements["navigation"]
}

function locations(change) {
  var select = elements(change);
  var myDestination = select.options[select.selectedIndex].value;

  window.location = myDestination;
}

change.addEventListener("change", function(){
  locations(change)
})

button.addEventListener("click", function(){
  locations(click)
})
