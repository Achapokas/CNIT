const form = document.forms["square"],
      sides = form.elements["sides"];



form.addEventListener("submit", function(event){
  event.preventDefault();


  if(sides.value < 2 || sides.value > 10){
    alert("Number must be between 2 - 10")
  } else {
    var array = [],
        arrayAstrick = [];

    for(var i = 1; i <= sides.value; i++){
      array.push(i)
    }

    var astrick = Array.from(array, x => " ` "),
        joinArray = astrick.join("")

    for(var n = 2; n < astrick.length; n++){
      arrayAstrick.push(astrick.slice(9))
    }

    const markup = `
      <p>${joinArray}</p>
      <p>${joinArray}</p>
    `

    form.insertAdjacentHTML("afterend", markup)
  }
})
