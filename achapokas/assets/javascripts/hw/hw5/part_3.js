const request = new Request('https://api.myjson.com/bins/briob' );

fetch(request)
  .then(response => {
    if (response.status === 200) {
      return response.json();
    } else {
      throw new Error(`Cannot locate ${request} file.`);
    }
  })
  .then(response => {
    parseObject(response)
  })

function caseSensitive(stateVal) {
  if(stateVal.length > 2) {
    return stateVal.charAt(0).toUpperCase() + stateVal.slice(1)
  } else {
    return stateVal.toUpperCase()
  }
}

function stateAbbrev(nameAr, abbrAr, valueAr) {
  const form = document.forms["census"],
        state = form.elements["state"],
        full = form.elements["full"];

  form.addEventListener("submit", function(event) {
    const stateVal = state.value;

    event.preventDefault();

    if(nameAr.find(k => k == caseSensitive(stateVal)) || abbrAr.find(k => k == caseSensitive(stateVal))) {

      const results = valueAr.filter(x => x.includes(caseSensitive(stateVal)));

      for(let i = 0; i < results.length; i++) {
        form.elements["full"].value = results[i][0]
        form.elements["abbr"].value = results[i][1]
        form.elements["capital"].value = results[i][2]
        form.elements["population"].value = results[i][3]
      }
    } else {
        alert("State not found")
    }
  })
}

function parseObject(response) {
    const nameAr = [],
        abbrAr = [],
        valueAr = [];


  stateAbbrev(nameAr, abbrAr, valueAr)

  for(let i = 0; i < response.length; i++) {
    const name = response[i].name,
          abbr = response[i].abbreviation,
          values = Object.values(response[i]);

    nameAr.push(name);
    abbrAr.push(abbr);
    valueAr.push(values)
  }
}

$("h3").on("click", function(event){
  $(event.currentTarget).siblings("p").toggleClass("hide")
})
