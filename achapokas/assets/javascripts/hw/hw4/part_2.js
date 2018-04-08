// Convert percentages to decimal values.
// Create table
// A = P(1 + r)2 = 1000(1 + 5%)(# of years squared) = 1102.50

// for each annualarray (there are 6). we will need 10 calculations

const percentage = function(r) {
    const percent = parseFloat(r);

    return(percent / 100.0)
}

const percentageArray = [],
      annualRateArray = [];

for(var i = 5; i <= 10; i++) {
  percentageArray.push(percentage(i))
}

for(var i = 0; i < percentageArray.length; i++) {
  const annualPercentage = 1 + percentageArray[i];

  annualRateArray.push(annualPercentage)
}

var table;

for(var i = 0; i < annualRateArray.length; i++) {
        const years = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

        const annualInterest = function(year) {
          const total = 1000 * Math.pow(annualRateArray[i], year);

          return total.toFixed(2)
        }

  var template = `<table>
    <thead>
      <th>Year</th>
      <th>Amount on despoit</th>
      <th>Interest Rate</th>
    </thead>
    <tbody>
    ${years.map(year => `
      <tr>
        <td>${year}</td>
        <td>${annualInterest(year)}</td>
        <td>${percentageArray[i]}</td>
      </tr>`
    ).join('')}
    </tbody>
  </table>`

  table += template
}

const interest = document.getElementById("interest");

interest.insertAdjacentHTML('afterbegin', table)
