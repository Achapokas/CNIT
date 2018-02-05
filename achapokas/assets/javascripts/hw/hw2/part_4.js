// Create a webpage that contains a script that calculates the squares and cubes of the numbers 1 to 6 and
// outputs text that displays (using document.write statements) the resulting values in a table format

const square = `<table class="square-table">
  <thead>
    <tr>
      <th>Number</th>
      <th>Square</th>
      <th>Cube</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>${Math.pow(1, 1)}</td>
      <td>${Math.pow(1, 1, 1)}</td>
    </tr>
    <tr>
      <td>2</td>
      <td>${Math.pow(2, 2)}</td>
      <td>${Math.pow(2, 3)}</td>
    </tr>
    <tr>
      <td>3</td>
      <td>${Math.pow(3, 2)}</td>
      <td>${Math.pow(3, 3)}</td>
    </tr>
    <tr>
      <td>4</td>
      <td>${Math.pow(4, 2)}</td>
      <td>${Math.pow(4, 3)}</td>
    </tr>
    <tr>
      <td>5</td>
      <td>${Math.pow(5, 2)}</td>
      <td>${Math.pow(5, 3)}</td>
    </tr>
    <tr>
      <td>6</td>
      <td>${Math.pow(6, 2)}</td>
      <td>${Math.pow(6, 3)}</td>
    </tr>
  </tbody>
</table>`;

document.write(square)

