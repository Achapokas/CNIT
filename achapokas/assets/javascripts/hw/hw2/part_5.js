// Create a webpage that contains a script that inputs 5 numbers and determines and displays the count of the negative numbers,
// the number of positive numbers, and the number of zeros. For input, use form text boxes. Your results should be displayed
// using a form textarea or a div element. Define a 'Click to Fade Results' button on the form.

function Calculate() {
  var l10nUSD = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }),
      form = document.getElementById("calculator"),
      container = document.getElementById('container'),
      findInputs = form.querySelectorAll("input"),
      first = findInputs[0].value;

      console.log(first);

      var toPound = (first * 0.77521).toFixed(2),
          toCanadian = (first * 1.34461).toFixed(2),
          toEuro = (first * 0.88754).toFixed(2),
          toYen = (first * 109.350).toFixed(2),
          toPaso = (first * 18.2806).toFixed(2);

      // Template Strings
      const result = `
      <table class="calculation-table">
        <tr>
          <td>British Pound</td>
          <td></td>
          <td>${toPound}</td>
        </tr>
        <tr>
        <td>Canadian Dollar</td>
        <td></td>
        <td>${toCanadian}</td>
        </tr>
        <tr>
          <td>Euro</td>
          <td></td>
          <td>${toEuro}</td>
        </tr>
        <tr>
          <td>Japanese Yen</td>
          <td></td>
          <td>${toYen}</td>
        </tr>
        <tr>
          <td>Mexican Paso</td>
          <td></td>
          <td>${toPaso}</td>
        </tr>
      </table>
      `;

        container.insertAdjacentHTML('afterend', result)
}

document.getElementById("calculator").addEventListener("submit", function(event){
    event.preventDefault();
    Calculate();
});


$('#reset').on('click', function(event) {
    event.preventDefault();
    $('#calculator').find('fieldset input').val("");
    $('.calculation-table').fadeTo("slow", 0)
})
