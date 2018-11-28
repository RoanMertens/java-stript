const todoList = {
  todos: [],
  displayTodos: function() {
    if (this.todos.length === 0) {
      console.log('Your todo list is empty!')
    } else {
      for (i = 0; i < this.todos.length; i++) {
        const todo = this.todos[i]
        console.log('Item ' + (i + 1) + ' is:', todo.todoText)
        console.log('Is this item completed:', todo.completed)
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
  }
}



// todoList.addTodo('item 1')
// todoList.addTodo('item 5')
// todoList.addTodo('item 3')
// todoList.changeTodo(0, 'item 4')
// todoList.toggleCompleted(1)
// todoList.deleteTodo(0)
todoList.displayTodos()


