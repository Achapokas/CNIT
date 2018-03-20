// Script should:
// Input product number
// Allow the user to include the qty sold for the week
// First calculate the amount based on 1 product in the qty field. When user increases the value recalculate
// user is able to reset / clear fields
// Hitting the calculate button will recalculate

const form = document.forms["mail"],
      products = form.elements["product"],
      prices = form.elements["price"],
      qtys = form.elements["quanity"],
      amounts = form.elements["amount"],
      total = form.elements["total"];

      for(var i = 0; i < products.length; i++) {
        const productValue = products[i].value,
              price = prices[i];


        switch (productValue) {
          case "1":
            price.setAttribute('value', 2.98)
          break;
          case "2":
            price.setAttribute('value', 4.50)
          break;
          case "3":
            price.setAttribute('value', 9.98)
          break;
          case "4":
            price.setAttribute('value', 4.49)
          break;
          case "5":
            price.setAttribute('value', 6.87)
          break;
        }
      }

form.addEventListener("submit", function(event) {
  event.preventDefault();

  const array = [],
        reducer = (accumulator, currentValue) => accumulator + currentValue;

    for(var i = 0; i < prices.length; i++) {
        const productValue = products[i].value,
              price = prices[i].value,
              qty = qtys[i].value;
              amount = amounts[i];


        switch (productValue) {
          case "1":
            amount.value = price * qty
          break;
          case "2":
            amount.value = price * qty
          break;
          case "3":
            amount.value = price * qty
          break;
          case "4":
            amount.value = price * qty
          break;
          case "5":
            amount.value = price * qty
          break;
        }

        const convertStringToInteger = Number(amount.value);

        array.push(convertStringToInteger)
    }

    const reduceTotal = array.reduce(reducer);

    total.value = reduceTotal.toFixed(2)
})
