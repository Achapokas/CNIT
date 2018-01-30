function Calculate() {
  const form = document.getElementById("calculator"),
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

        const markup = `
        <p>
          <span>Sum:</span>
          <span>${summation(first, second, third)}</span>
        </p>
        <p>
          <span>Average:</span>
          <span>${median(first, second, third)}</span>
        </p>
        <p>
          <span>Product:</span>
          <span>${multiply(first, second, third)}</span>
        </p>
        <p>
          <span>Smallest Number:</span>
          <span>${max(first, second, third)}</span>
        </p>
        <p>
          <span>Largest Number:</span>
          <span>${min(first, second, third)}</span>
        </p>
        `;

        form.insertAdjacentHTML('afterend', markup)
}
