function createsObjects() {
  var getInputs = document.getElementById("sales").querySelectorAll("input");

  function Commissions(item, price, sold, total)
  {
    this.item = item;
    this.price = price;
    this.sold = sold;
    this.total = total;
  }

  for(var i = 0; i < getInputs.length; i++) {
    var inputValues = getInputs[i].value;
  }

  Commissions.prototype.soldCount = function() {}
  Commissions.prototype.totalCount = function() {}

  var item = new Commissions(1, 239.99, 2, 450.00)

  console.log(item)
}



document.getElementById("sales").addEventListener("submit", function(event){
  event.preventDefault();
  createsObjects()
})
