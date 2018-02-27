// Input that takes sales persons name
// When the user hovers over the input, trigger a tooltip
// https://fog.ccsf.edu/~srubin/h3pt2display.html

function round(value) {
  return Math.round((value) * 100) / 100
}

function totalEarned(sum) {
  var total =  parseInt(200 + ((9 / 100) * sum))

  return round(total)
}

function storeValue(){
   var getInputs = document.getElementById("sales").querySelectorAll("input"),
       array = [];

   for( var i = 0; i < getInputs.length; i++ ) {
     var itemsTotal = getInputs[i].value;
          array.push(itemsTotal);
   }

   // Converts name to a string and "shifts" it ouf of array
   var name = array.shift(),
       redefinedArray = array;

   var comissions = [
     [1, 239.99],
     [2, 129.75],
     [3, 99.95],
     [4, 350.89]
   ]

   var sum = 0;

   for(var i = 0; i < comissions.length; ++i) {
     // Adds value set to commission array
     comissions[i][2] = array[i]
     // Multiples values and sales items and adds value set to comission
     comissions[i][3] = round(array[i] * comissions[i][1])

     // commissions total
     sum += comissions[i][3];
   }

   const table = `<table class="square-table">
    <thead>
      <tr>
        <td>Item #</td>
        <td>Price</td>
        <td>Number Sold</td>
        <td>Total</td>
      </tr>
    </thead>
    <tbody>
      ${comissions.map(comission => `<tr>
        <td>${comission[0]}</td>
        <td>${comission[1]}</td>
        <td>${comission[2]}</td>
        <td>${comission[3]}</td>
        </tr>`).join('')}
      <tr>
        <td colspan="2">Total Amount Sold:</td>
        <td colspan="2">${round(sum)}</td>
      </tr>
      <tr>
        <td colspan="2">Total Weekly Earnings:</td>
        <td colspan="2">${totalEarned(sum)}</td>
      </tr>
    </tbody
   </table>
   `

   document.getElementById("sales").insertAdjacentHTML('afterend', table)
}


document.getElementById("sales").addEventListener("submit", function(event){
  event.preventDefault();
  storeValue()
})

$(function(){
  $('#alert').on("mouseover", function(){
    $(this).tooltip({
      position: { my: "left+15 center", at: "right center" },
      content: "Please make sure that the salesperson's name is spelled correctly."
    });
  })
});
