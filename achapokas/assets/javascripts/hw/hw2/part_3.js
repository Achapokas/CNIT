// Create a webpage that contains a script that inputs 5 numbers and determines and displays the count of the negative numbers,
// the number of positive numbers, and the number of zeros. For input, use form text boxes. Your results should be displayed
// using a form textarea or a div element. Define a 'Click to Fade Results' button on the form.

function Calculate() {
  const form = document.getElementById("calculator"),
        container = document.getElementById('container'),
        findInputs = form.querySelectorAll("input"),
        first = Math.floor(findInputs[0].value),
        second = Math.floor(findInputs[1].value),
        third = Math.floor(findInputs[2].value),
        fourth = Math.floor(findInputs[3].value),
        fifth = Math.floor(findInputs[4].value);


        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
        const array = new Array;

        array.push(first, second, third, fourth, fifth);

        const greaterThan = array.filter(array => array > 0).length,
              lessThan = array.filter(array => array < 0).length,
              equalToZero = array.filter(array => array == 0).length;

        // Template Strings
        const result = `
        <table class="calculation-table">
          <tr>
            <td>Negative</td>
            <td></td>
            <td>${lessThan}</td>
          </tr>
          <tr>
          <td>Positive</td>
          <td></td>
          <td>${greaterThan}</td>
          </tr>
          <tr>
            <td>Zeros</td>
            <td></td>
            <td>${equalToZero}</td>
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
