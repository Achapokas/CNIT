const form = document.forms["ice-cream"],
      checkboxes = form.elements["flavors[]"],
      checkboxsFieldset = form.elements["checkboxs"],
      name = form.elements["name"];

form.addEventListener("submit", function(event){
  event.preventDefault();

  const array = [];

  for(var i = 0; i < checkboxes.length; i++) {
    var checkbox = checkboxes[i];

    array.push(checkbox.checked)
  }

  if(array.find(k => k == true )) {
    var validation = document.getElementById("validation");
    if(validation) {
      validation.remove();
    }
  } else {
    var validation = document.getElementById("validation");
    if(validation) {
      validation.remove();
    }
    checkboxsFieldset.insertAdjacentHTML("beforeEnd", `<p id="validation">What? You don't have a favorite flavor??</p>`)
    return false
  }

  alert("Thank you for answering the ice cream survey!")
});
