const todoList = {
  todos: [],
  displayTodos: function() {
    console.log('My Todos: ', this.todos)
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
  }
}

// todoList.addTodo('item 1')
// todoList.changeTodo(0, 'item 4')
// todoList.toggleCompleted(0)
// todoList.deleteTodo(0)
todoList.displayTodos()


