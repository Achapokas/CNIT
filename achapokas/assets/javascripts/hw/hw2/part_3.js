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
        <div id="results" class="part__results">
          <p>
            <span>There are <strong>${greaterThan}</strong> postive Numbers</span>
          </p>
          <p>
            <span>There are <strong>${lessThan}</strong> negative Numbers</span>
          </p>
          <p>
            <span>There are <strong>${equalToZero}</strong> zeros</span>
          </p>
        </div>
        `;

        container.insertAdjacentHTML('afterend', result)
}

$('#clear').on('click', function() {
    $('#calculator').children().val("");
    $('#results').fadeTo("slow", 0)
})
