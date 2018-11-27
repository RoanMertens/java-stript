
// function that divides first number by the second number
// function divideBy(a, b) {
//   return a / b
// }

// console.log(divideBy(10, 2))

const todo = ['dishes', 'laundry', 'sleep', 'comedy night']


function displayTodos() {
  console.log('My Todo list:', todo)
}


function addTodos(task) {
  todo.push(task)
}

function changeTodos(newValue, position) {
  todo[position] = newValue
}

// addTodos("dance")

// changeTodos('buy detergent', 1)

displayTodos()
