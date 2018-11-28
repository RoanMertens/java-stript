const todoList = {
  todos: [],
  displayTodos: function() {
    if (this.todos.length === 0) {
      console.log('Your to do list is empty!')
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
    this.displayTodos()
  },
  changeTodo: function(location, todoText) {
    this.todos[location].todoText = todoText
    this.displayTodos()
  },
  toggleCompleted: function(location) {
    const todo = this.todos[location]
    todo.completed = !todo.completed
    this.displayTodos()
  },
  deleteTodo: function(location) {
    this.todos.splice(location, 1)
    this.displayTodos()
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
    this.displayTodos()
  }
}

const handlers = {
  displayTodos: function(){
    todoList.displayTodos()
  },
  toggleAll: function(){
    todoList.toggleAll()
  },
  addTodo: function() {
    const addTodoTextInput = document.getElementById('addTodoTextInput')
    todoList.addTodo(addTodoTextInput.value)
    addTodoTextInput.value = ''
  },
  changeTodo: function() {
    const changeTodoTextInput = document.getElementById('changeTodoTextInput')
    const changeTodoLocation = document.getElementById('changeTodoLocation')
    todoList.changeTodo(changeTodoLocation.valueAsNumber - 1, changeTodoTextInput.value)
    changeTodoTextInput.value = ''
    changeTodoLocation.value = ''
  }
}

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


