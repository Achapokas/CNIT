const form = document.forms["ice-cream"],
      checkboxs = form.elements["flavors[]"],
      checkboxsFieldset = form.elements["checkboxs"],
      text = form.elements["name"];

form.addEventListener("submit", function(event){
  event.preventDefault();

  // if(checkboxs.checked) {
  //   console.log(checkboxs)
  //   if ( document.getElementById('validation')) {
  //     document.getElementById('validation').remove();
  //   }
  //   checkboxsFieldset.insertAdjacentHTML("beforeend", `<p id="validation">What?? No Flavors??</p>`)
  //   return false;
  // } else {
  //   console.log("second")
  //   if ( document.getElementById('validation')) {
  //     document.getElementById('validation').remove();
  //   }
  //   return true
  }})
