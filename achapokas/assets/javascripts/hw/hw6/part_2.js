

function alertWindow(textInput) {
  var newWindow = window.open("alert:blank", "newwindow", "height=100, width=300, top=10, left=10, resizable=yes");

  newWindow.document.open();
  newWindow.document.write(`Search character ${textInput} not found in text string!`)
  newWindow.document.close();
}

function insertText(textIndex, textInput) {

}

function characterMatch(form) {
  const textArea = form.elements["sentence"].value,
        textInput = form.elements["character"].value,
        textIndex = [];

  for(var i = 0; i < textArea.length; i++) {
    if ( textArea[i].toLowerCase() === textInput ) {
      textIndex.push(textArea.charAt(i))
    }
  }

  if ( textIndex.length > 0 ) {
    const isPresent = document.getElementsByClassName('text');

    const template = `
      <p class="text">Letter ${textInput} count =  ${textIndex.length}</p>
    `
    form.insertAdjacentHTML('afterend', template)
  } else {
    alertWindow(textInput)
  }
}


function init() {
  const form = document.forms["char"];

  form.addEventListener("submit", function(event) {
    event.preventDefault();

    characterMatch(form)
  });
}

init()

