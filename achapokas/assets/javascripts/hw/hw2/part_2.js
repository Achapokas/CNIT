function Calculate() {
  const form = document.getElementById("calculator"),
        container = document.getElementById('container'),
        findInputs = form.querySelectorAll("input"),
        first = Math.floor(findInputs[0].value),
        second = Math.floor(findInputs[1].value),
        third = Math.floor(findInputs[2].value);

        // Currying is a process to reduce functions of more than one argument to functions of one argument
        //with the help of lambda calculus.

        multiply = (n, m, o) => n * m * o;
        summation = (n, m, o) => n + m + o;
        median = (n, m, o) => (n * m * o / 3);
        min = (n, m, o) => Math.min(n, m ,o);
        max = (n, m ,o) => Math.max(n, m, o);

        const result = `
        <div id="results" class="part--2__results">
          <p>
            <strong>Sum:</strong>
            <span>${summation(first, second, third)}</span>
          </p>
          <p>
            <strong>Average:</strong>
            <span>${median(first, second, third)}</span>
          </p>
          <p>
            <strong>Product:</strong>
            <span>${multiply(first, second, third)}</span>
          </p>
          <p>
            <strong>Smallest Number:</strong>
            <span>${max(first, second, third)}</span>
          </p>
          <p>
            <strong>Largest Number:</strong>
            <span>${min(first, second, third)}</span>
          </p>
        </div>
        `;

        container.insertAdjacentHTML('afterend', result)
}

function Clear() {
  const result = document.getElementById("results");

    // Removes result without addressing a parent id
    if (result.parentNode) {
      result.parentNode.removeChild(result);
    }
}
