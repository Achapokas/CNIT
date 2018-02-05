// Create a webpage that contains a script that inputs three integers via form text boxes and displays the sum, average, and product
// of the three integers, and the smallest and largest of the three integers. Your results should be displayed using alerts or a form
// textarea or a div element.


function Calculate() {
  const form = document.getElementById("calculator"),
        container = document.getElementById('container'),
        findInputs = form.querySelectorAll("input"),
        first = Math.floor(findInputs[0].value),
        second = Math.floor(findInputs[1].value),
        third = Math.floor(findInputs[2].value);

        // Currying is a process to reduce functions of more than one argument to functions of one argument
        // with the help of lambda calculus.
        // https://blog.benestudio.co/currying-in-javascript-es6-540d2ad09400

        multiply = (n, m, o) => n * m * o;
        summation = (n, m, o) => n + m + o;
        median = (n, m, o) => Math.round(n * m * o / 3);
        min = (n, m, o) => Math.min(n, m ,o);
        max = (n, m ,o) => Math.max(n, m, o);

        // Template Strings
        const result = `
        <table id="results" class="calculation-table">
          <tr>
            <td>Sum</td>
            <td></td>
            <td>${summation(first, second, third)}</td>
          </tr>
          <tr>
            <td>Average</td>
            <td></td>
            <td>${median(first, second, third)}</td>
          </tr>
          <tr>
            <td>Product</td>
            <td></td>
            <td>${multiply(first, second, third)}</td>
          </tr>
          <tr>
            <td>Smallest</td>
            <td></td>
            <td>${min(first, second, third)}</td>
          </tr>
          <tr>
            <td>Largest</td>
            <td></td>
            <td>${max(first, second, third)}</td>
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
