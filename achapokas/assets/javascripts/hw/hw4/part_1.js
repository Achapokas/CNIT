const collection = [];
const anotherCollection = [];

for(var i = 5; i <= 20; i+=3) {
  const integer = i;

  collection.push(integer);
}

var i = -1;
do {
  i+=4;
  const integer = i;
  anotherCollection.push(i)
} while (i < 31)

function multiply(array) {
  var sum = 1;
  for(var i = 0; i < array.length; i++) {
    sum = sum * array[i]
  }
  return array.join(' * ') + ' = ' + sum.toLocaleString()
}

function add(array) {
  var sum = 0;
  for(var i = 0; i < array.length; i++) {
    sum = sum + array[i]
  }

  return array.join(' + ') + ' = ' + sum.toLocaleString()
}

const integers = document.getElementById("integers");


integers.insertAdjacentHTML('afterbegin', `<p>${multiply(collection)}</p>`)
integers.insertAdjacentHTML('afterbegin', `<p>${add(collection)}</p>`)
integers.insertAdjacentHTML('afterbegin', `<p>${add(anotherCollection)}</p>`)
integers.insertAdjacentHTML('afterbegin', `<p>${multiply(anotherCollection)}</p>`)

$('#integers').draggable();

