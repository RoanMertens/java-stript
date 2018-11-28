const todoList = {
  todos: [],
  displayTodos: function() {
    if (this.todos.length === 0) {
      console.log('Your todo list is empty!')
    } else {
      for (i = 0; i < this.todos.length; i++) {
        const todo = this.todos[i]
        if (todo.completed == true) {
          console.log(i + 1 + '.', '(x)', todo.todoText)
        } else {
          console.log(i + 1 + '.', '( )', todo.todoText)
        }
      }
    }
  },
  addTodo: function(todoText) {
    this.todos.push({
      todoText: todoText,
      completed: false
    })
  },
  changeTodo: function(location, todoText) {
    this.todos[location].todoText = todoText
  },
  toggleCompleted: function(location) {
    const todo = this.todos[location]
    todo.completed = !todo.completed
  },
  deleteTodo: function(location) {
    this.todos.splice(location, 1)
  },
  toggleAll: function() {
    let counter = 0
    for (i = 0; i < this.todos.length; i++) {
      const todo = this.todos[i]
      if (todo.completed === true) {
        counter += 1
      }
    }
    if (this.todos.length === counter) {
      for (i = 0; i < this.todos.length; i++) {
        this.todos[i].completed = false
      }
    } else {
      for (i = 0; i < this.todos.length; i++) {
        this.todos[i].completed = true
      }
    }
  }
}

const displayTodosButton = document.getElementById('displayTodosButton')
displayTodosButton.addEventListener('click', function() {
  todoList.displayTodos()
})

const toggleAllTodosButton = document.getElementById('toggleAllTodosButton')
toggleAllTodosButton.addEventListener('click', function() {
  todoList.toggleAll()
})
// todoList.addTodo('groceries')
// todoList.addTodo('vacuuming')
// todoList.addTodo('dishes')
// todoList.toggleCompleted(0)
// // todoList.toggleCompleted(1)
// todoList.toggleCompleted(2)
// todoList.displayTodos()


// todoList.toggleAll()
// // todoList.changeTodo(2, 'dancing')
// // todoList.toggleCompleted(1)
// // todoList.deleteTodo(0)
// todoList.displayTodos()


