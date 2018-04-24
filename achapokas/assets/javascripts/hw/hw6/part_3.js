
function insertDate() {
  const newDate = new Date(),
        dateString = newDate.toString();
        locale = newDate.toLocaleString();
        utc = newDate.toUTCString(),
        zone = newDate.getTimezoneOffset();

  const template = `
  <div style="margin: 16px 0">
    <p>String: ${dateString}</p>
    <p>Locale: ${locale}</p>
    <p>UTC: ${utc}</p>
    <p>There is a ${zone / 60 } hour difference between PST and UTC</p>
    <p>There is a ${(zone / 60) - 3} hour difference between EST and UTC</p>
  </div>
  `

  document.getElementById("insert").insertAdjacentHTML('beforeend', template)
}

insertDate()

function telephone(form) {
  const value = input.value;

  const slice = `
  <p>The first three numbers are ${value.slice(1,4)}</p>
  <p>The next three numbers are ${value.slice(6, 9)}</p>
  <p>The last four numbers are ${value.slice(10, 14)}</p>
  `
  form.insertAdjacentHTML('afterend', slice)
}

function init() {
  const form = document.forms["telephone"];

  $("#telephone").inputmask({"mask": "(999) 999-9999"});

  form.addEventListener("submit", function(event){
    const input = form.elements["telephone"];

    event.preventDefault();
    telephone(form)
  });
}

init()
