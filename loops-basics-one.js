
// dont forget the semi colon. the comma doesnt work there
// initializatiion;   condition;    final-expression
// for (let counter = 0; counter < 3; counter++) {
//   console.log('Hey!')
// }

// for (let c = 10; c >= 0; c -= 1) {
//   console.log('minus!' + c)
//   // c -= 1 //this works as well
// }

testArray = ['item 1', 'item 5', 'item 9', 'item 12']
for (let c = testArray.length; c > 0; c--) {
  console.log(testArray[c - 1])
}

// forEach method on the array testArray does the function logName
// for each element in the array
function logName(name) {
  console.log(name)
}

testArray.reverse().forEach(logName)

// for loop gives you the index
// forEach method gives you the element in the array
